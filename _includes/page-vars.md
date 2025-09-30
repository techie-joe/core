###### page

```yml
{%- for v in page %}
{%- if v[0]=='content' %}
{{ v[0] }}: [{{ v[1].size }} characters]
{%- else %}
{{ v[0] }}: {{ v[1] }}
{%- endif %}
{%- endfor %}
```

###### site.related_posts

```yml
size: {{ site.related_posts.size | default:0 }}
{%- for post in site.related_posts %}
-
  {%- for v in post %}
  {{ v[0] }}: {{ v[1] | jsonify }}
  {%- endfor %}
{%- endfor %}
```