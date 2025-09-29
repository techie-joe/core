---
title: Posts
description: Listing posts on this site.
permalink: posts
---

# {{ page.title }}

> {{ page.description }}

{% for p in site.posts %}
{%- if p.path != page.path %}
- [{{ p.title | default:'(Untitled post)' }}]({{ site.github.url }}{{ p.url }})
{%- endif %}
{%- endfor %}
{%- if site.posts.size == 0 %}
_(No post at the moment)_
{%- endif %}

---

{% include back.html %}
{% include gohome.html %}