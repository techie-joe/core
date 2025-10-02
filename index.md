---
title: Home
description: An introduction to the Core template.
layout: home
---

# {{ page.title }}

{{ page.description }}

## Pages

{% assign filtered_pages = site.pages | where_exp: "p", "p.title and p.path != page.path" %}
{% assign sorted_pages = filtered_pages | sort: "path" | sort: "order" %}
{% if sorted_pages.size > 0 %}
{% for p in sorted_pages %}
- [{{ p.title | default:'(Untitled page)' }}]({{ site.github.url }}{{ p.url }})
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