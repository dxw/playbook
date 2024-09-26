---
title: Development and technical operations team principles
related_order: 2
last_reviewed_at: ""
---

## Development team principles

1. **Solve real user needs**

   Good code starts with understanding, and is rooted in the real world. We work
   in multi-disciplinary teams, but you’re not just there to churn out code. Get
   involved in the research and design. Understand the needs of the users and
   the constraints of the organisations we’re working with.

   Ultimately, it’s about the user and their needs, not about technology.
   Sometimes software is not the answer.

2. **Own your code, but collaborate**

   Having the opportunity to see a piece of work through to completion is a
   great way to get stuff done, and for developers to grow. Take ownership of
   your work to get it all the way through our development process to being used
   by users.

   Ownership gets stuff done, but collaboration makes it better. So involve the
   rest of your team in your work: agree approaches, highlight tradeoffs and
   seek out reviews. Get all your code reviewed by another developer to help us
   ship better quality code, get the opportunity to learn new skills, and
   increase the shared knowledge of our products. Request feedback, ask
   questions and discuss code, but ultimately the author is responsible for
   making changes.

3. **Security is a user need**

   Sometimes the simplest or easiest solution is not the most secure, and we
   fight for our user’s safety and security, even when a client doesn’t agree.

4. **Use simple, conventional technology**

   By default, use straightforward technology and conventional approaches. The
   services we built have to be maintained and iterated on by small, and
   sometimes less experienced, teams. Keeping things simple ensures that is as
   painless as possible.

   Vary from convention only on the domain specific stuff, where it adds the
   most value.

5. **Build for quality and consistency**

   Think about those who come after us. We build high quality systems with the
   lowest possible maintenance burden. We write tests, use linters, follow
   standards and conventions, and document our decisions. The things we build
   should be set to thrive after we leave.

   All code we write should be reviewed by at least one peer. This helps us ship
   safer and higher quality code.

6. **Improve with each iteration**

   Always leave the codebase in a slightly better place than when you found it.
   Look for opportunities to refactor difficult code, to improve documentation,
   or to extract shared functionality.

7. **Communicate clearly and frequently**

   Help our future selves and others by recording the reasons for our actions.
   Explain the changes you’re making to code through your commit messages and
   pull requests. Explain the decisions you’re making about technology through
   architecture decision records. Explain the tradeoffs you’re making in
   planning and show and tells.

   Use straightforward language, even when you’re dealing with complex technical
   issues. Prefer to write it down over speaking it out, to ensure a lasting
   record.

   Becoming stuck when solving problems for long periods of time can be
   frustrating and unproductive. We invite each other to ask for our help when
   these situations happen as a second point of view with a fresh perspective
   often unlocks a problem relatively quickly.

   Code written by teams sprinting on client work is represented in Trello (or
   similar) and when on support we use Zendesk tickets. Tracking our work help
   us to:

   * visualise our progress
   * document and share progress with clients and stakeholders
   * be confident what we should be working on
   * react to blockers and bottlenecks
   * see what each other is responsible for and opportunities to help or avoid
     duplicating effort
   * reference commits back to their original user needs

8. **Be humble, supportive and open minded**

   Assume other people on your team know things you don’t. Feel comfortable
   saying “I don’t know”.

   Assume you know things other people on your team don’t, but be prepared to be
   wrong. Ask questions rather than giving instructions. Share your opinions and
   experience openly with your team.

   Question the obvious and test our assumptions. Listen to the client and the
   users and their experiences.

   Be non-judgemental – assume everyone did the best they could at the time,
   with what they knew and the resources available.

9. **Always learning. Always teaching**

   Technology never stops, and the amount to know even for our limited stack is
   huge, so we must learn and share. We teach each other through peer mentoring,
   pairing and reviews.

   Share what you learn on a project with the whole team so we can reuse
   knowledge across projects. Encourage others in their learning.

   All code we write should be reviewed by at least one peer. This helps us
   learn new skills and build shared understanding.

10. **Do the smallest amount of good work**

    We aspire to regularly ship good code, and deliver it to the users as often
    as possible. Delivering impact fast by shipping something real has a big
    impact on the morale of the team and happiness of our clients and users.

    Solving many problems at once can lead to large pull requests and large
    commits. This work tends to take a lot longer to understand, code review,
    amend and then ship safely. Additionally it can make work hard to
    parallelise as it may block other dependant work from starting. It also
    tends to introduce more bugs that require more follow-up fixes.

    Where you can, do less and deliver it sooner. Break down work into smaller
    pieces. Descope anything that isn’t critical for a first version. Do a
    minimum slice that works for some of your users. Anything to reduce the time
    between getting started on something and delivering it to users.

    Work at a pace that suits the project. Hacky is sometimes fine. If you’re
    working on prototypes then do only what you need to answer your questions.
    Sometimes, if you’re working on critical production systems, you’ll have to
    go slower. When that’s the case, it’s even more important to break down the
    work into the smallest reasonable chunks, to demonstrate progress, to make
    reviewing the changes as easy as possible, and to prove your assumptions.

11. **Work in the open**

    Be open by default. Code should be public unless there’s a good reason
    otherwise. Changes to open source libraries should be contributed back to
    the project. Dashboards should be public wherever reasonable.

    The way we’re working should also be open to our clients. Work being done
    should be represented in Trello boards that everyone can see. Communication
    should be done in public Slack channels rather than direct messages. Openly
    communicating about our work allows clients to see how we’re doing, and what
    needs their attention, and gives everyone in the team context for the work
    being done and decisions being made.

## Career progression for developers

We have a
[public progression framework](https://dxw.progressionapp.com/technology)
describing the skills expected of each role across the technology team. Your
progression doesn’t depend on having done everything in the framework for the
new role but on demonstrating that you could do them if asked.

We track changes to the framework in the
[changelog](https://docs.google.com/document/d/1FZc0Tr7RizgdGSs2MRD8USs372kUK8yqZ8kIlRf6zQc/edit),
where we describe what changed and why we changed it. We keep track of any
future changes we may want to make or think about in the
[backlog](https://docs.google.com/document/d/16pZuxt_CWp2NFaYaqBIZvuHmPeNWcqKycLkx5ciErbw/edit).

We have a [documented promotion process](/tech/promotion-process/) based on that
framework. We designed it to help make fair decisions about promotions that
reduce the impact any one person can have on the decision as much as possible.

## Technical Operations team principles

1. **Learn don’t blame**

   Things/Mistakes happen, treat it as a learning experience rather than finding
   blame.

2. **Documentation is the first step to automation**

   For most tasks you need to understand it enough to document it before you can
   begin to automate it.

3. **Don't be a keeper of secrets**

   Everyone should be replaceable in respect to knowledge. It's everyone's
   responsibility to share what they know (e.g. Pairing)

4. **No heroics - Don't internalise problems**

   Situations occur where there is pressure to deliver/maintain/fix, it's a team
   effort, not always the same person's job.

5. **Be patient**

   Be helpful, not obstructive. It’s easy to get frustrated by things in time
   sensitive situations – don’t!
