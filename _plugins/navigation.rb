require "nokogiri"

module Jekyll
  class NavigationGenerator < Liquid::Tag
    def render(context)
      current_page = page(context)
      doc = Nokogiri::HTML(current_page.content)
      headings = doc.xpath("//*[self::h1 or self::h2 or self::h3 or self::h4]")
      get_headings_and_subheadings(headings, 1).map { |heading|
        render_list(heading)
      }.join.to_s
    end

    def page(context)
      context.registers[:site].pages.detect { |p| p.path==context['page']['path'] }
    end

    private

    def render_list(heading)
      <<-EOS
      <ul>
        <li>
          <a href="##{heading[:id]}">#{heading[:text]}</a>
        </li>
        #{render_subheadings(heading[:subheadings])}
      </ul>
      EOS
    end

    def render_subheadings(subheadings)
      subheadings.map { |subheading|
        render_list(subheading)
      }.join.to_s
    end

    def get_headings_and_subheadings(headings, level)
      headings.slice_before { |h| h.name == "h#{level}" }.map do |headings|
        heading = headings.shift
        {
          text: heading.text,
          id: heading.attributes["id"].value,
          subheadings: get_headings_and_subheadings(headings, level + 1)
        }
      end
    end
  end
end

Liquid::Template.register_tag('sidebar_nav', Jekyll::NavigationGenerator)
