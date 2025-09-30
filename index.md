---
title: Home
description: An introduction to the Core template.
layout: home
---

# {{ page.title }}

{{ page.description }}

## Pages

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

## Posts

{%- if sorted_posts.size > 0 %}
{% assign sorted_posts = site.posts | sort: "date" -%}
{% for p in sorted_posts %}
- [{{ p.title | default:'(Untitled post)' }}]({{ site.github.url }}{{ p.url }})
{%- endfor %}
{%- else %}
_(No post at the moment)_
{%- endif %}