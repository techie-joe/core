{% assign sorted_posts = site.posts | sort: "date" | reverse %}
{% if sorted_posts.size > 0 %}
{% for p in sorted_posts %}
- [{{ p.title | default:'(Untitled post)' }}]({{ site.github.url }}{{ p.url }})
{%- endfor %}
{%- else %}
_(Nothing has been posted)_
{%- endif %}