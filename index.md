---
layout: default
title: Notes Index
---

<h2>PCs</h2>
<ul>
  {% for page in site.pages %}
    {% if page.path contains 'PCs/' and page.path contains '.md' %}
      <li><a href="{{ page.url | relative_url }}">{{ page.title }}</a></li>
    {% endif %}
  {% endfor %}
</ul>

<h2>NPCs</h2>
<ul>
  {% for page in site.pages %}
    {% if page.path contains 'NPCs/' and page.path contains '.md' %}
      <li><a href="{{ page.url | relative_url }}">{{ page.title }}</a></li>
    {% endif %}
  {% endfor %}
</ul>

<h2>Orte</h2>
<ul>
  {% for page in site.pages %}
    {% if page.path contains 'Orte/' and page.path contains '.md' %}
      <li><a href="{{ page.url | relative_url }}">{{ page.title }}</a></li>
    {% endif %}
  {% endfor %}
</ul>

<h2>Sessions</h2>
<ul>
  {% for page in site.pages %}
    {% if page.path contains 'Sessions/' and page.path contains '.md' %}
      <li><a href="{{ page.url | relative_url }}">{{ page.title }}</a></li>
    {% endif %}
  {% endfor %}
</ul>
