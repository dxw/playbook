---
title: Web accessibility
---
## Why web accessibility matters

Everyone experiences disability in some form throughout their life including
permanent, temporary and situational types of disability. This is why it matters
that everything we create for the web is as easy to use as possible so that no
one is excluded from using a website because of their disability.

It also matters because making online public services accessible is a legal duty
under the
[Accessibility regulations](http://www.legislation.gov.uk/uksi/2018/952/contents/made)
now meet WCAG 2.1 level AA.

## Design for accessibility

Test early and often in the design and prototyping stages to identify problems
because they are often harder and more time-consuming to resolve later on in the
development phase.

* Review the GOV.UK Service Manual
  [(Understanding WCAG 2.1)](https://www.gov.uk/service-manual/helping-people-to-use-your-service/understanding-wcag)
  to check your designs meets all the criteria to level AA or above.
* Use a tool such as [Who can use](https://whocanuse.com/) to check all colour
  combinations meet WCAG grading of level AA or above.
* Refer to the [GOV.UK Design System](https://design-system.service.gov.uk/) for
  common components and patterns which have been extensively tested by users
  with different disabilities.

## Develop for accessibility

Whether working on an existing codebase or starting an entirely new project,
everything should be accessible to WCAG 2.1 level AA. This includes any plugins
authored outside dxw.

* The GOV.UK Service Manual
  [(Understanding WCAG 2.1)](https://www.gov.uk/service-manual/helping-people-to-use-your-service/understanding-wcag)
  is also a helpful starting point to assess parts of your development work
  against for accessibility.
* Test existing code and plugins for accessibility **before** and **after**
  working on a fix or feature.
* When adding details for a pull request flag anything that might need
  accessibility testing such as output from HTML, CSS and JavaScript.

## Accessibility testing

Everything we create for the web that involves user interaction should be tested
for accessibility. Testing may also be necessary during routine maintenance and
for any updates or changes to a website. There's also guidelines applicable to
authoring tools such as WordPress and other content management systems.
Authoring tools need to be accessible, so that people with disabilities can
create web content as well as consume it.

### Automated testing

For automated testing you should be able to identify around 50% of code-based
accessibility issues. You must also follow up these with manual tests. A couple
of extensions you can install on your browser for automated testing include:

* The [WAVE extension](https://wave.webaim.org/extension/) adds on overlay to
  the webpage which outlines all elements of the page such as landmarks,
  headings, anchors and aria properties. Alongside this WAVE highlights any
  problems categorised as either warnings or errors. This can include issues
  such as poor contrast, empty elements and incorrect use of markup.
* [axe DevTools](https://www.deque.com/axe/browser-extensions/) is an extension
  for Chrome, Firefox and Edge which you can use to test for accessibility
  defects. This identifies defects in relation to their user impact level as
  well as any corresponding WCAG guidelines.
* [axe cli](https://github.com/dequelabs/axe-core-npm/tree/develop/packages/cli)
  is a command line interface for axe to run quick accessibility tests.

### Manual testing

Manual testing needs to identify whether a website is accessible with or without
use of assistive technologies. In your testing you need to identify any traps,
barriers or challenges which make a website hard or impossible to access.

#### Guides manual testing

There are a couple of helpful tools available for performing manual testing.
These provide visual helpers to help your assessment and keep a track of all
completed or outstanding tests.

* [Microsoft Accessibility Insights](https://accessibilityinsights.io/)
* [axe DevTools Pro](https://www.deque.com/axe/devtools/) (subscription
  required)

Prepare to spend anything upwards of one day, to a week, to perform manual
testing comprehensively depending on the size of your project or task. Try to
test with real devices, as opposed to emulators, where possible including:

* Phone or tablet running iOS
* Phone or tablet running Android
* Laptop or desktop machine running Windows + NVDA software installed
* Laptop or desktop machine running macOS

Browser/screen reader combinations to include in your testing procedure:

#### Mac

* VoiceOver/Safari

#### Windows

* NVDA/Firefox
* Narrator/Edge

#### iOS

* VoiceOver/Safari

#### Android

* Talkback/Chrome

Each screen reader comes with a variety of different keyboard shortcut commands
and dialogues to help navigate and interact with a website.
[Screen Reader Keyboard Shortcuts and Gestures by Deque University](https://dequeuniversity.com/screenreaders/)
provides specific guidance on how to use them.

#### Magnification and viewport size

Part of your testing also needs to identify any failures for a website to
[resize](https://www.w3.org/WAI/WCAG21/Understanding/resize-text.html) and
[reflow](https://www.w3.org/WAI/WCAG21/Understanding/reflow.html) the text and
layout sufficiently to a zoom level of up to 400% and smaller viewport sizes
down to 320 CSS pixels. This helps support people with low vision who need to
enlarge text and read it in a single column as well as anyone who browses with a
mobile.

## Fixing accessibility issues

Accessibility issues found need fixing before going live. Be sure you fully
understand why an issue isn't accessible before finding ways to resolve it. Once
you're confident with the changes made then restart automated and manual testing
for the affected pages or component that the issue is present in.

### Prioritisation

Ultimately you should be looking to resolve all accessibility issues. Where
there's time and budgetary constraints, then prioritise those which have the
highest level of user impact, such as critical or serious. Add any unresolved
issues to an accessibility statement with explanation for when you anticipate
they will be fixed. Every release must be accessibility tested.

### Assignment

It's the responsibility of everyone on a project team to understand how
accessibility impacts on their role from managing a project to designing,
building and maintaining it. Communicate often with your team and include
accessibility in decision-making at all stages.

## Further information

* [How to Meet WCAG (Quick Reference)](https://www.w3.org/WAI/WCAG21/quickref/)
* [Making online public services accessible](https://accessibility.campaign.gov.uk/)
* [Authoring Tool Accessibility Guidelines overview](https://www.w3.org/WAI/standards-guidelines/atag/)
* [GDS Empathy Lab](https://gds.blog.gov.uk/2018/06/20/creating-the-uk-governments-accessibility-empathy-lab/)