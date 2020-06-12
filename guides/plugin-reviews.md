---
title: GovPress plugin reviews
---

## Workflow

Requests for plugin inspections will normally be received as a ticket from the
client. The high-level process is as follows (each step is covered in a section
below):

1. Check for existing inspections
1. Add a card to the Trello board
1. Check the plugin for issues using
   [pluginscan](https://git.govpress.com/dxw/pluginscan)
1. Write up an inspection report in security.dxw.com. If the plugin does not
   appear to be vulnerable, this can be published immediately
1. If the plugin appears to be vulnerable, spend a short amount of time
   attempting to prove it.

If we aren't able to prove the vulnerability then we should publish the
inspection as 'potentially unsafe' and leave it at that: it's important that we
don't spend too much time on these.

If we were able to prove that the plugin is vulnerable then we shouldn't publish
the inspection yet and instead write up an Advisory. This is covered in a
separate guide.

## Checking for Inspections

Log in to [dxw advisories](https://advisories.dxw.com/) and search for any
existing inspections for this plugin. Bear in mind that some of these may be
draft or privately published.

- If we have inspected the latest version of the plugin, no further action is
  required.
- If we have inspected a much older version of the plugin, a new review is
  necessary
- For anything in the middle, the decision to do a new review should take into
  account:
  - Previous poor reviews or advisories
  - The difference in version numbers (bearing in mind that many WordPress
    plugins don't follow semver)
  - The date of the last inspection

## The Trello board

The progress of plugin inspections is tracked using the
[inspections Trello board](https://trello.com/b/sN42avTZ/dxwsec-inspections-and-advisories).
Although this contains a backlog of pending inspections, the order these are
worked through should be based on the associated tickets, or on Fridays, in
discussion with DMs.

## Inspecting the plugin

Most plugins can be downloaded from the
[directory](https://en-gb.wordpress.org/plugins/). Premium plugins may have to
be purchased (discuss with DMs).

We use a tool called [Pluginscan](https://git.govpress.com/dxw/pluginscan) for
inspections. It does not have a full understanding of the code - instead it
looks for specific patterns and function names which may indicate that the code
is unsafe.

A plugin inspection mostly involves checking these pattern matches to see if
they represent real issues.

## Writing up Inspections

If the plugin is large (around 15,000 or more lines of code), start with a line
like this:

> At over 26,000 lines of PHP this is a very large plugin, which makes it
> difficult to thoroughly assess

### Recommendations

If a plugin has a vulnerability, but I need to be authenticated in order to
exploit the vulnerability it’s probably ‘Use With Caution’.
