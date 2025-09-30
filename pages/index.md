---
title: Pages
description: Listing pages on this site.
permalink: pages
---

# {{ page.title }}

{{ page.description }}

{%- if sorted_pages.size > 0 %}
{% assign sorted_pages = site.pages | sort: "title" -%}
{% for p in sorted_pages %}
{%- if p.title and p.path != page.path %}
- [{{ p.title | default:'(Untitled page)' }}]({{ site.github.url }}{{ p.url }})
{%- endif %}
{%- endfor %}
{%- else %}
_(No page at the moment)_
{%- endif %}

---

{% include back.html %}
{% include gohome.html %}