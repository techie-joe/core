---
title: Posts
description: Listing posts on this site.
permalink: posts
---

# {{ page.title }}

{{ page.description }}

{%- if sorted_posts.size > 0 %}
{% assign sorted_posts = site.posts | sort: "date" -%}
{% for p in sorted_posts %}
- [{{ p.title | default:'(Untitled post)' }}]({{ site.github.url }}{{ p.url }})
{%- endfor %}
{%- else %}
_(No post at the moment)_
{%- endif %}

---

{% include back.html %}
{% include gohome.html %}