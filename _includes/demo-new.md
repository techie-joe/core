Hero statement with <span class="text-red">a red text</span> is dramatic
{: .hero }

## Better control over contents

![Small image](https://techie-joe.github.io/core/images/299-400x300.jpg){: .float-right.ml-4.mb-4 }

Writing an article can be exciting when you can add few things here and there. The `big-first` class will enlarge the first letter of a paragraph. While `text-justify` neatly aligns your text to its container. You can also include images and [hyperlinks](#) to make things more engaging.
{: .text-justify.big-first }

**Please leave some whitespace between paragraphs.**

Use the `indent` class to nudge the first line of a paragraph.
Indentation gives a sense of order and clarity, making an article easier to read.

**You’ll notice some gibberish text in this demo.** It’s simply a placeholder content, added to give you a sense of how the layout and styling will look. The text itself doesn’t carry any meaning &mdash; it’s just there to fill space and make the design feel more complete. Each time and the channel a different story all with different story, to a pleasure the color of television. A story to honor the color of television the more or less was burnt, in such cases it varies person to another. This happened to the color of television as it differs to another different story.
{: .indent.text-justify.text-grey }

> You may want to revisit <a href="https://techie-joe.github.io/core/legacy" target="_blank">the legacy demo page</a> to compare this theme with the others.

### Theme control

Some layout allows user to switch between ***light*** and ***dark***. Click the following button to try it.

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

### Invisible comments

There’s a comment block below this line.

<!-- This HTML comment will not appear in the rendered Markdown -->

{% comment %}This Liquid comment will not appear in the rendered Markdown{% endcomment %}

Comment block should not appear in the rendered Markdown.

### Horizontal rule

There’s a horizontal rule below this line.

---

### Large image

![Large image](https://techie-joe.github.io/core/images/2-1024x368.jpg){: .width-full.centered }

> Images for this demo came from [picsum.photos](https://picsum.photos/) and [unsplash](https://unsplash.com).
{: .text-small.mt-0 }

For a full scale image use the `width-full.centered` class.

### Small image

---
{: .mb-3 }

![Left Octocat](https://techie-joe.github.io/core/images/octocat-64x64.png){: .float-left.p-3.bg-white.mb-3.mr-3 }
![Right Octocat](https://techie-joe.github.io/core/images/octocat-64x64.png){: .float-right.p-3.bg-white.mb-3.ml-3 }
![Small image](https://techie-joe.github.io/core/images/core-64x64.png){: .centered.p-3.bg-secondary.mb-3 }

---
{: .mt-3 }

Align small images with `float-left`, `float-right` or `centered`.

# The Legendary H1

Behold, the almighty H1, the king of headings! If a webpage was a burger, H1 would be the top bun &mdash; soft, golden, and holding everything together. But don’t overuse it. One king per kingdom. Two kings? Chaos. Three kings? That’s a Shakespeare play.

## The Shy H2

Ah, the H2. Not too loud, not too small. It’s like the middle child of headings: always trying, never crying. H2 organizes sections, but secretly dreams of being an H1 someday. Don’t tell it the truth. Let it dream.

### The Mysterious H3

The H3 is like that friend who wears sunglasses indoors. Mysterious. Cool. A bit unnecessary sometimes, but when used right &mdash; chef’s kiss! H3 loves details and subtopics. But if you go too deep, suddenly you’re in H6 territory, and nobody reads that far.

#### The Forgotten H4

H4 is like socks at Christmas. Technically useful, but no one really cheers for it. You’ll use it if you have to, like adding extra layers to a report nobody asked for. Poor H4. Always invited, never remembered.

###### The Tiny H5

H5 is that tiny notebook you bought to look organized but never actually use. It’s small, it’s cute, it’s there &mdash; but honestly, body text is almost the same size, so why bother? H5 knows its fate but accepts it gracefully.

###### The Ghostly H6

And then comes H6, the heading so small it whispers. Nobody notices it. Even search engines squint and go, “Wait, is that… a heading?” H6 is like writing a title with invisible ink: only the bravest readers will ever see it.


## Listing items

### Ordered list

1. First level item.
    1. Second level item.
        1. Third level item.
        2. The last item.
        {: style="list-style:lower-roman" }
    2. The last item.
    {: style="list-style:lower-alpha" }
2. The last item.


### Unordered list

- First level item.
    - Second level item.
        - Third level item.
        - The last item.
    - The last item.
- The last item.

### Task list

- [x] Completed task.
- [ ] Pending task.
    - [x] Second level.
    - [ ] Second level.
        - [x] Third level.
        - [ ] Third level.
        - [ ] Third level.
    - [ ] Second level.
- [ ] Last task.

### Definition list

A definition list is a way of presenting **terms** and their corresponding **definitions** or descriptions in a structured format. It’s often used when you want to explain concepts, glossaries, or pairs of data.
Use HTML syntax to render the definition list.

<dl>
<dt>Term</dt>
<dd>Definition</dd>
<dt>HTML</dt>
<dd>A markup language for structuring web content.</dd>
<dt>CSS</dt>
<dd>A stylesheet language for styling web pages.</dd>
<dt>JavaScript</dt>
<dd>A programming language that adds interactivity to websites.</dd>
</dl>

## Hyperlinks

### Text link

You can link to all [pages]({{ site.baseurl }}/pages "View pages").
{% if site.pages.size > 0 %}
{% assign sorted_pages = site.pages | sort: "path" -%}
{% for p in sorted_pages %}
- [{{ p.title | default:'(Untitled page)' }}]({{ site.github.url }}{{ p.url }})
{%- endfor %}
{%- endif %}

{% if site.posts.size > 0 %}
... or list all [posts]({{ site.baseurl }}/posts "View posts").
{% assign sorted_posts = site.posts | sort: "date" | reverse -%}
{% for p in sorted_posts %}
- [{{ p.title | default:'(Untitled post)' }}]({{ site.github.url }}{{ p.url }})
{%- endfor %}
{%- else %}
_(Nothing has been posted)_
{%- endif %}

If you link to a missing page, you'll see <a href="{{ site.baseurl }}/404" title="The error page">an error page</a>.

### Button link

<a href="#" class="_bt -l -blue">Primary Button Link</a>
<a href="#" class="_bt -l -flat">Secondary Button Link</a>

### Footnote link

- A footnote[^1] creates a list of references at the bottom of a page.

- Normally you would use number[^2] as reference.

- You can also use word[^note] as reference.

## Blockquote

> This is a blockquote.

> You can add styles to a blockquote.
> > "You can stack them too." &mdash; _Says the Author_
> {: .border-yellow }
{: .border-green }

> Try other mix as well.
{: .border-red.text-pending }

## Box

Wrap texts in a `bg-primary.text-white.box`
{: .bg-primary.text-white.box.text-center }

... or use `bg-secondary.box`
{: .bg-secondary.box.text-center }

Try other mix as well
{: .bg-red.text-white.box.text-center }

## Code block

```
Markdown render `code blocks` as is.
    white-spaces, new lines, tabs and all. 

Long, single-line `code blocks` should not wrap. They should remain on a single line instead of breaking into multiple lines. If the line is too long to fit within the visible width of the page, the reader should be able to scroll horizontally to see the rest of it. This line should be long enough to demonstrate this.
```

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

## Details and summary

Use HTML syntax to render the details and summary block.

<details>
<summary>Create a collapsible section of content. <i>(click for more)</i></summary>
<div class="px-4 py mb-4">
<p class="text-grey">Ah, the mighty details and summary block, a collapsible accordion of destiny where content hides like a shy turtle until poked by the click of curiosity. It is the digital equivalent of whispering, “psst, wanna see something cool?” and then rolling out a red carpet of hidden paragraphs, secret snippets, or the occasional diagram that nobody asked for. The summary is the bouncer at the door, deciding whether the reader gets a glimpse inside or stays staring at the title forever, while details hoards all the juicy stuff like a dragon sitting on its markdown gold.</p>
</div>
</details>

<details class="bg-secondary box">
<summary>Style them with box. <i>(click for more)</i></summary>
<div class="px-4 py">
<p>But beware, this block has a mischievous streak: it expands with a dramatic flourish like curtains on opening night, then folds back up as if nothing ever happened, gaslighting your memory of what you just saw. Authors toss long-winded explanations, secret Easter eggs, or poorly formatted cat ASCII art inside it, knowing only the brave will click. In its most chaotic form, the details block nests within itself, collapsing collapsibles within collapsibles until the reader spirals into an abyss of disclosure toggles, wondering whether the summary is summary enough to summarize the summaries.</p>
</div>
</details>

## Tables

### Full table

| Left              | Center       | Right      |
| :---------------- | :----------: | ---------: |
| Good fish         | Ok           |       nice |
| Plenty box        | Out of stock |       yeah |
| Biscoite          | Ok           |        hmm |
| Zoute drop        | Ok           |       tumm |
{: .full }

### Simple table

| Name              |      Value |
| :---------------- | ---------: |
| Ahmad             |     $1,124 |
| Greg              |     $5,678 |
| Susan             |     $9,012 |
{: .full.simple style="max-width:300px" }

### Borderless table

| Left              | Center       | Right      |
| :---------------- | :----------: | ---------: |
| Good leaf         | Ok           |         no |
| Plenty ticks      | Ready        |         xo |
| Zapper            | Pending      |        yes |
| Coute sauce       | Ok           |        uhh |
{: .full.borderless style="max-width:300px" }

### Complex table

You have to use HTML syntax for complex table.

<table class="full" style="max-width:500px">
<tr>
    <th class="text-left">Label</th>
    <th class="text-center">Status</th>
    <th class="text-right">Value</th>
</tr>
<tr>
    <td class="text-left">
        <dl>
        <dt>Item name</dt>
        <dd>And its description.</dd>
        </dl>
    </td>
    <td class="text-center">Good</td>
    <td class="text-right">$78,910.12</td>
</tr>
<tr>
    <td class="text-left">
        <dl>
        <dt>Another item</dt>
        <dd>And its description.</dd>
        </dl>
    </td>
    <td class="text-center"><span class="text-pending">Pending</span></td>
    <td class="text-right"><span class="text-pending">- ($1,234.56)</span></td>
</tr>
</table>

<!-- Footnotes -->

[^1]: A footnote reference.

[^2]:
    Footnote can also have multiple lines.
    Every new line in footnote should be prefixed with 2 space or 4 space indentation.

[^note]:
    Named footnotes will still render with numbers instead of the text but allow easier identification and linking.  