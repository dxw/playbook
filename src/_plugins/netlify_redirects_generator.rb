Jekyll::Hooks.register :site, :post_write do |site|
  redirects = []

  site.pages.each do |page|
    Array(page.data['redirect_from']).each do |from|
      redirects << "#{from} #{page.url} 301"
    end
  end

  if redirects.any?
    redirects_path = File.join(site.dest, "_redirects")
    File.open(redirects_path, "w") do |f|
      f.puts redirects.sort!.join("\n")
    end

    puts "✅ Wrote #{redirects.size} Netlify redirects to #{redirects_path}"
  else
    puts "ℹ️ No redirects found in front matter."
  end
end
