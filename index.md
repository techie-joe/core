---
title: Home
description: An introduction to the Core template.
layout: home
---

# {{ page.title }}

{{ page.description }}

## Pages

{% for p in site.pages %}
{%- if p.title && p.path != page.path %}
- [{{ p.title | default:'(Untitled page)' }}]({{ site.github.url }}{{ p.url }})
{%- endif %}
{%- endfor %}
{%- if site.pages.size == 0 %}
_(No page at the moment)_
{%- endif %}

## Posts

{% for p in site.posts %}
{%- if p.path != page.path %}
- [{{ p.title | default:'(Untitled post)' }}]({{ site.github.url }}{{ p.url }})
{%- endif %}
{%- endfor %}
{%- if site.posts.size == 0 %}
_(No post at the moment)_
{%- endif %}