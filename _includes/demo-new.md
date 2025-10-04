Hero text with __red text__{: .text-red } is dramatic
{: .hero }

## Better control over contents

![Small image](https://techie-joe.github.io/core/images/299-400x300.jpg){: .float-right.ml-4.mb-4 }

Writing an article can be exciting when you can add few things here and there. The `big-first` class will enlarge the first letter of a paragraph. The `text-justify` class neatly aligns your text to its container. You can also include images and [hyperlinks](#) to make things more engaging.
{: .text-justify.big-first }

**Do leave some whitespace between paragraphs, so that everything feels easy to read.**

Want a little nudge on the first line? Use the `indent` class. Indentation gives a sense of order and clarity. Simply put, indentation makes a new paragraph easier to read.

> You can write texts in a blockquote.
> > "I can stack them too." &mdash; _Says the Author_

**You’ll notice some gibberish text in this demo.** It’s simply placeholder content, added to give you a sense of how the layout and styling will look. The text itself doesn’t carry any meaning &mdash; it’s just there to fill space and make the design feel more complete.
{: .indent.text-justify.text-grey }

Each time and the channel a different story all with different story, to a pleasure the color of television. A story to honor the color of television the more or less was burnt, in such cases it varies person to another. This happened to the color of television as it differs to another different story.
{: .indent-x.text-justify.text-grey }

You may want to revisit <a href="https://techie-joe.github.io/core/legacy" target="_blank">the legacy demo page</a>.

## Theme control

Some layout allows user to switch between ***light*** and ***dark***.

<a href="#" onclick="event.preventDefault();window.base&&window.base.theme.change()" class="_bt -l -flat" title="Change theme (Ctrl+Alt+T)">Change theme (Ctrl+Alt+T)</a>

### Styles for text

- Text can be
**bold**,
_italic_,
or ***both***.

- You can
~~strikethrough~~,
or add some `code`.

- Use HTML to include
<abbr title="Abbreviation">abbr</abbr>,
<samp>samp</samp>, and
<mark>mark</mark>.

- Color them 
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

### Small image

Images can be `float-left`, `float-right` or `centered`.

![Left Octocat](https://techie-joe.github.io/core/images/octocat-64x64.png){: .float-left }
![Right Octocat](https://techie-joe.github.io/core/images/octocat-64x64.png){: .float-right }
![Small image](https://techie-joe.github.io/core/images/core-64x64.png){: .centered }

### Large image

For a full scale image use `width-full.centered`.

![Large image](https://techie-joe.github.io/core/images/2-1024x368.jpg){: .width-full.centered }

> Images for this demo came from [picsum.photos](https://picsum.photos/) and [unsplash](https://unsplash.com).
{: .text-small.mt-0 }

### Invisible comments

There’s a comment block below this.

<!-- This HTML comment will not appear in the rendered Markdown -->

{% comment %}This Liquid comment will not appear in the rendered Markdown{% endcomment %}

### Horizontal rule

There’s a horizontal rule below this.

---

# The Legendary H1

Behold, the almighty H1, the king of headings! If a webpage was a burger, H1 would be the top bun—soft, golden, and holding everything together. But don’t overuse it. One king per kingdom. Two kings? Chaos. Three kings? That’s a Shakespeare play.

## The Shy H2

Ah, the H2. Not too loud, not too small. It’s like the middle child of headings: always trying, never crying. H2 organizes sections, but secretly dreams of being an H1 someday. Don’t tell it the truth. Let it dream.

### The Mysterious H3

The H3 is like that friend who wears sunglasses indoors. Mysterious. Cool. A bit unnecessary sometimes, but when used right—chef’s kiss! H3 loves details and subtopics. But if you go too deep, suddenly you’re in H6 territory, and nobody reads that far.

#### The Forgotten H4

H4 is like socks at Christmas. Technically useful, but no one really cheers for it. You’ll use it if you have to, like adding extra layers to a report nobody asked for. Poor H4. Always invited, never remembered.

###### The Tiny H5

H5 is that tiny notebook you bought to look organized but never actually use. It’s small, it’s cute, it’s there—but honestly, body text is almost the same size, so why bother? H5 knows its fate but accepts it gracefully.

###### The Ghostly H6

And then comes H6, the heading so small it whispers. Nobody notices it. Even search engines squint and go, “Wait, is that… a heading?” H6 is like writing a title with invisible ink: only the bravest readers will ever see it.

## Blockquote styles

> You can style a blockquote.
> > "That is great!" - _Ahmad_
{: .border-green }

> Try other mix as well.
{: .border-yellow.text-pending }

## Box wrapper

Wrap texts in a `bg-primary.text-white.box`
{: .bg-primary.text-white.box.text-center }

... or use `bg-secondary.box`
{: .bg-secondary.box.text-center }

Try other mix as well
{: .bg-red.text-white.box.text-center }

## Code block

```js
// Javascript code with syntax highlighting
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

## Details and summary

<details>
<summary>Use HTML for details block (click for more)</summary>
<p class="px-4 py">... more contents here.</p>
</details>

<details class="bg-secondary box">
<summary>Style them with box (click for more)</summary>
<p class="px-4 py">... more contents here.</p>
</details>

## List

###### Ordered list

1. First level item.
    1. Second level item.
        1. Third level item.
        2. The last item.
        {: style="list-style:lower-roman" }
    2. The last item.
    {: style="list-style:lower-alpha" }
2. The last item.


###### Unordered list

- First level item.
    - Second level item.
        - Third level item.
        - The last item.
    - The last item.
- The last item.

###### Task list

- [x] Completed task.
- [ ] Pending task.
    - [x] Second level.
    - [ ] Second level.
        - [x] Third level.
        - [ ] Third level.
        - [ ] Third level.
    - [ ] Second level.
- [ ] Last task.

###### Definition list

Use HTML syntax for definition list

<dl>
<dt>Title: {{ site.title }}</dt>
<dd>Description: {{ site.description }}</dd>
</dl>

## Hyperlink

You can link to [pages]({{ site.baseurl }}/pages "View pages"):
{% if site.pages.size > 0 %}
{% assign sorted_pages = site.pages | sort: "path" -%}
{% for p in sorted_pages %}
- [{{ p.title | default:'(Untitled page)' }}]({{ site.github.url }}{{ p.url }})
{%- endfor %}
{%- endif %}

{% if site.posts.size > 0 %}
... and list all [posts]({{ site.baseurl }}/posts "View posts"):
{% assign sorted_posts = site.posts | sort: "date" | reverse -%}
{% for p in sorted_posts %}
- [{{ p.title | default:'(Untitled post)' }}]({{ site.github.url }}{{ p.url }})
{%- endfor %}
{%- else %}
_(Nothing has been posted)_
{%- endif %}

If you link to a missing page, you'll see <a href="{{ site.baseurl }}/404" title="The error page">an error page</a>.

## Button link

<a href="#" class="_bt -l -blue">Primary Button Link</a>
<a href="#" class="_bt -l -flat">Secondary Button Link</a>

## Footnote link

A footnote[^1] creates a list of references at the bottom of a page.

Normally you would use number[^2] as reference.

You can also use word[^note] as reference.

## Table

###### Full table

| Left              | Center       | Right      |
| :---------------- | :----------: | ---------: |
| good fish         | Ok           |       nice |
| plenty box        | Out of stock |       yeah |
| biscuit           | Ok           |        hmm |
| zoute drop        | Ok           |       tumm |
{: .full }

###### Borderless table

| :---------------- | :----------: | ---------: |
| Left              | Center       | Right      |
{: .full.borderless }

###### Simple table

| Name              |      Value |
| :---------------- | ---------: |
| Ahmad             |     $1,124 |
| Greg              |     $5,678 |
| Susan             |     $9,012 |
{: .full.simple }

###### You will have to use HTML syntax for colspan / rowspan

<table>
<tr><th colspan="3">Simple table</th></tr>
<tr><td>one</td><td>two</td><td>three</td></tr>
<tr><td>1</td><td>2</td><td>3</td></tr>
</table>

<!-- Footnotes -->

[^1]: A footnote reference.

[^2]:
    Footnote can also have multiple lines.
    Every new line in footnote should be prefixed with 2 space or 4 space indentation.

[^note]:
    Named footnotes will still render with numbers instead of the text but allow easier identification and linking.  