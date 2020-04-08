class Kramdown::Converter::Html
  # Overrides this function:
  # https://kramdown.gettalong.org/rdoc/Kramdown/Converter/Html.html#method-i-convert_img
  def convert_img(el, _indent)
    "<img#{html_attributes(el.attr)} loading=\"lazy\" />"
  end
end

class Jekyll::Converters::Markdown::MyCustomProcessor
  def initialize(config)
    require 'kramdown'
    @config = config
  rescue LoadError
    STDERR.puts 'You are missing a library required for Markdown. Please run:'
    STDERR.puts '  $ [sudo] gem install kramdown'
    raise FatalException.new("Missing dependency: kramdown")
  end

  def convert(content)
    # ::FunkyMarkdown.new(content).convert
    Kramdown::Document.new(content, {
      input: 'GFM',
      syntax_highlighter: 'rouge'
    }).to_html
  end
end