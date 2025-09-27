###### page

```yml
# page [ {% for v in page %}{{ v[0] }} {% endfor %}]

title  : {{ page.title }}
layout : {{ page.layout }}
theme  : {{ page.theme }}

url     : {{ page.url }}
dir     : {{ page.dir }}
path    : {{ page.path }}
name    : {{ page.name }}
lang    : {{ page.lang }}

published : {{ page.published }} # false - if you don't want to generate the post

excerpt      : {{ post.excerpt | jsonify }}
content.size : {{ page.content.size | default:0 }}
output.size  : {{ page.output.size | default:0 }}

```
