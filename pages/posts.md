---
title: Posts
description: List of all posts on this site.
permalink: posts
---

# {{ page.title }}

{{ page.description }}

{% assign sorted_posts = site.posts | sort: "date" %}
{% if sorted_posts > 0 %}
{% for p in sorted_posts %}
- [{{ p.title | default:'(Untitled post)' }}]({{ site.github.url }}{{ p.url }})
{%- endfor %}
{%- else %}
_(Nothing has been posted)_
{%- endif %}

---

{% include back.html %}
{% include gohome.html %}