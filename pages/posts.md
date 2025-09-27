---
title: Posts
description: Posts on this site.
permalink: posts
---

# {{ page.title }}

> {{ page.description }}

{% for p in site.posts %}- [{{ p.title | default:'(Untitled post)' }}]({{ site.github.url }}{{ p.url }})
{% endfor %}

&nbsp;  
&nbsp;  

---

{% include back.html %}
<a href="{{ site.github.url }}" class="" title="Go to Home Page">Home</a>