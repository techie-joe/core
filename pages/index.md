---
title: Pages
description: List of all pages on this site.
permalink: pages
---

# {{ page.title }}

{{ page.description }}

{% assign filtered_pages = site.pages | where_exp: "p", "p.title and p.path != page.path" %}
{% assign sorted_pages = filtered_pages | sort: "path" | sort: "order" %}
{% if sorted_pages.size > 0 %}
{% for p in sorted_pages %}
- [{{ p.title | default:'(Untitled page)' }}]({{ site.github.url }}{{ p.url }})
{%- endfor %}
{%- else %}
_(Nothing has been posted)_
{%- endif %}

---

{% include back.html %}
{% include gohome.html %}