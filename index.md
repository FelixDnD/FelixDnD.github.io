---
layout: default
title: DnD Mini Wiki
---

# 📚 DnD Mini Wiki Contents

{% assign folders = site.pages | map: "path" | map: "split" | map: first | uniq | sort %}

{% for folder in folders %}
  {% unless folder == "" or folder contains "." %}
  ## 📁 {{ folder | capitalize }}

  <ul>
    {% for page in site.pages %}
      {% if page.path contains folder and page.path != folder and page.name != "index.md" %}
        <li><a href="{{ page.url | relative_url }}">{{ page.title }}</a></li>
      {% endif %}
    {% endfor %}
  </ul>
  {% endunless %}
{% endfor %}
