class Kramdown::Converter::Html
  # Overrides this function:
  # https://kramdown.gettalong.org/rdoc/Kramdown/Converter/Html.html#method-i-convert_img
  def convert_img(el, _indent)
    "<noscript class=\"loading-lazy\"><img#{html_attributes(el.attr)} loading=\"lazy\" /></noscript>"
  end
  # Overrides this function:
  # https://kramdown.gettalong.org/rdoc/Kramdown/Converter/Html.html#method-i-convert_a
  def convert_a(el, indent)
    href = el.attr['href']
    if href
      url = URI(href)
      host = url.host
      if host and host != 'codetheweb.blog'
        el.attr['target'] = '_blank'
      end
    end
    format_as_span_html(el.type, el.attr, inner(el, indent))
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