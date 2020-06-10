# dxw Playbook

Are you looking for the playbook? Read and search it at [playbook.dxw.com](https://playbook.dxw.com)

## What is this?

It's dxw's playbook. It explains how we get things done.

## Changes

The playbook documents how the playbook gets changed. See the [changes to this
document](https://github.com/dxw/playbook/blob/master/playbook.md#changes-to-this-document)
section for more information.

## Licence

dxw's playbook is released under a [Creative Commons
Attribution-NonCommercial](https://creativecommons.org/licenses/by-nc/2.0/uk/)
licence. You are free to reuse and adapt this content with credit, for
non-commercial purposes.

## Structure of the repo

### playbook.md

This is the main playbook. Unless there's a good reason, we should record all
process and policy here.

### guides

This section contains more detailed documentation on how to do things. It's
mostly aimed at developers, but can contain any detailed documentation on a
specific task or subject. Like research activities, this is quite detailed and
isn't of general interest, so it gets its own section.

## Contributing to the playbook

There is a guide to editing the playbook, and creating new content, in
[contributing](contributing.md). This is also available
on [the published playbook](https://playbook.dxw.com/#/contributing).

## Style

These documents are maintained by everyone at dxw, and it's important that their
quality and tone is consistent.

### "We" vs "You"

The document primarily talks about what "we" do. If you can phrase what you're
saying in these terms, do. If it sounds weird, or you're actually talking about
what an individual needs to do in a given circumstance, use "you".

### Links

Link liberally, both within the document and to useful things on the web. Don't
reinvent the wheel! If someone else has already written up a great explanation
of something that we agree with, just link to it.

### Small is beautiful

This is a long document. Try to avoid making it too much longer. Keep things
simple. Don't use flowery language or unnecessary words.

### Plain English

This document is for everyone. If you find yourself talking about something
specialised or technical, you're probably in the wrong place. Should you be
writing a guide?

### Openness

This is a public document, because it's good to be open. But some things are
private. You can put them in the private playbook, when we have one!

### Headings

Use second level headings for main sections, third for subsections and fourth
level ones if you need to. Don't use fifth or first level headings. The table of
contents in the HTML version is automatically generated, and it assumes this
structure.

## Development

To make changes to the playbook theme, you will need to install the
dependencies:

```
script/bootstrap
```

Then to start a local development server run:

```
script/server
```

You can now visit [localhost:4000](http://localhost:4000) to see your local
playbook. Theme files live in the `/build` directory

### Linting

Check your changes for markdown, JavaScript and prose errors:

```
script/test
```

The prose linter will only show errors and warnings by default. If you want
extra suggestions for better writing, run:

```
npm run vale-suggestions
```
