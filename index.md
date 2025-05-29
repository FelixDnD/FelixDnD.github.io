---
layout: default
title: Notes Index
---

# All Notes

{% assign grouped_pages = "" %}
{% assign pages_grouped = "" %}
{% capture pages_grouped %}
  {% for page in site.pages %}
    {% assign path_parts = page.path | split: '/' %}
    {% assign dir_parts = path_parts | slice: 0, path_parts.size | minus: 1 %}
    {% assign dir = dir_parts | join: '/' %}
    {% assign page = page | merge: { "dir": dir } %}
    {{ page | jsonify }},
  {% endfor %}
{% endcapture %}
{% assign grouped_pages = site.pages | group_by_exp: "page", "page.path | split: '/' | slice: 0, page.path | split: '/' | size | minus: 1 | join: '/'" %}

<ul>
  {% for group in grouped_pages %}
    {% assign dir = group.name %}
    {% if dir != "" %}
      <li><strong>{{ dir }}</strong>
        <ul>
          {% for page in group.items %}
            {% if page.path contains '.md' and page.url != "/" %}
              <li><a href="{{ page.url | relative_url }}">{{ page.title }}</a></li>
            {% endif %}
          {% endfor %}
        </ul>
      </li>
    {% else %}
      {% for page in group.items %}
        {% if page.path contains '.md' and page.url != "/" %}
          <li><a href="{{ page.url | relative_url }}">{{ page.title }}</a></li>
        {% endif %}
      {% endfor %}
    {% endif %}
  {% endfor %}
</ul>
