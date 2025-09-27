---
title: Pages
description: Pages on this site.
---

# {{ page.title }}

> {{ page.description }}

{% for p in site.pages %}{% if p.title and p.title != page.title %}- [{{ p.title }}]({{ site.github.url + p.url }})
{% endif %}{% endfor %}

&nbsp;  
&nbsp;  

---

{% include back.html %}
<a href="{{ site.github.url }}" class="" title="Go to Home Page">Home</a>