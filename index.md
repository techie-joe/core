---
title: Home
description: An introduction to the Core template.
layout: home
---

# {{ page.title }}

{{ page.description }}

## Pages

{% assign sorted_pages = site.pages | sort: "path" %}
{% if sorted_pages.size > 0 %}
{% for p in sorted_pages %}
{%- if p.title and p.path != page.path %}
- [{{ p.title | default:'(Untitled page)' }}]({{ site.github.url }}{{ p.url }})
{%- endif %}
{%- endfor %}
{%- else %}
_(Nothing has been posted)_
{%- endif %}

## Posts

{% assign sorted_posts = site.posts | sort: "date" | reverse %}
{% if sorted_posts.size > 0 %}
{% for p in sorted_posts %}
- [{{ p.title | default:'(Untitled post)' }}]({{ site.github.url }}{{ p.url }})
{%- endfor %}
{%- else %}
_(Nothing has been posted)_
{%- endif %}