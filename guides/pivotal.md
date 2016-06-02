# How we use Pivotal Tracker

## Features and bugs

Features/bugs have the following states:

* Unstarted
* Started
* Finished
* Delivered
* Accepted

## When you press the "start" button (developers-only)

After pressing it, create your branch (`feature/[ticketID]-[something-descriptive]`) and start working on it.

## When you press the "finish" button (developers-only)

Before pressing it:

- your changes should be on staging
- you should add a link to the pull/merge request to the description (i.e. `MR: https://git.dxw.net/a-project/app/merge_requests/123`)
- you should add a comment explaining how to test the change on staging. If it's not a user-visible change, say that

## When you press the "deliver" button (DMs only)

Before pressing it:

- you should have checked that any user-visible changes are showing up on the staging server
- TODO: ???

## When you press the "accept" button (clients only)

The client should be satisfied that staging is working as described in the story.

## Chores

TODO: ???
