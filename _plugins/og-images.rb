# This file is commented out for now because the npm package installation seems to be messing up
# The =begin and =end are used to make a multiline comment in Ruby.
=begin
module OgImages
  class Generator < Jekyll::Generator
    def generate(site)
      has_children = false
      site.posts.docs.each { |p|
        title = p.data['title']
        slug = p.data['slug']
        rootDir = __dir__.sub! '/_plugins', ''
        
        if File.exist?(rootDir + '/assets/img/og-images/posts/' + slug + '.png')
          # puts slug + '.png already exists'
        else
          puts "Generating og image for #{slug}"
          # has_children = true
          # Process.fork do
            system('node ogimage.js "' + title + '" "' + slug + '"')
            staticFile = Jekyll::StaticFile.new(site, site.source, "/assets/img/og-images/posts", "#{slug}.png")
            # puts staticFile.destination_rel_dir
            # puts site.static_files.length
            site.static_files << staticFile
            # puts site.static_files.length
          # end
        end
      }

      if has_children
        Process.wait
      end
      puts 'All processes finished.'
    end
  end
end
=end