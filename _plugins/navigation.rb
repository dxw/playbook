require "nokogiri"

module Jekyll
  class NavigationGenerator < Liquid::Tag
    def render(context)
      current_page = page(context)
      title = current_page.data["title"]
      @doc = Nokogiri::HTML(current_page.content)
      headings = @doc.xpath("//*[self::h2 or self::h3 or self::h4]")
      title = render_page_title(title)
      nav = get_headings_and_subheadings(headings).map { |heading|
        render_list(heading)
      }.join

      title + nav
    end

    def all_pages(context)
      context.registers[:site].pages + context.registers[:site].collections["guides"].docs
    end

    def page(context)
      all_pages(context).detect { |p| p.relative_path == context["page"]["path"] }
    end

    private

    def render_page_title(title = "dxw's Playbook")
      <<-EOS
      <h1 class="page-title">#{title}</h1>
      EOS
    end

    def render_list(heading)
      <<-EOS
      <ul>
        <li data-title="#{heading[:text]}" data-content="#{heading[:content]}">
          <a href="##{heading[:id]}" data-target="#{heading[:id]}">#{heading[:text]}</a>
          #{render_subheadings(heading[:subheadings])}
        </li>
      </ul>
      EOS
    end

    def render_subheadings(subheadings)
      subheadings.map { |subheading|
        render_list(subheading)
      }.join
    end

    def get_headings_and_subheadings(headings, heading_level = 2)
      headings.slice_before { |h| h.name == "h#{heading_level}" }.map do |headings|
        heading = headings.shift
        {
          text: heading.text,
          id: heading.attributes["id"].value,
          content: get_content(heading),
          subheadings: get_headings_and_subheadings(headings, heading_level + 1)
        }
      end
    end

    def get_content(heading)
      current_heading_selector = "#{heading.name}[@id='#{heading.attributes["id"]}']"
      following_content = @doc.xpath("//#{current_heading_selector}/following-sibling::*")
      following_content.slice_before { |s| s.name.match(/h/) }.first.map(&:text).join
    end
  end
end

Liquid::Template.register_tag("sidebar_nav", Jekyll::NavigationGenerator)
