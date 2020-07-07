require 'fastimage'

module Jekyll
  class GifVidTag < Liquid::Tag

    def initialize(tag_name, text, tokens)
      super
      @extensionless = text.strip
    end

    def render(context)

      width = nil
      height = nil
      if @extensionless.start_with?("/")
        width, height = FastImage.size(".#{@extensionless}.gif")

        # Use absolute URLs in production
        if ENV['JEKYLL_ENV'] == 'production'
          @extensionless = "https://codetheweb.blog" + @extensionless
        end
      else
        width, height = FastImage.size(@extensionless)
      end

      # Calculate aspect ratio for video
      # See https://css-tricks.com/fluid-width-video/#iframe-video-youtube-vimeo-etc
      # Replace with the aspect-ratio CSS property in a few years when it has support
      paddingBottomPercent = (height.to_f / width.to_f) * 100

      "<p><div class='gifvid' style='padding-bottom:#{paddingBottomPercent}%'>
      <video class='loading-lazy' autoplay='true' loop='true' muted='true' playsinline='true' width='#{width}' height='#{height}'>
        <source data-src='#{@extensionless}.webm' type='video/webm'>
        <source data-src='#{@extensionless}.mp4' type='video/mp4'>
        Sorry, your browser doesn't support embedded videos.
      </video></div></p>"
    end
  end
end

Liquid::Template.register_tag('gifvid', Jekyll::GifVidTag)