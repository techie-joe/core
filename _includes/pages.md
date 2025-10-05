{% assign sorted_pages = site.pages | sort: "path" %}
{% if sorted_pages.size > 0 %}
{% for p in sorted_pages %}
{%- if p.title %}
{%- if p.path != page.path %}
- [{{ p.title | default:'(Untitled page)' }}]({{ site.github.url }}{{ p.url }})
{%- else %}
- {{ p.title | default:'(Untitled page)' }}
{%- endif %}
{%- endif %}
{%- endfor %}
{%- else %}
_(Nothing has been posted)_
{%- endif %}