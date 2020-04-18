module Jekyll
  class GifVidTag < Liquid::Tag

    def initialize(tag_name, text, tokens)
      super
      @extensionless = text.strip
    end

    def render(context)
      "<p><video class='gifvid loading-lazy' autoplay='true' loop='true' muted='true' playsinline='true'>
        <source data-src='#{@extensionless}.webm' type='video/webm'>
        <source data-src='#{@extensionless}.mp4' type='video/mp4'>
        Sorry, your browser doesn't support embedded videos.
      </video></p>"
    end
  end
end

Liquid::Template.register_tag('gifvid', Jekyll::GifVidTag)