module Jekyll
  class GifVidTag < Liquid::Tag

    def initialize(tag_name, text, tokens)
      super
      @extensionless = text.strip
    end

    def render(context)
      "<p><video class='gifvid' autoplay='true' loop='true' muted='true' playsinline='true'>
        <source src='#{@extensionless}.webm' type='video/webm'>
        <source src='#{@extensionless}.mp4' type='video/mp4'>
        Sorry, your browser doesn't support embedded videos.
      </video></p>"
    end
  end
end

Liquid::Template.register_tag('gifvid', Jekyll::GifVidTag)