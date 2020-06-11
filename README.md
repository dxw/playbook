# dxw Playbook

Are you looking for the Playbook? Read and search it at [playbook.dxw.com](https://playbook.dxw.com)

## What is this?

It’s dxw’s Playbook. It explains how we get things done.

## Changes

The Playbook documents how the Playbook gets changed. See the [changes to this
document](https://github.com/dxw/playbook/blob/master/playbook.md#changes-to-this-document)
section for more information.

## Licence

dxw’s Playbook is released under a [Creative Commons
Attribution-NonCommercial](https://creativecommons.org/licenses/by-nc/2.0/uk/)
licence. You are free to reuse and adapt this content with credit, for
non-commercial purposes.

## Structure of the repo

### playbook.md

This is the main Playbook. Unless there’s a good reason, we should record all
process and policy here.

### guides

This section contains more detailed documentation on how to do things. It's
mostly aimed at developers, but can contain any detailed documentation on a
specific task or subject. Like research activities, this is quite detailed and
isn't of general interest, so it gets its own section.

## Contributing to the playbook

There is a guide to editing the Playbook, and creating new content, in
[contributing](contributing.md). This is also available
on [the published playbook](https://playbook.dxw.com/#/contributing).

The content of the Playbook should use the [dxw tone of voice](https://playbook.dxw.com/#/guides/tone-of-voice.md).

In addition:

 - The Playbook should mostly talk about what “we” do. Unless you’re telling someone what “you” need to do in a given circumstance.
 - Include lots of link, both to relevant content within the Playbook and to useful things on the web.
 - Use second level headings for main sections, with third for subsections and fourth level ones if you need to.

## Development

To make changes to the Playbook theme, you will need to install the
dependencies:

```
npm install
go get github.com/errata-ai/vale
```

Then to start a local development server run:

```
npm start
```

You can now visit [localhost:3000](http://localhost:3000) to see your local
playbook. Theme files live in the `/build` directory

### Linting

Check your changes for markdown errors:

```
npm run lint
```

To run the prose linter:

```
npm run vale
```

This will only show errors and warnings by default. If you want extra suggestions for better writing, run:

```
npm run vale-suggestions
```
