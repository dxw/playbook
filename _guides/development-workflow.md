---
title: Development workflow
---
* [Development principles](#development-principles)
* [Introduction](#introduction)
* [The lifecycle of a story](#the-lifecycle-of-a-story)
* [Working on a support ticket](#working-on-a-support-ticket)
* [Deploying](#deploying)
* [Branching](#branching)
* [Committing](#committing)
* [Code review](#code-review)
* [Code style](#code-style)
* [Pull requests](#pull-requests)
* [Versioning releases](#versioning-releases)
* [Tracking changes](#tracking-changes)

## Introduction

### Development principles

[Development principles can be found in the development profession.](../_includes/sections/our-professions/development.md#development-team-principles)

- - -

## The lifecycle of a story

Different projects have small variations to this process, but here are some
general guidelines.

### Start work on a new story

1. assign yourself to the Trello card
2. move the card to indicate you've started work
3. [make a new branch from the active development branch](#how-to-make-a-branch)
4. write tested code that meets the acceptance criteria
5. update the [changelog](#tracking-changes)
6. [commit](#committing) your code

### Submit your story for code review

1. push your branch to the remote repository

   ```
   git push origin <branch-name>
   ```
2. create a [pull request](#pull-requests) into the active development branch
3. link the Trello card to the new pull request, linking directly or by using
   the Trello
   [power up](https://help.trello.com/article/1021-integrating-trello-with-zendesk)
4. update the card to indicate it's now ready for review by a peer

### Reviewing another developer's pull request

* update the Trello card to indicate you're now looking at it
* find and read the Trello card's user need or acceptance criteria
* find and read through the pull request, carrying out a
  [code review](#code-review)

  * if you think it's ready:

    * leave your feedback (positive comments are great to receive)
    * approve the pull request
  * if you think it's not ready:

    * leave your feedback
    * consider letting the author know by Slack that it's back with them

GitHub offers us a number of options when finalising a review. These may be
interpreted and used differently depending on style but a good rule of thumb to
get started could be:

* Approve - I am confident that this pull request can safely be merged in. I MAY
  also leave optional suggestions which the reviewer MAY want to consider
* Comment - I may not be confident in the change, in which case I should explain
  why this SHOULD NOT be merged yet and what SHOULD be considered. Alternatively
  I might not feel confident enough to approve this pull request but MAY have
  suggestions that SHOULD be considered
* Request changes (not available on GitLab) - This may be used to further
  indicate that this pull request SHOULD NOT be merged. It may contain severe
  issues such as security concerns or bugs which might have a serious impact.
  This option is used to explicitly nullify any other review that chose approval

- - -

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
2. a serious vulnerability has been discovered and is currently exploitable

#### Issue a hotfix

When the decision to make a hotfix is made it's important to communicate well.
Involve the rest of the team at this point and discuss the plan of action,
allowing delivery managers to communicate back to the client.

This is the only time a branch should be based off of `master` instead of
`develop`.

1. create a new card in Trello and move it to 'In progress'
2. create a new branch off of `master`

   ```
   git checkout -b <branch-name> origin/master
   ```
3. [commit](#committing) the fix
4. make a [pull request](#pull-requests) into `master`
5. move the Trello card into 'Awaiting review'

#### Review and deploy a hotfix

1. review the code
2. check the fix has been tested locally if possible
3. merge the pull request
4. manually merge the pull request back into `develop`

   ```
   git checkout develop
   git pull
   git merge origin/master
   git push
   ```
5. move the card on Trello into 'Deployed to production'
6. update the [changelog](#tracking-changes)

- - -

## Deploying

Our approach is one of
[continuous delivery](https://en.wikipedia.org/wiki/Continuous_delivery) meaning
we build, test and deploy as frequently as possible.

We do this by using services such as Chef, TravisCI or GitHub Actions which are
configured to listen for Git pushes and then initiate an automatic deployment.

Whilst these deployments should be automatic it should be noted that they can
take a short time to run.

### Staging

Staging deployments are automatic and should be initiated when each pull request
is merged to the working branch, usually `develop`.

### Production

Production deployments are triggered manually by merging into `main`.

We do not have a standard release process though recent services follow a
process such as
[this example](https://github.com/DFE-Digital/buy-for-your-school/blob/develop/doc/release-process.md).

A basic process:

1. review what work is currently awaiting deployment by looking at Trello, if
   there are any unaccepted stories then you should hold off
2. update the [changelog](#tracking-changes)
3. let the team know you're deploying to Production
4. tag the merge commit with the version matching the
   [changelog](#tracking-changes)
5. verify the deployment has been successful with smoke tests
6. update Trello cards to indicate that they have now been deployed

- - -

## Branching

### How to make a branch

Create the branch off of `develop`:

```
git fetch
git checkout -b <branch-name> origin/develop
```

### Naming the branch

Having a convention means:

* all branches connected to a story or ticket are easily connected now and in
  the future
* others can easily identify the intent of the contents without having to
  interpret a branch name
* small and concise branches which keep the focus on the type of change being
  made are encouraged

#### Branch prefixes

* **Feature**

  A branch that adds a new feature, as defined by the specified story

  Example: `feature/523797477-add-logging-to-registration`
* **Fix**

  A branch that corrects a problem in a feature already merged into the
  development branch

  Example: `fix/423797477-logging-happens-in-both-environments`
* **Chore**

  Chore branches are used for routine tasks for maintaining the application like
  package upgrades, they don't provide a new feature or fix an existing one

  Example: `chore/1934729239-reduce-caching-for-contact-details`
* **Refactor**

  Refactor branches only include changes that do not change the systems outward
  behaviour or interface.

  Example: `refactor/243234-api-serves-response-more-efficiently`
* **Hotfix**

  A branch that adds an urgent fix to a problem that affects production. These
  branches are based on the production branch and do not go via the development
  branch, so must be also be merged into the latter when deployed

  Example: `hotfix/253947623-remove-breaking-change-to-repair-creation`

### Update your branch with the latest changes (rebasing)

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

- - -

## Committing

Good commits are small, focused and self-contained.

Code is written once, changed occasionally but read frequently. By taking the
time to document what we've built and why, we enable others to build their
shared understanding of the codebase too. Once we have a stronger shared
understanding we are able to make more informed decisions, avoid repeated
effort, receive more valuable feedback and spot new opportunities.

### What to include

Helpful questions to ask yourself when organising the content of your commit:

* is the code focused on a single problem? Commits should be small and focused
  rather than trying to do multiple things at once
* is the code refactoring existing behaviour or introducing a behavioural
  change? Refactorings can often be noisy and make it hard to see the new
  changes within. Split commits based on the the type of change
* are the unit tests included? Each new commit should keep the test suite green
* is a
  [changelog entry](https://github.com/dxw/tech-team-rfcs/blob/main/rfc-019-use-changelogs-to-track-changes.md)
  or architecture decision record necessary?

### What to write

Taking the time to write good commits is as valuable as writing good code. They
record the story of each repository, line by line, which makes it possible to
reason about now and in the future.

Helpful questions to ask yourself when writing a commit message:

* what is the **new** behaviour of the application?
* have I written down **why** I chose this approach over the others?
* are there relevant links I could include to help the next person understand?
* have I documented any risks, foreseen pitfalls or potential consequences?
* are there relevant links I could include to help the reader get the same
  information I had when making my decision?
* have I called out any subtleties in the implementation that are worth drawing
  attention to or explaining?

#### Examples

```
# Before
Add job postings

# After
Job postings are now displayed on the landing page

- Getting the Job postings out of the external API proved difficult but I think
  the solution we have will allow us to easily upgrade to the new release they
  have planned: <link>
```

```
# Before
Fixed the form

# After
Food order form works with special characters

- Previously the form failed to send if the starter value included any of the
  following characters: `!@£$%^&`
- Users should be able to use these characters and after a short investigation
  I found this new bug in PHP: <link>
- As a short term workaround until the bug is fixed I am stripping out any of
  these characters if they are present.
```

```
# Before
Gem upgrade

# After
Upgrade widget to v1.2.1

- This widget now includes a patch that improves resilience: <link>
- We are still unable to upgrade to v2.x as we need to do some migration work
  first
```

- - -

## Code review

Code reviews help us ship better quality code and provide an opportunity to
learn from each other.

### How to begin

To help review code changes you can
[enable split review within GitHub](https://docs.github.com/en/github/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-comparing-branches-in-pull-requests#diff-view-options).

Pull requests include a lot buttons and information that are all competing for
our attention. There are several ways we can view the information so having a
plan can be helpful. Here is an example of what a good and thorough review looks
like:

1. read the description to help you understand what we are doing and why. If
   it's unclear, stopping to find out will likely lead to a more valuable review
2. check the status is "Open" and that all "Checks" have passed. If this isn't
   the case it may not be ready for a review. We want to review a stable set of
   changes that aren't still being worked on. Ask the author if in doubt
3. scan through the "Files changed" tab briefly to peak at the new state of the
   system to get your bearings, we are looking at the general size of the change
   as well as the different entities involved (optional)
4. first pass (read) - Go to the the "Commit" tab, here we will see all the
   individual commits with the oldest at the top. Go into the oldest commit and
   start navigating using the "Next" button. Read the description and the
   contents with the aim of understanding each change and its rationale. Make
   quick notes to yourself for areas of interest you'd like to come back to, the
   trick is to make these low cost so we can maintain focus. Writing thoughtful
   feedback takes time and we may even find that the situation changes in later
   commits, making the feedback redundant
5. second pass (review) - Now is the time to leave feedback. Go back to the
   oldest commit and this time as you go through think about the following,
   leaving comments on the nearest line where appropriate:

   * did you have a note for this commit? Now is the time to explore and test
     any alternative ideas before making recommendations
   * use the [following checklist](#what-to-look-for) to help assess the
     contents
6. submit your review and let the author know

Tip: You can add `?w=1` to the end of the URL to strip out noisy whitespace.

### What to look for

When performing a code review we:

* check the pull request is descriptive, explains the story and doesn't assume
  knowledge. Some templates ask for screenshots to help illustrate the change
  before and after
* check the code is safe
  ([OWASP top ten](https://owasp.org/www-project-top-ten/)) (Brakeman should be
  checking for obvious issues automatically)
* check the code follows a consistent style (Standard should be checking this
  automatically)
* check the code is readable (did you find it easy to build an understanding?)
* check the code for maintainability
  ([SOLID principles](https://www.digitalocean.com/community/conceptual_articles/s-o-l-i-d-the-first-five-principles-of-object-oriented-design))
* check the code is tested (Test suites and Coverage tools should check
  automatically)
* check the code is unlikely to introduce future bugs (this is tricky to do and
  it's okay if you don't find any as we fail fast and fix)
* check the commits are reasonably small and focused towards making one change.
  They should not include unexpected or unrelated changes
* check the commits messages are descriptive
* check the [changelog](#tracking-changes) has been updated

### Writing feedback

It is not important that a story be implemented exactly how you would have done
it, only that it meets the acceptance criteria. When we find problems we give
feedback to the author rather than fix things ourselves inline with our
principle of ['Own your code'](#own-your-code).

It’s important that code reviews have a constructive and amicable tone. A
helpful mindset is one of assuming good intent. Be mindful that you might not
have all the information and so ask questions such as "Why did you do this like
X?" rather than "You should do it this like Y!".

Summarise your feedback. Be clear on which points require further action and
which are advisory. You should both feel confident about what's necessary and
what to expect in order to move forward.

[Thoughtbot's](https://github.com/thoughtbot/guides/tree/master/code-review)
code review guide contains good rules for keeping the tone positive.

- - -

## Code style

We write our code in a consistent way to ensure it is well-structured and easy
to follow for the rest of the team. Similar to the guidelines laid out in
[Thoughtbot’s style guide](https://playbook.thoughtbot.com/#style-guide),
approach this guidance as a way to code on present and future projects, not
something to retroactively add to existing projects.

* PHP -
  [PSR-2](https://github.com/php-fig/fig-standards/blob/master/accepted/PSR-2-coding-style-guide.md)
* Ruby -
  [Ruby community style guide](https://github.com/bbatsov/ruby-style-guide)
* Sass -
  [Sass Guidelines - Syntax and formatting](https://sass-guidelin.es/#syntax--formatting)
* JavaScript - [Standard](https://standardjs.com/)

When joining an existing code base we suggest following any existing code style
rather than changing it.

- - -

## Pull requests

When we have finished a piece of work on a branch, we
[make a pull request](https://help.github.com/articles/using-pull-requests/)
using the project's GitHub/GitLab page.

We link each pull request with the related Trello card to make it easier to
find. We could prefix the card number to the pull request title or link to the
card directly within the description or a comment.

A good pull request should:

* link to the Trello card for extra context, but not rely on Trello cards alone
  as they can be easily removed or moved
* describe the problem without assuming the reader has existing context
* highlight the changes being made
* describe and bring attention to particular difficulties or areas that you
  particularly want the opinion of the reviewer
* include screenshots for user facing changes (following the pull request
  template prompts)
* be clear which acceptance criteria are being met and which aren't if there is
  follow up work to do
* explain if a task is being broken down into multiple pull requests and what
  the review order should be
* describe any follow up work or steps that need to be done to complete the task
* be focused on a single problem, preferring to split additional problems into
  other pull requests - the smaller the pull request, the easier it is to be
  reviewed and the quicker it is likely to be merged
* describe any consequences of the work
* update the [changelog](#tracking-changes)

Real examples:

* [Cristina](https://github.com/UKGovernmentBEIS/beis-report-official-development-assistance/pull/1094)
* [Dom](https://github.com/dxw/judiciary-middleware/pull/497)
* [Ed](https://github.com/dxw/judiciary-middleware/pull/631)
* [George](https://github.com/dxw/mind-side-by-side/pull/307)
* [James C](https://github.com/UKGovernmentBEIS/beis-report-official-development-assistance/pull/1155)
* [Laura](https://github.com/UKGovernmentBEIS/beis-report-official-development-assistance/pull/665)
* [Lawrence](https://github.com/dxw/mind-side-by-side/pull/229)
* [Leeky](https://github.com/UKGovernmentBEIS/beis-report-official-development-assistance/pull/1130)
* [Lorna](https://github.com/DFE-Digital/buy-for-your-school/pull/318)
* [Meyric](https://github.com/UKGovernmentBEIS/beis-report-official-development-assistance/pull/1149)
* [Nick](https://github.com/DFE-Digital/buy-for-your-school/pull/188)
* [Robbie](https://github.com/UKGovernmentBEIS/beis-report-official-development-assistance/pull/1087)
* [Stuart](https://github.com/UKGovernmentBEIS/beis-report-official-development-assistance/pull/1121)

- - -

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

* updating the version appropriately in package metadata and committing to git
* updating the [changelog](#tracking-changes) to draw a line under changes and
  attribute them to a version
* tagging that commit using a tag of the form `vX.Y.Z`
* building the appropriate release package from that tag

- - -

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