---
layout: default
title: Notes Index
---

# All Notes

{% assign pages_by_dir = site.pages | group_by_exp:"page", "page.path | split: '/' | slice: 0, page.path | split: '/' | size - 1 | join: '/'" %}

<ul>
  {% for group in pages_by_dir %}
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
