# Large text with <span class="text-red">red text</span> as heading
{: #_hero-title .hero }

![Small image](https://techie-joe.github.io/core/images/299-400x300.jpg)
{: .centered.float-sm-right.m-sm-4 width=400 height=300 }

## Better control over contents

Writing a paragraph can be exciting when you can tweak few things here and there. The `big-first` class will enlarge the first letter of a paragraph, and the `text-justify` class will neatly align a paragraph to its container. You can include images, [links](#) or add some `code`.
{: .text-justify.big-first }

Use the `indent` class to nudge the first line of a paragraph.
**There should be whitespace between paragraphs.**
And we recommend including a `README` file with information about your project.
{: .indent-x.text-justify-x }

**Following texts are meaningless fillers to fill up some space for the rest of this demo.** Burnt text turn upon turn may take a bit by bit a burn more or less tuned television more or less different than a different story.
{: .indent.text-justify.text-grey }

Each time and the channel a different story all with different story, to a pleasure the color of television. A story to honor the color of television the more or less was burnt, in such cases it varies person to another. This happened to the color of television as it differs to another different story.
{: .indent-x.text-justify.text-grey }

&nbsp;  

## More styles on text

Text can be
**bold**,
_italic_,
or ***both***.

You can
~~strikethrough~~,
or add some `code`.

Use html to include
<abbr title="Abbreviation">abbr</abbr>,
<samp>samp</samp>, and
<mark>mark</mark>.

Color them in 
<b class="text-primary">primary</b>
<b class="text-secondary">secondary</b>
<b class="text-gray">gray</b>
<b class="text-slategray">slategray</b>
<b class="text-red">red</b>
<b class="text-blue">blue</b>
<b class="text-green">green</b>
<b class="text-purple">purple</b>
<b class="text-pending">pending</b>
<b class="text-orange">orange</b>
<b class="text-orange-light">orange-light</b>.

## Text blocks

> You can write a bunch of text in a blockquote.
>
> > .. and nested them too.
> 

<!-- This content will not appear in the rendered Markdown -->

Write texts in a container `box` with a background `bg-primary`.
{: .box.bg-primary.text-white.text-center }

... or use a `box` wtih `bg-secondary` container.
{: .box.bg-secondary.text-center }

## Collapsible blocks

<details>
<summary>Click me for details</summary>
<p class="m-3">You can hide some contents here.</p>
</details>

## Code blocks

```js
// Javascript code with syntax highlighting.
var fun = function lang(l) {
  dateformat.i18n = require('./lang/' + l)
  return true;
}
```

```ruby
# Ruby code with syntax highlighting
GitHubPages::Dependencies.gems.each do |gem, version|
  s.add_dependency(gem, "= #{version}")
end
```

```
Long, single-line `code blocks` should not wrap. They should horizontally scroll if they are too long. This line should be long enough to demonstrate this.
```

### Small image

![Small image](https://techie-joe.github.io/core/images/core-64x64.png)

### Large image

Add full scale images, align them centered or float them left or right.

![Large image](https://techie-joe.github.io/core/images/2-1024x368.jpg){: .width-full.centered }

> Images for this demo came from [picsum.photos](https://picsum.photos/) and [unsplash](https://unsplash.com)
{: .text-small }

***

# Heading 1
## Heading 2
### Heading 3
#### Heading 4
##### Heading 5
###### Heading 6


## List

###### Ordered

1. Item one
    1. Item a
        1. Item x
        1. Item y
    1. Item b
1. Item two


###### Unordered

- level 1 item
    - level 2 item
        - level 3 item
        - level 3 item
    - level 2 item
- level 1 item


###### Tasks

- [x] Completed task.
- [ ] Pending task.
    - task item level 2
        - task item level 3
    - task item level 2

## Definitions

<dl>
<dt>Name</dt>
<dd>Godzilla</dd>
<dt>Born</dt>
<dd>1970</dd>
</dl>

## Table

| Full table      | Status       | Notes      |
| :---------------- | :----------: | ---------: |
| good swedish fish | ok           | nice       |
| good and plenty   | out of stock | nice       |
| good `oreos`      | ok           | hmm        |
| good `zoute` drop | ok           | yumm       |
{: .full }

<table>
<tr><th colspan="3">Simple table</th></tr>
<tr><td>one</td><td>two</td><td>three</td></tr>
<tr><td>1</td><td>2</td><td>3</td></tr>
</table>

<table class="full simple">
<tr><th colspan="3">Simple Table</th></tr>
<tr><td>Ahmad</td><td class="text-right">$1,234</td></tr>
<tr><td>Greg</td><td class="text-right">$5,678</td></tr>
<tr><td>Susan</td><td class="text-right">$9,012</td></tr>
</table>

<table class="full borderless">
<tr><th colspan="3">Borderless Table</th></tr>
<tr><td class="text-left">Left</td><td class="text-center">Center</td><td class="text-right">Right</td></tr>
</table>

***

## Links

You can create links to [pages]({{ site.baseurl }}/pages "View pages").
{% if site.pages.size > 0 %}
{% assign sorted_pages = site.pages | sort: "path" -%}
{% for p in sorted_pages %}
- [{{ p.title | default:'(Untitled page)' }}]({{ site.github.url }}{{ p.url }})
{%- endfor %}
{%- endif %}

{% if site.posts.size > 0 %}
... or make a list of all the [posts]({{ site.baseurl }}/posts "View posts") you have:
{% assign sorted_posts = site.posts | sort: "date" | reverse -%}
{% for p in sorted_posts %}
- [{{ p.title | default:'(Untitled post)' }}]({{ site.github.url }}{{ p.url }})
{%- endfor %}
{%- else %}
_(Nothing has been posted)_
{%- endif %}

If you link to a missing page, you'll see <a href="{{ site.baseurl }}/404" title="The error page">an error page</a>.

## Button links

<a href="#" class="_bt -l -blue">Primary Button Link</a>
<a href="#" class="_bt -l -flat">Secondary Button Link</a>

{% if use_base_theme %}
## Theme control

Some layout allows user to switch between ***light*** and ***dark*** theme.

<b><a href="#" onclick="event.preventDefault();window.base&&window.base.theme.change()" title="Change theme (Ctrl+Alt+T)">Change theme (Ctrl+Alt+T)</a></b>
{% endif %}

## Footnotes

A footnote[^1] creates a list of references at the bottom of a page.

Normally you would use number as reference [^2].

You can also use word as reference [^note].

[^1]: A footnote reference.

[^2]: Footnote can also have multiple lines.
    Every new line in footnote should be prefixed with 2 space or 4 space indentation.

[^note]:
    Named footnotes will still render with numbers instead of the text but allow easier identification and linking.  

---
{: .mt-6 }

Ends
{: .text-center.text-grey }