---
title: Contributing to the Playbook
related_order: 999999999999
---

The Playbook is public and anyone, inside or outside of dxw, can suggest changes
to it. This means you!

We manage changes via GitHub 'Pull Requests'. This is a technical term for
requesting a specific change is made to a repository of text. Often this text is
code, but in this case it's the contents of this playbook. It allows everyone to
see exactly what changes are being proposed, and for discussion and changes to
be made before it is 'merged', and those changes to be recorded for the future.

If you're experienced in doing this, then all you need to know is that this
repository is available at <https://github.com/dxw/playbook>

If creating a pull request is new to you, then don't worry, here is a guide to
use Netlify CMS to create one for you.

## What you will need

You will need a GitHub account. If you don't already have one, then
[sign up here](https://github.com/signup). You do not need to be added to the
dxw GitHub organisation to be able to suggest changes.

## Suggesting a change

1. Open the page for editing

   For an existing page:

   1. Navigate to the page you want to edit
   2. Click on the yellow 'Edit this page' link

   For an new page:

   1. Navigate to the most relevant 'parent' for the new page
   2. Click on the yellow 'Add a new page here' link

   Alternatively, if you prefer to use the admin backend directly:

   1. Choose the page you want to change from the backend

      - If it's an existing page, find it under 'Collections'.
      - If it's a new page you want to add, find the appropriate section under
        'Collections' and click the 'New <page type>' button.

2. If you are not logged in, you need to log in with your GitHub account
3. If you are asked if you want to 'fork the repo', you do
4. Make your edits in the 'Rich Text' editor
5. Click 'Save' at the top of the page
6. Click 'Status: Draft' and choose 'In review'

Your suggested changes will not be live yet. Your suggestions should be
available to view on the
[GitHub Pull Requests page](https://github.com/dxw/playbook/pulls). After a few
minutes, you should be able to view a preview of the Playbook with your changes
by clicking on the URL next to '😎 Browse the preview'

## Reviewing changes

Everyone's suggested changes that are being reviewed are publicly available.
Anyone can publicly comment on a suggested change. Only GitHub accounts that
have been added to the dxw GitHub organisation and staff team can 'merge' a pull
request and make it live. If you are not on this list and want to be, please
email [support@dxw.com](mailto:support@dxw.com) with your GitHub username.

To see the suggested changes, you can click the 'Files changed' tab to see lines
of text that have been removed (in red) and lines of text that have been added
(in green). Alternatively you can click on the URL next to '😎 Browse the
preview' to see what the Playbook will look like if this change is accepted.

Anyone can comment on a pull request, and the more voices the better. It's
suggested that you contact one or two people specifically who you think would be
good to review your changes, or alternatively ask in the #dxw-playbook slack
channel.

## Things you need a developer for

Not everything related to content is self-serve (yet). There are a few things
that still rely on someone getting up close and personal with the codebase
behind this website.

### Creating new sections

To create a new section (or subsection) of content, there are a few steps:

1. Create a folder for the section with its name matching the desired URL path
   component

   For example, to add a "My new section" section to the root of the site,
   creating a folder `src/new-section` would put its contents at
   `/new-section/`. Then adding a subsection "My new subsection" to that section
   would involved creating another folder `src/new-section/new-subsection` at
   `/new-section/new-subsection/`.

2. Create a base page for the section

   All sections must have a markdown file corresponding to the index or base of
   that section. This can either be an `index.md` nested inside that new folder
   or a `.md` file on the same level as the folder with a matching name.

   Generally, if the section is a root section (ie `src/<section>`), we use the
   `index.md` approach, using the matching named peer file approach for
   subsections (it makes it easier to see the content at each level).

   This page can either be an empty file (except for some frontmatter with at
   least the `title`) to create a pure index page listing all related pages, or
   a page full of content as normal.

3. Add Netlify CMS config for the new section

   Netlify CMS is configured by `src/admin/config.yml`. See how other sections
   are configured and duplicate that configuration for your new section.

4. Use the CMS to add nested content as normal

### Reordering pages

All pages are implicitly sorted by their title unless overriden. To add an
override, set the value of `related_order` in the frontmatter. A lower number is
listed before a higher number. Pages without a `related_order` have an implicit
order value set in `_config.yml` in the root of the project.
