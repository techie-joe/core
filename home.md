---
title: Home
description: An introduction to the Core template.
permalink: home
---

# {{ page.title }}

{{ page.description }}

{% include layout-vars.md %}
{% include page-vars.md %}

---

## Pages

{% for p in site.pages -%}
{%- if p.path != page.path %}
- [{{ p.title | default:'(Untitled page)' }}]({{ site.github.url }}{{ p.url }})
{%- endif %}
{%- endfor %}

## Posts

{% for p in site.posts -%}
{%- if p.path != page.path %}
- [{{ p.title | default:'(Untitled post)' }}]({{ site.github.url }}{{ p.url }})
{%- endif %}
{%- endfor %}

---