---
title: Blank layout
description: The blank layout.
permalink: blank
layout: blank
---
{
  "layout": {{ layout | jsonify | escape }},
  "page": {{ page | jsonify | escape }}
}