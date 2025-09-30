---
title: Home
description: An introduction to the Core template.
layout: home
---

# {{ page.title }}

{{ page.description }}

## Pages

{%- if site.pages.size > 0 %}
{% assign sorted_pages = site.pages | sort: "title" -%}
{% for p in sorted_pages %}
{%- if p.title and p.path != page.path %}
- [{{ p.title | default:'(Untitled page)' }}]({{ site.github.url }}{{ p.url }})
{%- endif %}
{%- endfor %}
{%- else %}
_(Nothing has been posted)_
{%- endif %}

## Posts

{%- if site.posts.size > 0 %}
{% assign sorted_posts = site.posts | sort: "date" -%}
{% for p in sorted_posts %}
- [{{ p.title | default:'(Untitled post)' }}]({{ site.github.url }}{{ p.url }})
{%- endfor %}
{%- else %}
_(Nothing has been posted)_
{%- endif %}