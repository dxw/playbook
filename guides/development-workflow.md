---
title: Development workflow
---

- [Development principles](#development-principles)
- [Introduction](#introduction)
- [The lifecycle of a story](#the-lifecycle-of-a-story)
- [Working on a support ticket](#working-on-a-support-ticket)
- [Deploying](#deploying)
- [Branching](#branching)
- [Committing](#committing)
- [Code review](#code-review)
- [Code style](#code-style)
- [Pull requests](#pull-requests)
- [Versioning releases](#versioning-releases)
- [Tracking changes](#tracking-changes)

## Introduction

### Development principles

As part of regular retrospectives we evolve our principles by identifying what
works well. When we try something that helps with a particular pattern of
problem the team can acknowledge the benefits it brings and introduce it as a
principle.

#### Communicate frequently

- space to learn from each other
- make shared decisions
- prevent duplication
- solve problems quicker

#### Two pairs of eyes

All code we write needs be reviewed by another developer. We hope that doing
this will mean we:

- ship better quality code
- get the opportunity to learn new skills
- increase the shared knowledge of our products

#### Everything is tracked

All code we write is represented in Trello (or another ticketing system as
required by the client) so that:

- the client can easily visualise how we're doing and what needs their attention
- the team can see and react to bottle necks
- delivery managers can see what cards have been lingering
- developers can be confident what they are deploying

#### Own your code

Having the opportunity to see a piece of work through to completion is a great
way to for developers to grow. To encourage this we ask reviewers to leave their
feedback, ask questions and discuss the code but not to make any changes without
the okay from the author. This will hopefully allow us to:

- learn from our mistakes
- create personal achievements from seeing work through to production

#### Do the smallest amount of good work

We aspire to regularly ship
[good code](https://robots.thoughtbot.com/what-is-good-code) and deliver it to
the users as often as possible. Doing so efficiently requires a balanced
approach to development.

Good signs:

- the code is easy to read and understand
- the code didn't take too long to write
- the code is relatively easy to change

Bad signs:

- spending too much time over engineering (gold plating) our code
- delivering too quickly at the cost of any code quality

#### The twenty-minute rules

1. being helpful is one of our values and this extends to development. If after
   spending 20 minutes on a problem you haven't made progress, invoke the
   twenty-minute rule with another developer and get their advice
1. discussions that go on for twenty-minutes or more can be a time sink. If an
   agreement on how to progress cannot be found after 20 minutes, mentioning
   this rule provides a pre-agreed way to acknowledge the problem and get to a
   resolution as quickly as possible. Rate your concern for the issue out of 10
   and a next step should naturally emerge

---

## The lifecycle of a story

Different projects have small variations to this process, but here are some
general guidelines.

### Start work on a new story

1. assign yourself to the Trello card
1. move the card to Trello's 'In progress' column
1. [make a new branch](#how-to-make-a-branch) off of `develop`

   ```
   git checkout -b <branch-name> origin/develop
   ```

1. meet the acceptance criteria
1. update the [changelog](#tracking-changes)
1. [commit](#committing) your code

### Submit your story for code review

1. push your branch to the remote repository

   ```
   git push origin <branch-name>
   ```

1. create a [pull request](#pull-requests) into the `develop` branch
1. link the Trello card to the new pull request, linking directly or by using
   the Trello
   [power up](https://help.trello.com/article/1021-integrating-trello-with-zendesk)
1. move the Trello card into the 'Awaiting review column'

### Reviewing another developer's pull request

- move the Trello card into the 'Under code review' column
- find and read the Trello card's acceptance criteria
- find and read through the pull request, carrying out a
  [code review](#code-review)
  - if it is ready:
    - press the merge button
    - delete the leftover branch
    - move the Trello card into 'Deployed to Staging'
  - if it's not ready:
    - leave feedback
    - mention the author so they're aware

---

## Working on a support ticket

Support tickets can fall into two types of work flow depending on their
severity.

Most commonly tickets will simply fall into the same
[story process](#the-lifecycle-of-a-story), where fixes will go through
`develop` and Staging for review and acceptance.

They can however be sometimes when there's an emergency which requires a change
to production ASAP. This is when we reach for a [hotfix](#hotfix).

### Hotfix

We think of hotfixes in the same way as
[Wikipedia](https://en.wikipedia.org/wiki/Hotfix) describes them:

> a hotfix implies that the change may have been made quickly and outside normal
> development and testing processes

and also

> A hotfix is a change deemed critical enough that it cannot be held off until a
> regular content patch.

An emergency for instance would be when:

1. production is unusable - users are directly affected
1. a serious vulnerability has been discovered and is currently exploitable

#### Issue a hotfix

When the decision to make a hotfix is made it's important to communicate well.
Involve the rest of the team at this point and discuss the plan of action,
allowing delivery managers to communicate back to the client.

This is the only time a branch should be based off of `master` instead of
`develop`.

1. create a new card in Trello and move it to 'In progress'
1. create a new branch off of `master`

   ```
   git checkout -b <branch-name> origin/master
   ```

1. [commit](#committing) the fix
1. make a [pull request](#pull-requests) into `master`
1. move the Trello card into 'Awaiting review'

#### Review and deploy a hotfix

1. review the code
1. check the fix has been tested locally if possible
1. merge the pull request
1. manually merge the pull request back into `develop`

   ```
   git checkout develop
   git pull
   git merge origin/master
   git push
   ```

1. move the card on Trello into 'Deployed to production'
1. update the [changelog](#tracking-changes)

---

## Deploying

Our approach is one of
[continuous delivery](https://en.wikipedia.org/wiki/Continuous_delivery) meaning
we build, test and deploy as frequently as possible.

We do this by using services such as Chef, TravisCI or GitHub Actions which are
configured to listen for Git pushes and then initiate the correct deployment.

### Staging

Staging deployments are automatic and should be initiated when each pull request
is merged. When you click merge the changes are immediately deployed to the
Staging environment.

Remember to move the card(s) along on Trello.

### Production

Production deployments are done by manually merging `develop` into `master`.
Since everything on `develop` has been through a pull request with CI tests, we
can be confident in the quality and stability.

To deploy:

1. review what work is currently awaiting deployment by looking at Trello, if
   there are any unaccepted stories then you should hold off
1. update the [changelog](#tracking-changes)
1. let the team know you're deploying to Production

   ```
   git fetch
   git checkout master
   git pull
   git merge origin/develop
   git push
   ```

1. verify the deployment has been successful
1. tag the merge commit with the version matching the
   [changelog](#tracking-changes)
1. update Trello with all the cards that have now been deployed

---

## Branching

### How to make a branch

Create the branch off of `develop`:

```
git fetch
git checkout develop
git branch <branch-name>
git checkout <branch-name>

# or the shorthand

git checkout -b <branch-name> origin/develop
```

#### Naming the branch

Having a convention allows for:

- all branches connected to a story or ticket are easily connected now and in
  the future
- others can easily identify the intent of the contents without having to
  interpret a commit's title
- encourages small and concise commits which keeps the focus on the type of
  change being made. If you are adding a new feature and fix something along the
  way, that _should_ be 2 commits instead of 1

#### Convention

- Feature

  A branch that adds a new feature, as defined by the specified story

- Fix

  A branch that corrects a problem in a feature already merged into `develop`

- Chore

  Chore branches are used for routine tasks for maintaining the application like
  package upgrades, they don't provide a new feature or fix an existing one

- Hotfix

  A branch that adds an urgent fix to a problem that affects production. These
  branches are based on `master` and do not go via `develop`, so must be also be
  merged into `develop` when deployed

```
feature/{STORY ID}-{CONCISE TITLE}
fix/{STORY/TICKET ID}-{CONCISE TITLE}
chore/{STORY ID}-{CONCISE TITLE}
hotfix/{TICKET ID}-{CONCISE TITLE}
```

#### Examples

```
feature/523797477-add-logging-to-registration
fix/423797477-logging-happens-in-both-environments
chore/1934729239-reduce-caching-for-contact-details
hotfix/253947623-remove-breaking-change-to-repair-creation
```

### Update your branch with the latest changes on `develop` (rebasing)

When working in a team, other pull requests will often get merged in before
yours is finished. It's important to make sure you're developing against the
latest version of the code base as much as possible.

You can do this by rebasing your work on top of the `develop` branch.

```
git checkout <branch-name>
git rebase origin/develop
git push --force-with-lease
```

During the rebase there may be conflicts which should be resolved at that point.
If in doubt talk to the other developer who you're conflicting with and reason
out what the correct state should be.

Force pushing in this situation is the only time it should be necessary, adding
`--force-with-lease` ensures you don't accidentally overwrite someone else's
additions.

---

## Committing

Taking the time to write good commits is as valuable as writing good code. They
record the story of each project, line by line, which makes it possible to
understand now and in the future.

Ask yourself these questions:

- what is the **new** behaviour of the application?
- have I written down **why** I chose this approach over the others?
- are there relevant links I could include to help the next person?

### Examples

```
# Poor
Added repairs

# Great
Job postings are now displayed on the landing page

- Getting the Job postings out of the external API proved difficult but I think
  the solution we have will allow us to easily upgrade to the new release they
  have planned: <link>
```

```
# Poor
Fixed the form

# Great
Food order form works with special characters

- Previously the form failed to send if the starter value included any of the
  following characters: `!@£$%^&`
- Users should be able to use these characters and after a short investigation
  I found this new bug in PHP: <link>
- As a short term workaround until the bug is fixed I am stripping out any of
  these characters if they are present.
```

```
# Poor
Gem upgrade

# Great
Upgrade widget to v1.2.1

- This widget now includes a patch that improves resilience: <link>
- We are still unable to upgrade to v2.x as we need to do some migration work
  first
```

---

## Code review

We believe that code reviews are important. They help us to learn from each
other, to maintain consistency in the code we write, and to ensure we push
well-reasoned and bug-free code to Production. When performing a code review, we
make sure that:

- we cannot see any code that could give rise to a security vulnerability
- the story has been implemented clearly and maintainably
- the code contains well-written commits that help us to understand the changes
- the code follows code style guides
- the [changelog](#tracking-changes) has been updated is the change was
  significant

It is not important that a story be implemented exactly how you would have done
it. Only that it meets the criteria above. When we find problems, we give
feedback to the developer who implemented the story, not fix things ourselves
inline with our principle of ['Own your code'](#own-your-code).

It’s also important that code reviews have a constructive, amicable tone. To
this end, we bear in mind the
[Thoughtbot](https://github.com/thoughtbot/guides/tree/master/code-review) code
review guide, which contains good rules for keeping things positive and useful.

---

## Code style

We write our code in a consistent way to ensure it is well-structured and easy
to follow for the rest of the team. Similar to the guidelines laid out in
[Thoughtbot’s style guide](https://playbook.thoughtbot.com/#style-guide),
approach this guidance as a way to code on present and future projects, not
something to retroactively add to existing projects. When working on existing
projects or joining a project, make sure to follow the code style that is
already in place.

While it can be tempting to write a new style guide, it's not a worthwhile
investment of time. It's important that a consistent style is adopted, but
mostly unimportant which specific style it is. So rather than having our own, we
have chosen the following existing style guides for our work:

- PHP -
  [PSR-2](https://github.com/php-fig/fig-standards/blob/master/accepted/PSR-2-coding-style-guide.md)
- Ruby -
  [Ruby community style guide](https://github.com/bbatsov/ruby-style-guide)
- Sass -
  [Sass Guidelines - Syntax and formatting](https://sass-guidelin.es/#syntax--formatting)
- JavaScript - [Standard](https://standardjs.com/)

---

## Pull requests

When we have finished a piece of work on a branch, we
[make a pull request](https://help.github.com/articles/using-pull-requests/)
using the project's GitHub/GitLab page.

We prefix pull request titles with the Story ID to make it easy to find the
story and the acceptance criteria that should be met.

A good pull request should:

- be created by the authoring developer
- meet all of the acceptance criteria on the associated story
- focus on the single problem at hand, not doing so will usually increase the
  time taken to get it merged
- include appropriate detail to assist the reviewer, this includes links to
  relevant content and a duplication of anything of note in the commit
  descriptions
- update the [changelog](#tracking-changes) if it's a significant change

```
# Poor
A new registration form and fix a bug with contacts

# Great
[123456789] New users can now register for an account

- This has been rate limited, would like your feedback on the values I've chosen
- Passwords are encrypted using BCrypt, so I've taken this opportunity to
  increase the default rounds from 8 to 12
```

---

## Versioning releases

We don't use explicit versioning for application code; rather we operate a
continuous deployment approach as described in the [deploying](#deploying)
section.

However, when building libraries, APIs, or other software components designed
for reuse, versioning is important. All reusable components should have properly
versioned releases. This includes Wordpress plugins and themes, Ruby gems, and
so on, whether open source or otherwise.

Versioning should follow the [Semantic Versioning](https://semver.org) standard,
and projects that use them should specify their requirements so that the
appropriate versions are used.

Releases should be created by:

- updating the version appropriately in package metadata and committing to git
- updating the [changelog](#tracking-changes) to draw a line under changes and
  attribute them to a version
- tagging that commit using a tag of the form `vX.Y.Z`
- building the appropriate release package from that tag

---

## Tracking changes

If a project is not continuously released, and has staged releases, we want to
track what goes into those releases, so we can be confident about what we're
shipping, know when we shipped it, and share what we've done with our clients
(and maybe beyond).

Including a `CHANGELOG.md` file in the root of a repository is a standard for
tracking these changes against versions, but the only work if they are updated.
When introducing a significant change to a project, we should be recording that
change at the time we make it, while the issue is fresh in our minds.

We follow the [Keep a Changelog 1.0.0](https://keepachangelog.com/en/1.0.0/)
format for the changelogs we keep. This means integrating updating the changelog
into the release process for the project. This also means
[versioning](#versioning-releases) the project.

If the team decides that a changelog is not appropriate for a project, you
should document that decision as an
[Architectural Decision Record (ADR)](https://adr.github.io/), so future
maintainers and contributors understand the reasoning for not doing so.

See
[Tech Team RFC-019](https://github.com/dxw/tech-team-rfcs/blob/master/rfc-019-use-changelogs-to-track-changes.md)
for more context around this decision.
