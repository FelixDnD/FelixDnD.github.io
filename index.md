---
layout: default
title: Home
---

<h1>Markdown Files</h1>
<ul>
  {% for page in site.pages %}
    {% if page.path contains 'root/' %}
      <li><a href="{{ page.url }}">{{ page.title }}</a></li>
    {% endif %}
  {% endfor %}
</ul>
