> [!WARNING]  
> **This project is under active development. Use with caution. Future update may break your site.**

# About the Core

_Core is a Jekyll theme for GitHub Pages. **<a href="https://techie-joe.github.io/core">Preview what it looks like</a> or [use it today](#usage).**_

The Core is more like a blank canvas than a finished painting. It's main objective is to let you apply your own design system to your site, or layer your framework of choice on top. You can style any page by linking to the layout of your choice. Write your code in Markdown and HTML, and GitHub Pages will use the content of your repository to build you site.

Find the source code for the Core at GitHub: [techie-joe/core](https://github.com/techie-joe/core)

![Thumbnail of the Core](thumbnail.png)

## Project philosophy

The project is intended to make it quick and easy for users to build their website. The project should meet the need of vast majority of users out of the box, erring on simplicity rather than flexibility, and provide users the opportunity to opt-in to additional complexity if they have specific needs or wish to further customize their experience (such as adding custom CSS or modifying the default layout). Needless to say, themes provided through this project should also look neat and tidy.

---

## Usage

To use the theme, add the following to your site's `_config.yml`:

```yml
remote_theme: techie-joe/core
# the location of the remote_theme.

plugins:
- jekyll-remote-theme
# add jekyll-remote-theme to the plugins list.
```

## Customizing

### Configuration variables

Core will respect the following variables, if set in your site's `_config.yml`:

```yml
title: # the title of your site (best without the punctuation dot).
description: # a short description of your site's purpose.
```

Additionally, you may choose to set the following optional variables:

```yml
show_downloads: # true or false (unquoted).
# indicate whether to provide a download URL.

google_analytics: # your Google Analytics tracking ID.
# to track your website using Google Analytics.
```

### Stylesheet

If you'd like to add your own custom styles:

1. Create a file called `/assets/css/style.scss` in your site.
2. Add the following content to the top of the file, exactly as shown:

    ```scss
    ---
    ---
    @import "{{ site.theme }}";
    ```

3. Add any custom CSS (or Sass, including imports) you'd like immediately after the `@import` line.

*Note: If you'd like to change the template's Sass variables, you must set new values before the `@import` line in your stylesheet.*

### Layouts

If you'd like to change the template's HTML layout:

1. For some changes such as a custom `favicon`, you can add custom files in your local `_includes` folder. The files [provided with the template](https://github.com/techie-joe/core/tree/master/_includes) provide a starting point and are included by the [original layout template](https://github.com/techie-joe/core/blob/master/_layouts/default.html).
2. For more extensive changes, [copy the original template](https://github.com/techie-joe/core/blob/master/_layouts/default.html) from the template's repository.<br />(*Pro-tip: click "raw" to make copying easier*)
3. Create a file called `/_layouts/default.html` in your site.
4. Paste the default layout content copied in the first step.
5. Customize the layout as you'd like.

### Customizing Google Analytics code

Google has released several iterations to their Google Analytics code over the years since this template was first created. If you would like to take advantage of the latest code, paste it into `_includes/google-analytics.html` in your Jekyll site.

### Overriding GitHub-generated URLs

Templates often rely on URLs supplied by GitHub such as links to your repository or links to download your project. If you'd like to override one or more default URLs:

1. Look at [the template source](https://github.com/techie-joe/core/blob/master/_layouts/default.html) to determine the name of the variable. It will be in the form of `{{ site.github.zip_url }}`.
2. Specify the URL that you'd like the template to use in your site's `_config.yml`. For example, if the variable was `site.github.url`, you'd add the following:

    ```yml
    github:
        zip_url: http://example.com/download.zip
        # another_url: another_value
    ```

3. When your site is built, Jekyll will use the URL you specified, rather than the default one provided by GitHub.

*Note: You must remove the `site.` prefix, and each variable name (after the `github.`) should be indent with two space below `github:`.*

For more information, see [the Jekyll variables documentation](https://jekyllrb.com/docs/variables/).

<!-- 

## Previewing

If you'd like to preview your site on your computer (for example, in the process of proposing a change), you need to clone the template's repository (`git clone https://github.com/techie-joe/core`).

### Preview with Gem

Add the following to your site's `Gemfile`:

```ruby
gem "github-pages", group: :jekyll_plugins
```

-->
<!--

## Previewing the template locally

If you'd like to preview the template locally (for example, in the process of proposing a change):

1. Clone down the template's repository (`git clone https://github.com/techie-joe/core`)
2. `cd` into the template's directory
3. Run `script/bootstrap` to install the necessary dependencies
4. Run `bundle exec jekyll serve` to start the preview server
5. Visit [`localhost:4000`](http://localhost:4000) in your browser to preview the template

-->
<!--

## Running tests

The template contains a minimal test suite, to ensure a site with the template would build successfully. To run the tests, simply run `script/cibuild`. You'll need to run `script/bootstrap` once before the test script will work.

-->
<!--

## Contributing

Interested in contributing to Core template project? We'd love your help. Core is an open source project, built one contribution at a time by users like you. See [the CONTRIBUTING file](docs/CONTRIBUTING.md) for instructions on how to contribute.

-->

## Roadmap

See the [open issues](https://github.com/techie-joe/core/issues) for a list of proposed features (and known issues).