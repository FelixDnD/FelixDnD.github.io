---
layout: default
title: Notes Index
---

# All Notes

<ul>
  {% for page in site.pages %}
    {% if page.path contains '.md' and page.url != "/" %}
      <li><a href="{{ page.url | relative_url }}">{{ page.title }}</a></li>
    {% endif %}
  {% endfor %}
</ul>
