---
title: Pages
description: Listing pages on this site.
permalink: pages
---

# {{ page.title }}

> {{ page.description }}

{% for p in site.pages %}{% if p.title and p.title != page.title %}- [{{ p.title }}]({{ site.github.url }}{{ p.url }})
{% endif %}{% endfor %}

---

{% include back.html %}
<a href="{{ site.github.url }}" class="" title="Go to Home Page">Home</a>