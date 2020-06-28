require 'fastimage'

class Kramdown::Converter::Html
  # Overrides this function:
  # https://kramdown.gettalong.org/rdoc/Kramdown/Converter/Html.html#method-i-convert_img
  def convert_img(el, _indent)
    src = el.attr["src"]
    el.attr["src"] = nil

    # Give all images width and height attributes
    # so that their aspect ratio is preserved before
    # they are lazy loaded
    width = nil
    height = nil
    if src.start_with?("/")
      width, height = FastImage.size(".#{src}")
    else
      width, height = FastImage.size(src)
    end
    el.attr["width"] = width if width
    el.attr["height"] = height if height

    # Load images as WebPs using statically.io.
    # They automatically serve a PNG if they detect a browser
    # that doesn't support WebP, so no need for fallback URLs.
    pngSrc = "#{src}?x=x"
    webpSrc = "#{src}?x=x"
    shouldUseStaticallyRegEx = /^\/.*\.(png|jpg)$/
    if ENV['JEKYLL_ENV'] == 'production' and shouldUseStaticallyRegEx.match?(src)
      pngSrc = "https://cdn.statically.io/img/codetheweb.blog#{src}?f=png"
      webpSrc = "https://cdn.statically.io/img/codetheweb.blog#{src}?f=webp"
    end
    
    "<picture>
      <source srcset='#{webpSrc}&w=720, #{webpSrc}&w=1440 2x, #{webpSrc}&w=2160 3x, #{webpSrc}&w=2880 4x' type='image/webp'>
      <source srcset='#{pngSrc}&w=720, #{pngSrc}&w=1440 2x, #{pngSrc}&w=2160 3x, #{pngSrc}&w=2880 4x' type='image/png'> 
      <img#{html_attributes(el.attr)} loading='lazy'>
    </picture>"
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
        el.attr['rel'] = 'noopener'
      end
    end
    format_as_span_html(el.type, el.attr, inner(el, indent))
  end
  # Overrides this function:
  # https://kramdown.gettalong.org/rdoc/Kramdown/Converter/Html.html#method-i-convert_codeblock
  def convert_codeblock(el, indent)
    attr = el.attr.dup
    lang = extract_code_language!(attr)
    hl_opts = {}
    highlighted_code = highlight_code(el.value, el.options[:lang] || lang, :block, hl_opts)

    if highlighted_code
      add_syntax_highlighter_to_class_attr(attr, lang || hl_opts[:default_lang])
      # Start added by me
      code_attr = {}
      code_attr['class'] = "language-#{lang}" if lang
      # End added by me
      # Start modified by me
      "#{' '*indent}<pre#{html_attributes(attr)}><code#{html_attributes(code_attr)}>#{highlighted_code}#{' '*indent}</code></pre>\n"
      # End modified by me
    else
      result = escape_html(el.value)
      result.chomp!
      if el.attr['class'].to_s =~ /\bshow-whitespaces\b/
        result.gsub!(/(?:(^[ \t]+)|([ \t]+$)|([ \t]+))/) do |m|
          suffix = ($1 ? '-l' : ($2 ? '-r' : ''))
          m.scan(/./).map do |c|
            case c
            when "\t" then "<span class=\"ws-tab#{suffix}\">\t</span>"
            when " " then "<span class=\"ws-space#{suffix}\">&#8901;</span>"
            end
          end.join('')
        end
      end
      code_attr = {}
      code_attr['class'] = "language-#{lang}" if lang
      "#{' '*indent}<pre#{html_attributes(attr)}><code#{html_attributes(code_attr)}>#{result}\n</code></pre>\n"
    end
  end
end

require 'execjs'
puts "ExecJS Runtime: #{ExecJS.runtime}"

module Kramdown
  module Converter
    module SyntaxHighlighter
      module MySyntaxHighlighter

        puts "COMPILING PRISM.JS"
        prismJsFile = File.open(File.expand_path('_includes/js/prism.js'))
        prismJsCode = prismJsFile.read + ";myLangFunctions = {
        html: text => Prism.highlight(text, Prism.languages.markup, 'markup'),
        css: text => Prism.highlight(text, Prism.languages.css, 'css'),
        javascript: text => Prism.highlight(text, Prism.languages.javascript, 'javascript')
        }"
        prismJsFile.close
        @context = ExecJS.compile(prismJsCode)

        def self.call(converter, text, lang, type, call_opts)
          if type == :block and lang
            lang = lang.downcase
            # puts "Highlighting #{lang} block"
            output = @context.call("myLangFunctions.#{lang}", text)
            return output
          end
        end
      end
    end
    add_syntax_highlighter(:MySyntaxHighlighter, SyntaxHighlighter::MySyntaxHighlighter)
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
      syntax_highlighter: :MySyntaxHighlighter
    }).to_html
  end
end