---
title: Pages
description: Listing pages on this site.
permalink: pages
---

# {{ page.title }}

{{ page.description }}

{% for p in site.pages %}
{%- if p.title && p.path != page.path %}
- [{{ p.title | default:'(Untitled page)' }}]({{ site.github.url }}{{ p.url }})
{%- endif %}
{%- endfor %}
{%- if site.pages.size == 0 %}
_(No page at the moment)_
{%- endif %}

---

{% include back.html %}
{% include gohome.html %}