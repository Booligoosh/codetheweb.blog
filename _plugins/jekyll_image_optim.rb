# From https://gist.github.com/sffc/a828267913591159ab1cc3e1bfde20d7
# Using instead of https://github.com/valerijaspasojevic/jekyll-compress-images

# Copyright 2018 Shane F. Carr
#
# Permission is hereby granted, free of charge, to any person obtaining a copy
# of this software and associated documentation files (the "Software"), to deal
# in the Software without restriction, including without limitation the rights
# to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
# copies of the Software, and to permit persons to whom the Software is
# furnished to do so, subject to the following conditions:
#
# The above copyright notice and this permission notice shall be included in
# all copies or substantial portions of the Software.
#
# THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
# IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
# FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
# AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
# LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
# OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
# SOFTWARE.

require "digest"
require "fileutils"
require "image_optim"
require "yaml"

Jekyll::Hooks.register :site, :pre_render do |site|
	# Load configuration options
	config = YAML::load_file(File.join(site.source, "_config.yml"))
	config = config["jekyll_image_optim"] || {}
	image_optim_options = config["image_optim"] || {}
	cache_relative_dir = config["cache_dir"] || ".jekyll-image-optim-cache"
	cache_dir = File.join(site.source, cache_relative_dir)
	out_dir = File.join(cache_dir, "out")
	index_yaml_path = File.join(cache_dir, "index.yml")
	FileUtils.mkdir_p(cache_dir)
	FileUtils.mkdir_p(out_dir)
	FileUtils.touch(index_yaml_path)
	cache_index = YAML::load_file(index_yaml_path) || {}

	# Exclude the cache directory from the jekyll watch
	site.exclude << cache_relative_dir

	# Process the images
	image_optim = ImageOptim.new(image_optim_options)
	site.static_files.map! do |static_file|
		if not image_optim.optimizable?(static_file.path)
			# Not an image file; no change necessary
			next static_file
		end

		relative_path = static_file.relative_path
		new_path = File.join(out_dir, relative_path)
		cc = cache_index[relative_path]
		image_md5 = Digest::MD5.file(static_file.path).hexdigest

		if not cc or not File.exists?(new_path) or cc[:md5] != image_md5 or cc[:options] != image_optim_options
			# Need to compute the optimized image
			puts "Optimizing image: #{relative_path}"
			FileUtils.mkdir_p(File.dirname(new_path))
			FileUtils.cp(static_file.path, new_path)
			image_optim.optimize_image!(new_path)
			cache_index[relative_path] = { md5: image_md5, options: image_optim_options }

			# Save the cache index file (do this for every image to allow restart after an interrupt)
			File.open(index_yaml_path, "w") { |f| f.write(cache_index.to_yaml) }
		end

		# Replace the Jekyll::StaticFile to point to the new location
		next Jekyll::StaticFile.new(site, out_dir, File.dirname(relative_path), File.basename(relative_path))
	end
end
