---
layout: default
title: Search Results
permalink: /search/
---
<div id="search-results"></div>

<script>
window.store = {
  {% assign pages = site.pages | where_exp: "page", "page.path contains 'content/'" %}
  {% for page in pages %}
    "{{ page.url }}": {
      "title": {{ page.name | replace: '.md', '' | jsonify }},
      "content": {{ page.content | strip_html | strip_newlines | jsonify }},
      "url": "{{ page.url }}"
    }{% unless forloop.last %},{% endunless %}
  {% endfor %}
};
</script>

<script src="https://unpkg.com/lunr/lunr.js"></script>
<script src="{{ '/assets/js/search.js' | relative_url }}"></script>

