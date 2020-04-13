module OgImages
  class Generator < Jekyll::Generator
    def generate(site)
      has_children = false
      site.posts.docs.each { |p|
        title = p.data['title']
        slug = p.data['slug']
        rootDir = __dir__.sub! '/_plugins', ''
        
        if File.exist?(rootDir + '/assets/img/og-images/posts/' + slug + '.png')
          puts slug + '.png already exists'
        else
          has_children = true
          Process.fork do
            system('node ogimage.js "' + title + '" "' + slug + '"')
            site.static_files << Jekyll::StaticFile.new(site, site.source, "/assets/img/og-images/posts", "#{slug}.png")
          end
        end
      }

      if has_children
        Process.wait
      end
      puts 'All processes finished.'
    end
  end
end