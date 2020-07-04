require 'fastimage'

module Jekyll
  class ImgDimensionAttributesTag < Liquid::Tag
    def render(context)
      # Gets the value of the variable name
      # https://stackoverflow.com/a/11923175
      imgpath = context[@markup.strip]
      # Get the image width & height, return as attributes
      width, height = FastImage.size(".#{imgpath}")
      "width=#{width} height=#{height}"
    end
  end
end

Liquid::Template.register_tag('img_dimension_attributes', Jekyll::ImgDimensionAttributesTag)