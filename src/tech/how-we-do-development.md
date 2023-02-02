---
title: How we do development
permalink: /:path/:basename/
redirect_from:
  - /guides/how-we-do-development
---
## Follow our principles

As developers at dxw, we are guided by
[our team's principles](/tech/#development-team-principles). To help us follow 
these principles, we have a standard way of working, documented here. This is
the default workflow we follow, but it's ok to depart from it when a project
needs something different (and documenting that departure helps our future 
selves and others understand what changed and why).

## Work securely

dxw exists to help public sector teams to make good technology decisions and
build better services. Our reputation is built on our ability to consistently
deliver work of excellent quality that exceeds our clients' expectations.
Amongst those expectations are that we will protect our clients' information.
The security of the information which we host, store and process is therefore of
paramount importance - particularly if it is client-owned or otherwise
privileged (e.g. personal data).

## Follow our standards

We have a consensus based model for making decisions about some of the ways we
work through the [technology team RFCs](https://github.com/dxw/tech-team-rfcs).
It's important that you are aware of them and follow them when relevant. They
are part of how we make sure we're building high quality, secure software for
our clients.

## Lifecycle of a story

### 1. Find the highest priority thing to work on

Usually, we sort our backlogs by priority during planning, but those priorities
might change during the sprint. It's a good idea to look at the sprint in full
to have a clear idea of what's left to do.

### 2. Understand the task

Before writing any code, it's important that you understand what you're aiming
to achieve with the work and how you'll approach it. That might mean writing
acceptance criteria or talking to someone else about the part of the system
you'll be working on. Adding details to the task definition helps you remember
what you're doing and helps others review your work when you're done.

### 3. Create a new branch

Assuming the task involves making changes to a codebase, always start with a new
branch. You should usually branch off the latest commit in the main development
branch, but there are some times when you’ll want to branch off something else,
for example, when building off a recent branch that hasn’t yet been merged into
the main development branch.

Branch names are important. When naming a branch, make sure it's clear what it's
for.

* avoid using your name as an identifier - it discourages others from picking it
  up
* include an identifier for the ticket or story you're working on, like an ID
* include a short description of the purpose of the change

For example, while working on a card with ID `123` about generating a report:

* Good: `123/generate-report`, `123-generate-report,` `feature/123-generate-report`
* OK: `feature/generate-report`, `generate-report`
* Bad: `123`, `branch-for-123`, `jo-bloggs-123`, `jo-bloggs/generate-report`

### 4. Develop the code and the tests side-by-side

We aim for full test coverage of our codebases. Part of the value of writing
tests is in documenting the expected behaviour of the software. That's most
useful when you can go back to any point in time and see the intended
implementation.

Every commit should have a fully passing test suite with any new tests added and
old tests removed as needed to document and validate the changes in that commit.

**Important** Make sure you're following security best practices as you work. If
you're not sure what they are, ask before pushing any code onto the internet.

### 5. Commit changes in small steps

Good commits are small, focused, and self-contained.

We write code once, change it occasionally, but read it frequently. By taking
the time to document what we've built and why we enable others to build their
understanding of the codebase too. Once we have a stronger shared understanding
we can make more informed decisions, avoid repeated effort, receive more
valuable feedback, and spot new opportunities.

When creating a commit, make sure to write descriptive commit messages. A good
commit message has **a title describing a complete summary of the change in one
line**, followed by paragraphs explaining:

* what's changed about the behaviour of the code
* why you made the change
* how the code changed if there are things that might not be clear to a reader
* why you took the approach did
* whether there are any consequences or tradeoffs that you made
* whether any follow-up work is needed
* any useful references for a future reader

If you find you can't fully summarise the change in the title, it's often a sign
that your commit could be broken down into smaller parts.

**Important** Never unthinkingly use `git commit .` or similar. Doing that makes
it very easy to accidentally commit sensitive data that, once pushed, is exposed
to the world and constitutes a data breach. Use
[Git's interactive staging feature](https://git-scm.com/book/en/v2/Git-Tools-Interactive-Staging)
to inspect and select the content you want to add.

### 6. Include any upstream changes

When working in a team, other pull requests will often get merged in before
yours is finished. It's important to make sure you're developing against the
latest version of the code base as much as possible.

It's a good idea to constantly rebase your code on top of any changes that
happened after you created your branch and confirm that your new behaviour is
unchanged and the tests all still pass. It's a lot easier to do that if you're
doing that continuously than after working for a while, as you'll have less to
fix or update.

We prefer to rebase instead of merging upstream changes to keep the commit
history as clean as possible. You probably want to do an interactive rebase so
you can see what's going to happen before it does (and this also gives you an
opportunity to review, tidy up, and rearrange your commit history as needed).
Rebasing can take some practice to get used to if you haven't done it often. Ask
for help if you need it.

### 7. Tidy up your commits

Before requesting a review, consider tidying up your commit history on the
branch to tell a clear, coherent story. We tend to review PRs commit by commit,
as it allows you to see how the feature builds up on the branch, and having
atomic, easily-digestible commits that logically flow from one to the next makes
this a lot easier to review. Try to avoid touching unrelated code in the same PR - if you spot something that might need refactoring, do it in its own PR.

Here’s an example of the sort of history you might want to tidy up:

```
bc870303 Add dashboard for viewing user profiles

fd3ab401 Allow users to change passwords

50a6a7a6 Fix typo on dashboard (can be squashed into bc870303)

8b1cf775 Refactor password changing function (can be squashed into fd3ab401)

f3344703 Fix flaky test introduced in previous PR (should probably be its own
PR)
```

Use an interactive rebase (`git rebase –i [origin/main]`) to open an interactive
shell where commits can be edited, removed,  or squashed into one another.
You'll need to force push your changes if you've already pushed your branch to
GitHub, as you'll have rewritten history, with `git push --force-with-lease
origin [BRANCHNAME]`.

### 8. Submit the changeset for code review

At dxw, we never make changes to code running in production without the involvement of at least two people. In practice, this means one author and at least one approving reviewer, or authoring code as a pair or mob. We do this to make
sure we're delivering high quality software and use it as an opportunity to learn from each other.

Usually, we use pull requests on GitHub to facilitate code review. When you're
ready, you should open a pull request and share it with your team for review.

When creating a pull request, it's important to give your reviewers the context
they'll need to understand the overarching goals of what they're looking at, and
how it fits in to everything else. Do this by writing a detailed description and
using a meaningful title. Think of this as the same process as writing a good
commit message, but zoomed out to a higher level.

A good pull request should:

* link to the ticket, card, or task definition for extra context - but don't
  rely on external resources still being there in that form in the future
* describe the problem without assuming the reader has existing context
* highlight the changes you've made
* describe and bring attention to particular difficulties or areas that you
  particularly want the opinion of the reviewer
* include screenshots where useful to demonstrating the change
* be clear which acceptance criteria you're meeting and which you aren't if
  there is follow up work to do
* describe any follow-up work that needs doing to complete the task
* be focused on a single problem, preferring to split additional problems into
  other pull requests - the smaller the pull request, the easier it is to be
  reviewed and the sooner it can be merged
* explain if you are breaking a task down into multiple pull requests and what
  the review order should be
* describe any consequences of the work
* update the [changelog](#tracking-changes)

See the later section on [reviewing code](#reviewing-code) for details on how to
conduct code review effectively. It can be useful to review your own code in the
same way before submitting it for others to look at.

Real examples of pull requests created by developers at dxw:

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

### 9. Respond to reviews

When you have an open pull request, it's your responsibility to do what's needed
to get it merged as quickly as possible. That means being responsive to
questions in reviews and making changes as needed.

### 10. Merge the code

You should only ever merge pull requests that have been approved. If there are
outstanding comments, make sure to respond to them letting the reviewer(s) know
when they'll be addressed or why they won't if that's the case.

You should merge your own code when possible. You have the best context about
when you are finished and it's safe to merge in. But don't be precious about it.
If someone else needs to merge your code in, they should ask you about it if
they can, but shouldn't feel prevented from doing so.

When merging code into a long-lived branch, we prefer to use a merge commit,
rather than merging with a rebase, as having a merge commit as part of the
project history makes it clear when a change has actually been merged into the
codebase.

### 11. Smoke test the change

Once the code is merged, make sure it deploys correctly. If possible, verify
that it is now present on the target environment and working as expected and
hasn't broken anything else in the process.

## Reviewing code

When reviewing code, you should be thinking about:

* whether the code will do what it's intended to do
* whether the code is clear and readable
* whether the code is a stable foundation for future changes
* whether the change meets the user needs and acceptance criteria of the work
  being carried out
* whether the approach taken fits with the current and future plans for the
  application
* whether there are any edge cases that have been forgotten or unexpected
  behaviour possible
* whether the tests cover enough of the behaviour
* whether there are security implications (particularly the
  [OWASP top ten](https://owasp.org/www-project-top-ten/))
* whether there's important follow up work to do
* whether the commits are well described, the right size, containing the right
  things, and in the right order
* whether the pull request description would make sense to a future reader
  without the context the author(s) have
* whether the [changelog](#tracking-changes) has been updated

Try not to worry about whether the approach they took is the one you would have
taken. If it works and fits the goals of the project, then it doesn't matter if
their approach matches yours.

You might want to follow these steps when reviewing a pull request to help you:

1. Review the continuous integration status

   If there are unresolved issues with the test suite or other CI processes,
   it's usually not a good use of your time to review. In order to fix the
   issue, the code may change, making your review out of date.
2. Read the description of the changes in the pull request and any supporting
   material

   You should make sure you understand the goals of the change and are aware of
   any details the author(s) thought might be important to pay attention to.
3. Check the version out locally and run it

   This can be useful to understand complex changes and spot any obvious issues.
   It's not a substitute for reviewing the test suite to make sure it has good
   coverage.
4. Review the full set of changes

   By looking at the full set of changes, you can gain a broad understanding of
   how the changes interact with each other at the end. This will make it easier
   to understand each commit, especially when the commit descriptions could be
   improved, or when things are missing from commits.

   You might want to hold off making comments at this point as you may learn
   more from walking through the code in more detail.
5. Review the code, commit by commit

   When reviewing a commit, look for completeness and clarity. Does the commit
   contain everything it needs to, and does the commit description explain
   what's changed and why?

   Make comments as you go as part of a review. Even if you think you'll only
   have one or two it helps signal when you've finished looking if you batch the
   comments together.
6. Review the full set of changes (again)

   Now you've walked through each commit you'll be more able to review the full
   changeset and spot any gaps or issues when looking at it on the whole.
7. Review your comments

   Going through your pending comments, you might find themes worth drawing
   attention to or comments that were made defunct by later changes. Go ahead
   and edit and update your comments as needed.
8. Submit the review

   Once you're satisfied with your review, submit it with a summary of your
   comments. Be clear which points require further action and which are there as
   suggestions or advice.

   Remember to be kind to the author(s) and recognise the effort that went into
   the work and anything you particularly liked about the change - especially if
   your review is mostly critical.
   [Thoughtbot's code review guide](https://github.com/thoughtbot/guides/tree/main/code-review)
   contains helpful guidelines for keeping the tone positive.

### Review status options

GitHub offers us a number of options when finalising a review. These may be
interpreted and used differently depending on style and context, but a good set
of defaults are:

* Approve

  You are confident that this pull request can safely be merged in. You could
  also leave optional suggestions which the author(s) might want to consider,
  but you don't feel block merging.
* Comment

  You aren't confident in the change, but you don't feel so strongly that
  someone else's approval couldn't override you. In this case you should explain
  why the change shouldn't be merged and what your concerns are.

  Alternatively you might not feel confident enough to approve this change but
  have suggestions on the parts you are confident about that would be worth
  considering.
* Request changes

  You believe this pull request shouldn't be merged. It might contain severe
  issues such as security concerns or bugs which could have a serious impact and
  you believe must be addressed before the changes are safe to include.

  This option explicitly nullifies any other reviews that chose approval.

## Deploying code

We try to follow principles of
[continuous delivery](https://en.wikipedia.org/wiki/Continuous_delivery). That
means we build, test, and deploy as frequently and as automatically as possible.

We use services such as GitHub Actions to automate as much as possible about
deployments. We usually configure them to watch for new commits to important
branches, and automatically carry out any build and deployment actions required.
This can sometimes take a few minutes, so be patient.

### Production deployments

The production deployment process varies by project, but we usually require a
manual review of changes before they go live. This might be in the form of
merging one branch into another, or by using feature flags to disable new
behaviour until we're ready to turn it on.

When deploying any code to production, make sure everything you're deploying is
ready to go. This means reviewing what's changed since the last deployment and
verifying that it's all safe, expected, and where there are changes visible to
users, signed off.

## Versioning releases

We don't use explicit versioning for application code, instead following
[continuous deployment practices](#deploying-code). However, when building
libraries, APIs, or other software components designed for reuse, versioning is
important. All reusable components should have properly versioned releases. This
includes WordPress plugins and themes, Ruby gems, and so on, whether open source
or otherwise.

Versioning should follow the [Semantic Versioning](https://semver.org) standard
and projects that use them should specify their requirements so that the
appropriate versions are used.

## Tracking changes

If a project is not continuously released and has staged releases, we want to
track what goes into those releases, so we can be confident about what we're
shipping, know when we shipped it, and share what we've done with our clients
(and maybe beyond).

Including a `CHANGELOG.md` file in the root of a repository is a standard for
tracking these changes against versions, but they only work if they're updated.
You should record any significant changes as you make them while the issue is
fresh in your mind. We follow the
[Keep a Changelog 1.0.0](https://keepachangelog.com/en/1.0.0/) format by
default.

If your team decides that a changelog is not appropriate for a project, you
should document that decision as an
[Architectural Decision Record (ADR)](https://adr.github.io/), so future
maintainers and contributors understand the reasoning for not doing so.

See
[Tech Team RFC-019](https://github.com/dxw/tech-team-rfcs/blob/master/rfc-019-use-changelogs-to-track-changes.md)
for more context around this decision.