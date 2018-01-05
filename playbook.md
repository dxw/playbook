# dxw's playbook

## Purpose
For most of dxw's life, we've been small enough that it's been easy for everyone to know what's going on and how to get things done, just by listening to what's going on in the office. The team is now big enough that we need a reference for the way we do things. A place to capture the changes we agree to make. Something canonical that tells us what the current "right way" to do things is.

We'll always iterate on this document, because we'll always explore better ways to get things done. But now, when we've found one, it'll be recorded here. And once it is, it'll be the way we do things until we find something better, and write it down.

This document lives in Github. Anyone on the team can edit it, and should do so. But an edit must never be a substitute for discussion and agreement, so be careful about making significant changes. This document is also public, because there is very little about our process that cannot be open. But there will be things from time to time, so don't forget that changes here get published to the world.

Finally, this document is inspired by [Thoughtbot's excellent playbook](https://playbook.thoughtbot.com/). Thanks, Thoughtbot!


## Working at dxw

### Why are we all here?
The web has revolutionised the way society works. Most of society has reaped the benefits of digital technology, but most public services lag behind. As a result, they are often expensive to build and run, and hard for people to use.

Since dxw was founded in 2008, a lot of things have become better. The Government Digital Service has changed the conversation about how and why services get built, and many are much better as a result. But the challenge facing the public sector is not one that any organisation could tackle alone.

In addition to talented in-house teams who understand how to deliver great services, the public sector needs talented suppliers who understand how to work with it. And who are driven by a desire to make public services better. And who understand how to combine a modern technological approach with agile principles of development and user-centricity. That's what dxw is here to do.

We build digital public services that are flexible, efficient, effective and useful. We want people's experience of those services to be straightforward, positive and seamless. We believe that in building those services using agile principles, we can help government to embed those same principles in other parts of their organisations.

Ultimately, we want to help the public sector to spend less on technology so that it can spend more on education, healthcare, policing and welfare. We believe that it is possible to use technology and agile principles to help government become something recognisably, radically better: and we want to help make it happen.

dxw helps public sector teams to make good technology decisions and build better services.

### Values
We think that it's very important to have a talented team if we're going to succeed. But just as important as raw talent is our ability to work well together. These are the values that we aspire to, and help each other to achieve.

#### Helpful
We are helpful, useful and expert. We give practical and pragmatic advice to each other, and to our clients.

#### Honest
We are honest, trustworthy and straightforward. We give plain-spoken, frank, accurate feedback and advice, and we never mislead or obscure the issue at hand.

#### Positive
We are positive, cheerful and supportive. Even in crisis, we stay optimistic. We [assume good faith](https://en.wikipedia.org/wiki/Wikipedia:Assume_good_faith) and offer constructive challenge.

#### Curious
We are curious, diverse and creative. We help each other to learn and improve and we're sensitive to each others' needs. We love technology and finding new ways to solve problems.

#### Determined
We are determined, discerning and motivated. We believe in high standards, we enjoy doing things properly, and we're loath to settle for less.

#### Reliable
We are reliable, consistent and committed. We make every effort to live up to each others' expectations, and to exceed the expectations of our clients.

### Some guiding principles

#### Agile mindset

At dxw, we think that agile is a mindset that’s accepting of change, curious about trying new approaches to make things better, and values careful planning in short chunks.

We think that the [Agile Manifesto](http://agilemanifesto.org/) contains a lot of wisdom, but we don’t follow the industry of methodologies, training and certifications that has grown up around it. We think agile is something you learn to be, not something that you learn to do.

Our teams frequently experiment with different tools and techniques so we can improve. This applies not only to development work, but to everything we do at dxw, from user research to business operations.

We recognise the importance of planning, compliance and governance, so we work those activities into the process, every step of the way.

#### Sustainable pace
We work at a sustainable pace. We estimate work and schedule it conservatively, and set realistic expectations with clients about the pace of delivery.

This doesn't mean that we don't work hard. Being productive is a vital part of maintaining the trust that our clients give us, and it's important not to let them down.

When taking time off during client work, we discuss how it will impact the schedule with other team members.

Sending communication outside of working hours may create an unintended sense of urgency with the recipients of your message. Try to avoid creating that urgency when possible. Unless actually urgent, you may ignore messages which you receive outside of working hours and handle them once you are back at work.

#### Openness
We believe it's best to be open about what we're doing. We encourage our clients to do the same, as does the [service manual](https://www.gov.uk/service-manual). We talk, blog and write about what we're doing, and we are open about as much as we can.

We release [code](http://www.github.com/dxw), publish our [contracts](http://www.github.com/dxw/contracts) and things like this playbook and talk with people about what we're up to because we believe that we'll ultimately have more opportunities to work, grow and improve than if we kept everything to ourselves.

However, there are some things that we must keep private.

- Our clients trust us to host content that is not public, like upcoming announcements and discussions made as part of formulating new policy. This is not our information to be open about, and it's very important to keep it confidential.
- We also hold some personal data about and/or on behalf of our clients. We never share any of this data, including contact details. See also: [data protection](#data-protection).
- We are sometimes sent documents that are [protectively marked](#protective-marking-scheme), and we have a 
scheme of our own. Information in these documents is confidential.
- Information about work that is currently being procured (whether we are bidding or not) and any other information that could damage the commercial interests of a client or supplier

If you want to talk about something, and you're not sure if it's confidential, play it safe: ask a colleague.


### Changes to this document
This playbook is a collaborative effort. If you spot something that's wrong, feel free to hop in and correct it. But remember that this playbook is the result of our conversations about how we should do things, not a substitute for one. So don't make changes unless they reflect our shared agreement about how things are going to be done.

If you are making a substantial change (perhaps following a team conversation) please make it in a branch and submit a pull request. Then ask someone else who was in the conversation to review and merge it. When we review a pull request on the playbook, we check that it accurately captures the conversation, that it doesn't contain anything private, and that it's well written and free of typos, incorrect spellings and other minor errors.


## Building services

### Client experience

#### Responsiveness
One of the things our clients value most is responsiveness. Many will be under pressure to get things done quickly, and will be expected by their colleagues and managers to know what is going on at any given time, and to manage us effectively. If we're not quick to respond to their queries, questions and concerns, we reduce their ability to maintain the confidence of their colleagues.

So, when we are on sprints, we endeavour to respond to our client quickly. It's not always possible to resolve a problem or get an answer quickly, but that shouldn't stop us from acknowledging a message or giving regular updates. As with [tickets](#be-responsive), being responsive to a query is just as important as giving a definitive answer.

When we get enquiries for clients who are not currently sprinting, we still as quickly as we can - but clients who are sprinting come first.

We also expect most communication with clients to happen with the project's delivery manager. We don't hide anyone on the team from the client, and they are free to ask questions of whomever they wish. But if you're a developer and you get a question that's really for a DM to answer, refer the client on. This will help to keep you productive, and will help the client understand who on the dxw team does what.


#### Progress in every sprint
Delivering projects in an agile way requires trust between everyone involved in delivery. Clients must have confidence in us for the process to work. One of the quickest ways to lose confidence is to finish sprints with little to show for the effort we've made. In all of our work, we maintain a clear relationship between sprints and their associated costs, and visible, tangible changes to the service we're working on.

This means that we structure work so that visible progress and supporting back-end work happens side-by-side. We don't work on back-end or supporting code first, and then bolt front-ends on later. We make sure that what we're doing is visible to our clients as early as possible. This helps us to maintain trust, and gives us more opportunities to learn what works and what doesn't by involving users of the service in testing.

#### Involvement
We involve clients in every aspect of our work. Projects work best when everyone involved feels part of the same team. So, other than the internal retro, there's no aspect of our process that we do without client involvement.

In particular, we should go out of our way to involve clients when decisions are being made about design, user needs, or strategy (among other things). We're not here to make decisions for our clients: we're here to help them to make good decisions themselves. So we shouldn't make decisions about important things without them.

This isn't to say that we require clients to participate in everything. Clients and projects have varying needs, so this aspect of the process is flexible. But we always make the option of involvement available. If they want to join daily standups as well as participate in sprint planning, they can.


### The structure of a project
We structure projects along the lines described by the [GDS Service Manual](https://www.gov.uk/service-manual): discovery, alpha, beta, live and retirement. It's worth having a browse of the service manual if you're not familiar with it, as it is the main guide for how digital work in the public sector should be done.

One change to our approach is the addition of an **Inception** phase at the start of work. The main purpose of a discovery phase is to identify and document user needs. But sometimes this work is carried out on the assumption that a given service is definitely the right solution to the problem. The inception phase gives us a structured way to ensure that this isn't the case.

At a high level, the purpose of each phase is:

**Inception**: Talk to staff, leaders and stakeholders. Agree what the problem is, establish an initial strategy and working principles to help solve it

**Discovery**: Talk to users, do research. Identify and document user needs, decide how to measure success

**Alpha**: Prototyping, technical spikes and experiments. Make initial technology and service design decisions

**Beta**: Design, development, usability testing. Build and launch a minimum viable product and learn how to scale it

**Live**: Operate a new service, learn what works, continue to design and develop. Iteratively improve a live service

**Retirement**: Work out how user needs will be met without your service, provide help and guidance, archiving, links to other services. Don't leave people in the lurch; never let a link die

We don't always do all these stages for every client. Often, we'll only be involved in a couple. But we can help with all or any of them, depending on our clients' needs.


### Research
At dxw, we do as much work as we can on the basis of user research findings, because we believe in making decisions based on evidenced user needs. The primary method we use to conduct research is to talk to users (which includes staff) about their needs.

Not all clients have the willingness or resources to be able to commission research. In these situations, we do our best to rely on whatever evidence is available, while also making the case to their client that any research is better than none, and that research will allow them to spend their budget more effectively.

We don't only do research in discovery phases. We do our best to ensure that research is built into projects at every stage.


### Development sprints
We work in sprints, which are fixed-length periods of delivery work with a particular team.

At dxw, sprints are two weeks long. On the first day of the sprint we facilitate a planning session and at the end of the sprint we finish with a show and tell and retrospective. These sessions involve all members of the development team (developers, designers, user researchers and delivery managers) and the product owner from the client side. Sometimes these sessions include more of the client team.


#### Sprint planning
Sprints begin with a planning session, where the full team (dxw and the client) review and prioritise the stories in the backlog. Working together, we discuss the stories that we are prioritising for the current sprint, ensuring that they are [well-formed](#stories) and understood by the full team.

Often this involves writing new stories and updating existing ones, but we try to avoid this becoming the main purpose of the meeting. In our experience, sprint planning is much more useful when the [stories are written in advance](#backlog-grooming).

During this session, developers estimate the effort required to finish each story. We always estimate stories based on complexity, not the time we think it will take to finish it.

Design and development is worked on in parallel during a sprint. Because we design in browser and avoid separating development and user experience work, it's important when giving stories points to think both about the design and the development effort that will be required.

Once estimated, stories are prioritised by the client and put into the backlog for the sprint. Developers also advise the rest of the team at this point if there are any dependancies the client should be aware of.

By the end of this session, the full team should be confident about the goal of the sprint and what is being worked on.

#### Daily standups

Every morning the delivery manager facilitates a standup. Standups last 5-10 minutes and is for the developers to discuss what they're working on and whether there are any problems or dependencies. If we're not co-located with a client, these happen over Talky or Google Hangout.

#### Retrospectives
At the end of every sprint, the delivery manager facilitates a [retrospective](https://www.gov.uk/service-manual/agile/running-retrospectives.html) where the team can discuss how the sprint went. We talk about what went well, what didn't, and what actions should be taken to improve things for the next sprint. These sessions are attended by all the people involved in delivering the sprint along with the client team.

#### Backlog grooming
At regular intervals the team look through the sprint backlog to reprioritise and update stories, based on things we've learned during delivery and from user research. Stories that are no longer needed are deleted, stories that may be needed later or are blocked move to the icebox and all other stories are reprioritised for future sprints.

#### User stories
We document development work that needs to be completed by writing [user stories](https://www.gov.uk/service-manual/agile/writing-user-stories.html). .

A user story is a succinct explanation of some work that will be done in order to meet the needs of a particular kind of user. They are usually structured into a sentence, of the form:

> As a [kind of user], so that I can [meet a need], I want [a feature in the product]

Breaking everything down into user stories allows us to be confident that everything we develop is meeting [user needs](https://www.gov.uk/service-manual/user-centred-design/user-needs.html). By using this story format, we directly associate a feature or piece of functionality we're building with the group of users who want it and the needs that they have.

We keep lists of stories in Trello. We use user needs to create the title of a story, by rearranging it to reflect the new state of the system after the work is complete. For example:

> As an administrator, so that I can ensure I don't publish defamatory comments, I want to be able to review and approve comments before they are shown.

Might have a title of:

> Administrators can review and approve comments before they are shown

Each user story will also contain a list of acceptance criteria. Acceptance criteria are a collection of statements about the functionality of the service which must be true in order for the story to be considered "done".

For more information about writing good stories, we recommend reading User Stories Applied by Mike Cohn. There is a copy of this book in the dxw library.


#### Lifecycle of a story
<!-- TODO: This section should be an explanation of what happens to a story as it is worked on, focussing on "why" rather than "how" and explaining the philosophy. -->

There are several states that a story has to go through in order to be deployed to production. We use Trello and physical story boards to keep track of which stage a given story is in.

* **In progress**: A developer has started working on the story, making changes to the product to ensure that each acceptance criterion is met
* **Awaiting review**: The developer has finished the story and is ready for a second developer to [review](#Code reviews) the technical aspects of the story in a [pull request](#Pull request)
* **Code review**: The story is being reviewed by the second developer who leaves feedback if the pull request is not ready to be merged and needs further work
* **DM/client review**: The two developers have finished the review and the story is now merged and pushed to staging. It is ready for a delivery manager and the client to review against its acceptance criteria
* **Accepted**: The client has accepted the story and it's ready to deploy to production
* **Done**: The story is deployed to production


### Managing delivery
>"The delivery manager sets the team up for successful delivery. They remove obstacles, or blockers to progress, constantly helping the team become more self organising. They enable the work a team does rather than impose how it’s done."
>
>-- <cite>[Government Digital Service](https://www.gov.uk/service-manual/the-team/delivery-manager.html)</cite>

At dxw, delivery managers ensure that sprints go smoothly and that the team remain productive. They are generally the client's first and main point of contact, and are responsible for ensuring that we deliver good work.

Throughout a sprint, delivery managers ensure that agreed process is followed, organising and facilitating discussions as required. They run sprint planning and retrospective sessions. They run daily standups with the dxw and client teams to keep everyone informed and to discuss and resolve any blockers.

Outside of these session and standups, they maintain regular communication with the client and the delivery team to respond quickly to challenges as they arise. If priorities change during a sprint, the delivery manager works with the client to understand and plan for the impact of the change.


## Products

### GovPress
GovPress is a product we built to host most of the WordPress websites we build. It also has some things on it that are hosted and maintained by other people.

We built GovPress because clients were frequently asking us for hosting with high availability and high security, but didn't have enough budget to be able to build an appropriate hosting platform for their service. This is fair enough, because they shouldn't have to. We built GovPress to meet this need, and it is now used by most of our clients.

Read more about it at [www.govpress.com](https://www.govpress.com).

### GovSite
GovSite is a product we have built to provide a pre-configured WordPress site to clients with simple publishing requirements. It's a theme that we made, and a set of plugins we have curated.

We built GovSite because new prospective clients frequently ask us to build very similar sites to ones we have built before. There's a feature set that is very commonly asked for, but usually required by clients who don't have enough budget to build a proper [Digital by Default](https://www.gov.uk/service-manual/digital-by-default) service. We built GovSite to meet this need: it caters for the things we are most commonly asked for, and is much less expensive than building a site from scratch.

Read more about it at [www.govsite.com](https://www.govsite.com).

## Tickets

### Basics
We use [Zendesk](https://dxw.zendesk.com) to manage support requests. If you're just getting started, the [Zendesk Introduction](https://support.zendesk.com/hc/en-us/articles/203921213) is your first port of call. After you've read that, ask someone to sit with you and talk you through it, to answer any questions.

Other than for projects you're currently sprinting on, all requests for us to do things must come via tickets. We use tickets to manage requests in order to:

* Keep track of all the things we need to do, and what state they're in;
* Have a record of the changes we're asked to make;
* Ensure that we only accept change requests from people who are authorised;
* Generate data about how much staff time is spent on each client's issues.

If a client asks us to do something in person, on the phone or via email, we politely ask them to visit http://dxw.zendesk.com/ instead, and submit a ticket there. This is so that:

* We can keep track of the issue from report to solution, and ensure that it's assigned to the right person;
* We don't risk misunderstanding the problem by writing it down based on a verbal explanation
* We can formally track the changes that people ask for, by documenting them in tickets that we can look at later if need to
* We can be sure that requests are coming from people who are authorised to submit them

For these reasons, we do not do any work at all on a client site unless we are on a sprint or working on a relevant ticket. This is really important.

### Support sprints
We work on tickets by having a developer on a support sprint. Developers are assigned to support for two weeks at a time and work on tickets for the duration of the sprint. If there is a ticket they need another developer to help with, this work is scheduled for a Friday.

### Client experience (AKA: ticket principles)

#### Be responsive
Clients expect us to deal with their issues promptly. But they understand that this isn't always possible. They are generally forgiving of the fact that we're sometimes busy, and they understand that some issues are complex and require long investigations.

The thing most clients value above all else is being kept informed of what is going on. The first quality of a good ticket experience is responsiveness: we keep clients informed of what we're doing, even if there hasn't been much progress.

#### Stick to your commitments
It's really important that we do what we say we'll do, and don't promise things we can't deliver. If we're unable to deal with a ticket in good time and leave an update saying we'll work on it tomorrow, we must meet that commitment.

It is doubly bad to fail to meet a commitment and not say anything about it. Responsiveness is always the priority. So if for some reason we couldn't do what we said we'd do, we always respond to say so.

#### Make a good impression
In tickets as in all things, we are mindful of dxw's [values](#values).

Most clients' routine contact with us is via support tickets. So it's vital that our clients' experience of the support system is a good one, and also that they have a positive experience with us personally.

So, we are always considerate, and think about what style of response is best. For example, technical clients may appreciate short, information-dense responses, while non-technical clients might perceive that style as rude or dismissive.

In general:

* We are personable, friendly and helpful
* If things look like they're going to get difficult, or the client seems unhappy, we are honest, and assume good faith
* If appropriate, we are apologetic. If we screw something up, we take responsibility and apologise. If the client seems very upset, we let a delivery manager know.
* If we do become annoyed or frustrated by a ticket, we respond later or speak to a DM about reassigning it.


#### Don't over-deliver
Of course, every client would like us to go the extra mile to solve their problem. But they also understand that to do that for them would mean bad service for another client - or that we never get to their issue, because we're too busy gold-plating the solution to someone else's.

While we do everything we can to make sure the client is happy with our solution, we are also mindful of what's practical. We don't do serious bits of development work on tickets, or trial new approaches. We don't play with new tools or sink hours into interesting bugs. We set those things aside, and do them later.

The main purpose of a ticket is to take some action that solves the problem, as quickly as possible. Generally speaking, we do the most time-efficient thing that we can. Of several potential solutions that solve the problem, assuming none is a bad one, we do the one which can be implemented the most quickly.


### Workflow
All tickets that arrive on the helpdesk go through a number of stages in the course of being worked on.


#### New tickets

When a new ticket arrives, it is automatically assigned to the Front-line Support group. All agents in this group receive an email to alert them.

The Front-line Support group is monitored by whoever in operations is on call. It's their responsibility to review tickets as they arrive, and decide what to do with them. If they can deal with the issue, or if can complete an [initial investigation](#initial-investigation) into the problem, they do so.

If not, they will assign it to the developer on support. Sometimes tickets are assigned to a delivery manager if it looks like chargeable work or requires a conversation with the client.

As tickets are arriving, we also think about whether they might be related to other tickets that we've already received. For example, if we get several tickets from different clients about similar-sounding issues, that might be indicative of a wider problem. Or, if a single client sends lots of tickets within a short time, it might be wise to assign a delivery manager to oversee them all and ensure that the requests make sense when considered as a group.


#### Assignments

No matter what group you're in, when a ticket is assigned to you, you will receive an email. The ticket will also appear on your home screen in Zendesk.

When you are assigned a ticket, it is your responsibility to review it and take action. You must either solve the ticket or pass it on to someone who can.

A wide variety of issues can be reported through the helpdesk, so it's not possible to give an exhaustive guide on how to solve tickets. But there are some articles in the [Help Centre](https://dxw.zendesk.com) which may be useful. These are written for clients, but contain lots of useful information.

It's important to be proactive about solving tickets. As soon as we receive a ticket, the clock starts ticking: clients expect us to be [responsive](#responsiveness-1) and deal with their problems promptly.

If we're not sure how to proceed with a particular ticket, we don't just let it sit there: we ask for help. If we know what to do but don't have time to get it done, we get advice from a delivery manager.

Whenever we do anything at all related to a given ticket, we update it to let the client know - even if it's just to say that we haven't managed to figure out what the problem is yet.

If we're replying to a ticket just to update the client, but we still need to take some action, we set its status to open. The same applies if you are reassigning the ticket to another agent.

If we have taken some action and are now waiting for the client to reply, we set the ticket's status to pending. This will remove it from the list of tickets (until they answer).

#### Pending tickets

Pending tickets are those which we have updated with a question or a potential solution, and which now need to be updated by the client before we can proceed.

Pending tickets will not appear in the list of tickets or in the views for the Front-line and Escalated groups, allowing us to focus on tickets which still need your action.

Tickets which are pending will also be closed automatically after a set period of time if the client does not respond. They will get reminders before this happens. If a pending ticket you are assigned to is closed because the client didn't reply in time, both you and the client will get an email, so you can open it again if you think that's best.

Because pending tickets will be auto-closed if there's no reply, it's also important to check and set the *How much work was this?* field to give an approximation of the total time the team spent on the issue. Or, select *chargeable* if it's a ticket we'll invoice for.

When assigning a ticket to another agent, we do not set it to pending, otherwise they probably won't see it.


#### Solving tickets

If we believe that we have solved the issue the client has raised, we submit it as solved.

If it's something the client needs to check and confirm as fixed, we submit the ticket as pending until they reply, and mark it solved if they say everything's ok.

If a client replies to a solved ticket, it will be reopened. Sometimes clients reply just to say thanks. If so, we set it back to solved without comment.

It is important that solved tickets contain some record of what we did. This is usually not difficult, as your communication with the client will describe what actions you've taken. But that's not always the case.

Some tickets are not raised by clients, but are raised by another agent or by an automated process. In this situation, it's still important that tickets record what actions we took, so we don't close them without a good update. We always leave a couple of sentences to say what we did, even if it was minor.

Before solving a ticket, we make sure the *How much work was this?* is set to a sensible value.

#### On-hold tickets

Sometimes a ticket does not need any action imminently but is nonetheless an important issue which we must keep track of. Renewing certificates and domain names in good time is a good example of this kind of task.

In these situations, we turn the ticket into a task and give it a due date, and then set it to on-hold. The helpdesk will automatically reopen the ticket ten days before its due date, and it'll show back up in your list of open tickets.

Only tasks with due dates should be made into on-hold tickets.


### Deciding what to work on

You are free to work on whichever of your assigned tickets you think is most important. But there are some important things to bear in mind.


#### Triage

We all have limited time. We try to spend it wisely. All other things being equal, it is better to spend half an hour solving each of four tickets than to spend two hours on one issue.


#### Procrastinating

We don't procrastinate about dealing with difficult tickets. Most of our SLA breaches happen when a complex ticket arrives and is assigned to a busy person. In this situation, it's only natural that we prefer to do other work first. But it is vital that we don't let the hard tickets gather dust while we crack through the easy ones, so we try to be mindful of this bias.

#### Priority

The priority of tickets is important, and we must be biased towards dealing with more urgent tickets before less urgent ones.

Zendesk can help us to balance these factors. When you log in and land on the dashboard, you will see a list of your tickets, ordered by age and priority.

Unless there's a good reason not to, we deal with tickets in the order they are displayed. There's a "play" button at the top right hand corner of the ticket list that will serve up each ticket in turn, moving to the next as you mark things open, pending or solved.

Zendesk knows each ticket's age, the time it's been since it was updated, its priority and the time left until we breach our SLA. Generally speaking, it makes good decisions about priority.

Each ticket's priority should be reviewed regularly: whenever we update a ticket, we check the priority to make sure it's still right.

### Initial investigation

When we pick up new tickets or are assigned one where no investigation has yet happened, we complete an initial investigation. If you don't have the right skills for the issue or are not familiar enough with the project to know what to do, reassign the ticket to a more appropriate agent, or consult a delivery manager.

It's important that we don't make changes unless we thoroughly understand what we're being asked to do, and are confident that the client understands and has approved of the implications of the change. To that end, there are a few things we do when a new ticket arrives.


#### Complete all fields

All the fields on a ticket are important. Early in the process, we fill them in - including the type.

The priority and project fields are especially important. We always review them to make sure that they are correct. dxw's [Service Level Agreement](https://dxw.zendesk.com/hc/en-us/articles/205117695) explains what the different priorities mean.


#### Understand the request

We make sure that we understand the request that the client is making. When tickets arrive, they do not always describe the issue clearly. There is some [guidance](https://dxw.zendesk.com/hc/en-us/articles/200814655-Tips-for-submitting-tickets) you can send to clients if their tickets are often difficult to understand.

If you're not sure what the client is asking, ask questions. You can call them if you think that it would be easier just to have a conversation about the problem.

When you've reached an understanding of the situation the client is in and what they'd like you to do about it, write it on the ticket in an internal note, so that any other agent looking at the ticket has an easier time.


#### Replicate the bug

If the issue is a bug, we replicate the behaviour the client has reported before working on a fix. It's important that we can reliably and repeatably create the conditions necessary for the bug to arise before we start working on it. If we don't do this, we can't tell whether we've fixed the problem.

Sometimes, we find that the steps we need to follow are not exactly the same as those given by the client. If so, add an internal note with your findings.


#### Ensure the client has understood and approved the change

When presented with a problem, clients don't always ask us to do the most appropriate thing to fix it. Sometimes we can think of a better solution. Sometimes the change the client asks for has some implication that they haven't considered.

Our helpdesk service is advisory, so we're not afraid to suggest alternative approaches and ideas if we have them - including where there's a better solution, but [at a cost](#charging-for-ticket-work). We always give options when we can.

If you are in any doubt as to whether the client has understood and approved the change that you are about to make, explain it to them and ask for their explicit approval. It's fine to do this on the phone if that is more convenient, but if you do, update the ticket with a comment what you said and what was agreed.


### Managing tickets

There are a few background tasks that we do to ensure that helpdesk work goes smoothly.

#### Suspended tickets

The work in this section is the responsibility of **Front-line support agents**.

Only people who have been registered in Zendesk are permitted to submit tickets.

Tickets received from unregistered users are put into the Suspended Tickets view with a reason of "permission denied". We receive a digest email on the systems email to let us know what is in the suspended queue.

If we see a suspended ticket that looks legitimate, we create a ticket for the project owner and ask if the user should be added. If they can be added, we create them in Clients and Projects as a contact on the appropriate project, and then recover the ticket from the suspended list. If the new user shouldn't be added, we delete the ticket and ask the project owner to resubmit it if required.

If we receive a suspended ticket from someone who is not a contact but is adding useful information, add the information to the relevant ticket as an internal note and then delete the suspended ticket. We make sure the internal note mentions who the information came from.

Unauthorised users submitting tickets will not receive any response, so it is important to check the suspended list frequently.

Zendesk also suspends tickets that it suspects may be spam or autoresponders. It's hard to monitor the contents of the suspended tickets view if it's cluttered. So we clean up the list regularly. We delete anything that doesn't need to be recovered or noted.

#### SLA breaches

The work described in this section is the responsibility of **delivery managers**.

We monitor Zendesk for tickets that are or will shortly be breaching our SLA. There are two views to facilitate this: *SLA breaches* and *Approaching SLA breaches*. The number of tickets in these views is also displayed on the monitoring dashboard in the office.

Tickets will appear in these views if they have missed or are about to miss our targets for responsiveness. Our internal SLA targets are more stringent than our contractual SLA, so other than in extreme circumstances, we treat SLA breaches as a prompt for action rather than a crisis.

If a ticket is breaching the SLA or will soon do so, we take some action to avoid the breach. If the assignee is available, they may wish to prioritise work on that ticket. If not, it may be sensible to assign the ticket to someone else who can deal with the problem.

Always remember that all tickets except monitoring issues are subject to the SLA: whether raised by someone within dxw or by a client.

If you think we have breached the SLA badly, or have breached our contractual SLA, we contact the client to apologise and let them know what we're going to do about it.

#### Sampling

The work described in this section is the responsibility of **Harry**.

It's important for us to be able to provide good feedback to the team and catch potential problems before they become serious, so we review a sample of solved tickets at regular intervals.

If any problems are found with tickets, we give feedback, discuss as a team and change our process if necessary.

#### Following up on bad client feedback

The work described in this section is the responsibility of **delivery managers**.

After each ticket is solved, the requester is emailed to ask for their feedback on our performance. Our feedback is generally very good.

However, we do occasionally get feedback that we have not dealt with a ticket well. In these situations, we always follow up with the ticket requester personally to understand what went wrong. If applicable, we offer to do more work to set the situation straight.

We then also think about what feedback could be given to whoever worked on the ticket, whether it would be sensible to discuss the problem as a team and change our process if necessary.


### Scope

Clients can use the support service to ask for help with any aspect of the service we provide, including help with using the admin and advice on getting the best out of their site.

But there are some limitations. Under the support service, we do not:

* Add any new functionality requiring anything beyond extremely trivial development. This does not generally include installing plugins: checking and installing plugins is allowed
* Alter the source code of a plugin or library maintained by a third party
* Do things that the client can do for themselves in the WordPress administration area. In this situation, help them by letting them know the steps to take to achieve whatever they're trying to do.
* Other than by prior arrangement, communicate on the client's behalf with the operators of third-party services that the site uses
* Install a plugin that fails an inspection
* Do research to identify plugins to solve a particular problem. It's fine to recommend something that we already know of, but in this situation, we usually ask the client to do some searches on the WordPress Directory and suggest one, which we can then check and install.
* Fix complex problems that come up after a plugin or WordPress core update is applied. Exactly what constitutes a complex problem is at our discretion. But if we've spent a couple of hours on an updated-related bug and it's still not fixed, we're probably dealing with one.
* From time to time, we may make an exception to these restrictions. If you think that might be appropriate, ask Harry or a delivery manager. In all the above cases, we can offer to quote for the required work.

Finally, there is an overarching principle that we don't do anything on a ticket that is very time consuming or that is objectively a bad idea. If you think you're in this situation, ask a delivery manager for advice.


#### Charging for ticket work

If you decide that a ticket asks for work to be done which falls outside this scope, then the work is chargeable. In this situation, we reassign the ticket to a delivery manager with an explanation.

It is good to try to think of alternative approaches that we could do under our support service before taking this step - seek advice if you're unsure.

The delivery manager you assign the ticket to will then treat it as a [lead](#leads), and contact the client to make a plan.

## Sales

### Typical projects

We make most of our money by researching, designing and building web sites and apps. These are always for public sector organisations. Broadly speaking, they are either informational services ([corporate websites](https://www.judiciary.gov.uk), [campaigns](https://www.greatbusiness.gov.uk), intranets) or transactional services ([making payments, bookings, reporting things](https://www.youtube.com/watch?v=NN5B9rL_Hxs)). Sometimes they're a bit of both.

In so doing, we try to make sure that the organisations we're working with will be able to operate their new services well and sustainably. This sometimes involves work that an agency might not normally do, like advising an organisation's leaders on how their teams could be restructured, or on what their digital strategy could be.

More directly, we earn money by scheduling people to work on solving problems, finding things out, or building things. We charge for this work by the day, and sell it in batches of days. Everyone is billed at the same day rate.

We also make some of our money by hosting some of the services that we build, and by selling subscription-based products that are related to the rest of our work.


### Leads

Most of our leads arrive via email as a result of recommendations and word-of-mouth. Some arrive via more formal channels like framework agreements or helpdesk tickets. Leads might arrive to anyone's email account. We try to make sure things arrive in the sales email account wherever we can.

When any lead arrives, we record it in [Pipeline Deals](https://www.pipelinedeals.com/home) as a *Deal*. However, we also use PipelineDeals to record information about projects we have sold. So, we don't refer to anything in PipelineDeals as a "Deal". We either call it a *lead*, or after it's sold, an *order*.

We record as much information as we can about leads when they arrive. A lead should always be described in enough detail that someone else in the team could pick it up and work on it if needs be. That means that we always record a sensible name, the details of the organisation and the contact information of the person we're talking to. If they have provided any documents, we upload those into PipelineDeals as well.

Leads go through several stages during their life, to show whether we're waiting for more information, waiting for a meeting, writing a proposal and so on.

When the process ends, a lead will either be [won](#winning-work) or [lost](#losing-work).

### Qualifying a lead

Before we spend too much time thinking about or working on a lead, we need to make sure that the work and the client are a good fit for us, and that we're a good fit for them.

To do this, we:

* Ensure that we understand what they need, and what their vision is
* Ensure that there are no overt signs that they are not able to work in an agile way. Check explicitly, if an opportunity arises
* If possible, check that their budget is enough for the work they need
* Make sure the work that they need is something we can do
* Check that we'd be able to complete the work in time for whatever deadlines they have

When we mark a deal as Qualified, we update the summary to ensure that it accurately reflects the client's user needs and vision.

### Budgets

Clients won't always be happy to talk about their budgets, but [we do need to know](https://medium.com/@monteiro/why-i-need-to-know-your-budget-a61ec864c898). If they absolutely can't tell us, we do our best to guess at what it probably is, based on the information we have.

Where we don't think we could do what the client needs within their budget, we explore alternative options with them that are more affordable. Sometimes this works out, sometimes not. That's ok. Where it does, it tends to be because we've made a good case that it's better to have a small feature set that works really well than a large one that's slightly disappointing.

Where clients have a larger budget than we think they need, we say that too. This usually means explaining why we're able to do the work for less than they thought. We also think about what extra things we could do to improve their chances of success, and suggest extra work they could do.

Where a budget is disclosed that's more than we think is necessary, we usually propose a piece of work that uses that budget fully. But we're always open, and tell them that we've done this, and that we'd be delivering more than the minimum. And we're always happy to win a smaller bit of work than the client thought they'd need. We try to structure these proposals so that the extra work is easy to remove.


### Sales meetings

Wherever possible, we meet prospective clients before writing a proposal. This is because face-to-face conversation is the most efficient way to communicate, and the projects we bid for are often complex. Often, this meeting is the way we qualify a lead.

By the end of this meeting, we should make sure that we understand:

* Who the client's users are
* The user needs the client is trying to meet
* Their current vision for how those needs will be met
* Any notable technical requirements
* What the project's budget and deadlines are
* How many suppliers are likely to be bidding
* When they need to receive our proposal by

This meeting usually involves quite a bit of discussion about the project. In those discussions, we speak freely and openly, offering advice where appropriate and making any suggestions we might have. Be as [helpful](#helpful), [positive](#positive) and [creative](#creative) as you can.

It's important that we use this meeting to find out the information that we need to write a good proposal. But it's just as important to prove our expertise, to deliver value early and to leave the client with a positive first impression.


### Proposals and tenders

If the project is being tendered via a fixed process (like the Digital Services Framework) we'll respond by filling in a form that the client provides. These forms are not all the same, and the questions vary. If you're involved in this, have a good conversation with someone who's done it before first.

If we're writing a proposal following our own format, you'll have a proposal template to start from. The main things you'll need to write are:

* A description of the project's background. How did they get to the point they're at now?
* A description of the client's vision. What are they trying to do?
* An initial set of epics. How does the client believe their vision will be met?
* A cost for the work. How many sprints do we estimate we will we need to deliver the work?
* Details of any other work we'll do, like user research or usability testing.
* A rough timeline for when the sprints and other work will happen.

There are lots of examples of these proposals that anyone can read if they like.


### The shape of a good project

There aren't any strict rules about what projects we take on, except that the ultimate client must be a public sector organisation. But there are things that make some projects better for us than others. Good projects generally:

* Require 6 weeks of development work or more, so that there's time for at least 3 sprints
* Are for clients who understand agile processes or are keen to learn them
* Include a reasonable amount of user research and usability testing
* In the case of central government clients, are ones which have gone through [spend controls](https://www.gov.uk/service-manual/technology/spending-controls.html) and will be [service assessed](https://www.gov.uk/service-manual/digital-by-default/assessments-at-gds.html)
* Have a budget sufficient to complete the work to a high standard


### Winning work

When we win work, we mark it as Won in PipelineDeals. We amend the budget, closing date and services sold if necessary. We write to the client to thank them and ask them for a convenient time to meet and start the work. We create invoices in Xero and save them as drafts, so we don't forget to bill them. And we add the project's sprints and other work to Forecast, so that the team can see who's working on what.


### Losing work

When we lose work, we mark it as Lost in PipelineDeals. We write to the client to thank them for their interest and ask them for any feedback they might have. We usually also say that we'd be happy to talk about any future work they might have. We record the main reason we didn't win the work in PipelineDeals along with the detailed feedback.


### Administration

There's quite a lot of work involved in given sale, as it moves through the stages of the pipeline. To help manage this, we have tasks in Pipeline Deals that are automatically created when leads' statuses change. We can all do things to help this process flow smoothly. Some of us are responsible for particular tasks, which it's important to complete on time. Others will just be in a position to help when they notice an incorrect field, a missing contact or a missing file. We always correct these things when we can.


## Recruitment

### Basics
We use [Workable](https://dxw.workable.com) for recruitment, to help us stay organised and keep in touch with candidates.

Each candidate moves through a number of stages before being offered a job or declined: a screening interview via skype or phone, an interview and a work day. The work day includes another interview.

We feel strongly that it's important to be respectful of candidates time and interest in us, and that their attention is valuable. So we do our best to be responsive, human and open. It's particularly important to give unsuccessful candidates good, thorough feedback about why we haven't made them an offer.

### Job descriptions
Before we decide to advertise a new job, we write a job description. This helps us make sure we all agree on what we need, and helps candidates to know if their skills are a good for for the job. A good job description has three parts:

1. A description of what the person in this job will do
2. A list of their responsibilities
3. A list of the skills, experience and personal qualities they will need to be good at their job

There are lots of job descriptions on the website if you need inspiration. It's important for them to be declarative ("The person with this job will...") and as objective as possible. Throughout the rest of the process, we'll use this document to decide what questions to ask in interviews, and to fix activities for the work day. The skills and personal qualities need to be things that we can have a go at understanding by asking questions and observing a candidate's behaviour.

### How we find people
The first way we find people is through our networks. We look for people we know. Everyone who is willing tweets about the job and shares it on Facebook and other social networks.

The second way we find people is by advertising. We advertise jobs on StackOverflow, Github, WorkInStartups and Unicorn Hunt. Not all jobs go on all of these boards - we pick whatever seems most appropriate for the job.

The third way we find people is by making sure we're regularly blogging about what we're doing, and being open about our culture, work and process. We accept [general applications](https://www.dxw.com/jobs/general-application/) from people who are interested in dxw but who don't fit an open job.

### Review applications
All applications arrive via Workable. We review these applications as a team to decide who to take forward.

An application review is a very quick process. We look at the information given by the candidate and decide if it is likely that the applicant has the skills, experience and personal qualities that we need. If it is likely, we progress them to the next stage.

### Screening
The purpose of the screening is to:

1. Introduce ourselves and explain a little more about the job and life at dxw
2. Talk to the candidate about their experience and explore why they are interested in the job
3. Decide whether you think they are quite likely to have the experience and personal qualities that we are looking for
4. Get an idea of the candidate's salary expectation

Try to keep the conversation quite high-level, and avoid going into too much technical detail. This part of the process is more about experience and personal qualities than about skills. Things to keep in mind:

* Does this person seem likely to embody our [values](#values)?
* Does this person have an interest in our [mission](#why-are-we-all-here)?
* Does this person have experience working in [agile environments](#agile-mindset)
* Would you be comfortable taking this person to a meeting with a client? If not, why not?

If you can find out how they heard about the job, that's useful for us to know.

Many people feel self-conscious when asking questions about salary, but it's very important - and this is one of the few situations in daily life where people expect the question and are not put off by it. If you're not sure how to broach the topic, leave it to the end. When you're about to finish the call, you can say something like:

"Thanks for talking to me. Before we finish, please could you give me an idea the salary you'd like?"

If the candidate suggests a number that is unexpectedly high or low, it's also worth asking what they are paid in their current role.

We avoid making any commitments during this call. Near the end, we explain that we'll be in touch soon. Don't offer an interview there and then: that's something we agree as a team.

After the call, you can talk about the candidate with the team if you wish, or just make a decision. If you think it's quite likely that they have the skills, experience and personal qualities that we need, you should take them through to an interview.

### Interviews
Candidates who have a successful screen will be offered an interview. This is an hour long with two members of the team.

Before going to an interview, make sure you have:

* Set aside enough time for the interview. You should leave half an hour each side in case the candidate is early or the interview goes long.
* Read the job description
* Read the candidate's CV
* Read the questions for the interview, and thought about whether they are the right things to ask

dxw interviews are informal. They are a semi-structured conversation, rather than a Q&A. We do not recite the list of questions or keep verbose notes on replies. The questions are there to ensure that you don't forget to cover important ground, and as a prompt when the conversation naturally dries up.

Start with a couple of questions, and then allow the conversation to evolve naturally. Ask questions about things they say, and try to go into more detail on the points that you think will help you to assess their skills, experience and personal qualities. Keep the job description in mind: this should always be your frame of reference.

At the end of the interview, always ask the candidate if there's anything they would like to ask you. If they have questions, answer them honestly. If they ask about salary at this stage, or have a concern or question about the job that you don't feel comfortable addressing, tell the candidate we'll get back to them and make a note for an appropriate colleague to call them.

When everything's done, we thank the candidate for their time and then return to the office and discuss the interview. As soon as possible, we put a thorough update on Workable. This update should include the good things and bad things about the candidate, a recommendation on whether to take them forward, and a rationale for that recommendation. It is very important that this update is detailed enough for us to understand what happened and why, long after everyone involved has forgotten all about it.

If you think the candidate is very likely to have the skills, experience and personal qualities we need, you should take them through to a work day.

The work day interview is exactly the same as the first interview, but with different members of the team and different questions. Usually, it happens in the first hour of the work day.

### Work day

TODO. This section to cover:

* Principles for a good work day
* Preparing a work day activity
* Letting the candidate know if they need to bring anything and how much time we'll need
* Making sure there is a printed or emailed explanation for what they need to do
* Discussing the results
* Offer if we are sure they are right

### Offer, joining and probation

TODO. This section to cover:

* Salary negotiation, notice periods and start date
* Eligibility to work in the UK, documentation that we need
* Background check
* Starters checklist
* The probation period, meeting and expectations
* ...more things.


## Working arrangements

### Time
Our working hours are 10:00-18:00, Monday to Friday. Some people work different hours by arrangement. Anyone is free to do that as long as their hours of work don't make it hard for other people to get things done. For example, many people arrive earlier than 10:00 and leave earlier, which is generally fine.

We have a short stand-up every morning, where we each tell the whole team about a single thing we will get done that day. The stand-up is at 10:00. If you miss the stand-up, then you are [late](#lateness).

Most developers have maintenance responsibilities, which they do during [ticket time](#ticket-time).

We do our very best to work to a [sustainable pace](#sustainable-pace). But sometimes, when we're approaching a firm deadline or a launch, or a client is having an emergency, we work longer hours than normal. From time to time, there's an emergency that means we have to work during unsociable hours to solve the problem. Neither of these happen very often, but they are a normal part of life at dxw.

### Remuneration
dxw will institute a cost of living rise each year from April 2017. The percentage will be set by the CPI Index (https://www.ons.gov.uk/economy/inflationandpriceindices) as of 1st April each year and you will receive your raise in the April payroll.

For any other salary queries, please speak to Harry.

### Holiday
We use BreatheHR to manage holiday requests.

If you want to take holiday, first discuss the dates you plan to be away with your team so that they know when you're planning to go. Then request the holiday through BreatheHR.

We try very hard to make sure that all holiday requests are granted, irrespective of when they are made. But it's much easier for delivery managers to plan ahead when they have lots of notice, so please don't leave your requests to the last minute.

There is more information about dxw's holiday arrangements in your contract of employment.


### Sickness
If you are sick, you must let us know by 10:00, or as soon as is reasonably practical. Do not come to the office. If you come to the office when sick, you may be sent home again.

If you're sick but able to work, you can work from home. Everyone at dxw should have a laptop, and should generally take it home with them in case it's needed. If you're sick and at home but don't have your laptop, it can be couriered to you.

If you're sick for more than 7 calendar days, you'll need to provide a [fit note](https://www.gov.uk/government/publications/the-fit-note-a-guide-for-patients-and-employees) on your return to work. If you're sick for more than 14 calendar days, we will probably want to discuss your situation to see what we can do to help and to understand when/if you are likely to return.

When you return to work, you must check that your sickness has been correctly recorded in BreatheHR, and update it if necessary.

### Parental leave

#### Maternity leave
If you're expecting a child, you’ll probably be entitled to maternity leave and statutory maternity pay (SMP), which is funded by the government. They will pay you 90% of your normal salary for the first six weeks of your maternity leave.

Assuming you are entitled to SMP (almost everyone is), dxw will also pay you 90% of your salary for second six weeks of your maternity leave. This contribution is called Occupational Maternity Pay (OMP). Taken together, this means that you’ll have twelve weeks of leave on 90% of your normal salary.

To be eligible for OMP, on returning to work you will need to stay at dxw for at least three months full time (or proportionately longer if working part-time). If you decide not to, you will have to repay any OMP you received.

When you know you are pregnant please do tell us as soon as possible, so we can check that your working arrangements are safe for you and also ensure you are paid for time off for antenatal appointments.

#### Paternity leave
If your partner is having a baby or you are adopting, you’ll probably be eligible for statutory paternity pay and leave.

Ordinary paternity leave (OPL) may be taken for one or two weeks in a block (not two separate weeks), between the date of birth and 56 days afterwards.

If you qualify for OPL, we will top it up with an extra week of company paternity leave paid at the same rate as you were paid OPL, giving you three weeks of leave in total.


#### Keep in touch (KIT) days
You have 10 paid KIT days to take during your paternity or maternity leave if you wish to come in for departmental meetings, events or just to spend some time in the office.

Any bank holidays that you miss while on paternity or maternity will be added to your holiday entitlement when you return to work.


#### Shared Parental Leave
If you're having a baby or adopting a child, you may be eligible for [Shared Parental Leave and Pay](https://www.gov.uk/shared-parental-leave-and-pay). If you're interested in taking this up, please talk to Vanessa.


### Working from home
Generally, we work either at our office or at client sites. But it's usually fine to work from home from time to time, or in order to complete a specific task. If you're working apart from your team, it is essential that you remain contactable and productive, and the onus is on you to be especially communicative.

If you are working from home, you must record this as an absence in BreatheHR. There is a category, "WFH", for this purpose.


### Data protection

Though dxw doesn't control much personal data, our clients generally do. And some of it may be held on sites that we host. Everyone at dxw has a responsibily to keep that data safe, and process it in accordance to the [data protection principles](https://www.gov.uk/data-protection/the-data-protection-act).

In particular, we:

- Only process personal data as part of work on the service that we're contracted to provide to a client
- Don't access personal data unless we need to in order to do our jobs: don't read people's personal data or private communications without good reason
- We do not ever disclose people's personal data to anyone outside dxw unless specifically instructed, and are satisfied that it is legal to do so

If you have any questions about data protection, talk to Harry.


### Your details
Please tell us promptly if your name, address, telephone number or next of kin details change.


### Disciplinary procedure
If you do something that we feel constitutes misconduct, or your performance in your job has been poor, we'll talk to you about it. Hopefully, there's just been some misunderstanding, or some problem that's easy to solve and won't recur. Formal action will not be taken without careful investigation of the facts.

If we feel it's appropriate, we may verbally warn you, explaining what has been unacceptable and what you need to do to improve your conduct or performance.

If your conduct or performance fails to improve following a verbal warning, or if the matter is serious enough that a verbal warning is not appropriate, we may hold a disciplinary meeting at which you may be accompanied or represented by a colleague or trade union official. Following this meeting, we may:

- Conclude that no misconduct has taken place, or that there is no poor performance
- Issue you with a written warning, which will explain:
  - The nature of the misconduct or poor performance
  - The change to your behaviour or performance that you need to make
  - The time within which the change needs to be made
  - The consequences of not making the change (for example, dismissal)
- In cases of gross misconduct, dismiss you without notice

If you disagree with the outcome of this hearing, you may appeal against the decision. You must do this in writing. If you do so, your appeal and the circumstances of your case will be reviewed by a member of staff who has not been involved in your case before. That member of staff and the Managing Director will then meet to discuss your case, and will either uphold the outcome or schedule another disciplinary meeting. dxw's decision following that meeting will be final.


### Grievances
If you have a grievance about your employment or a complaint about another member of staff, talk to the Managing Director as soon as possible.

The first step is to discuss the problem to see if it can be quickly resolved.

If this discussion does not satisfactorily resolve the problem, you should put details of your grievance in writing and send it to the Managing Director. They will arrange a meeting to discuss the matter, at which you may be accompanied by a colleague or trade union official. Following this discussion the Managing Director will provide a written response.

If you disagree with this response or the matter remains unresolved, you may appeal by respond in writing. A further meeting will be arranged and the Managing Director will again respond in writing. This decision will be final.


### Use of personal devices at work
Most of us use at least one personal device as part of our work, because it's more convenient than carrying lots of devices around. However, no one is obligated to use a personal device for work. If you need a dxw-provided phone, tablet or other device, please ask for one.

Anyone who does use a personal device must take reasonable care to ensure that it cannot compromise dxw's security. This includes implementing prudent security measures, being mindful that your personal devices could be targeted as part of an attack on dxw or its clients. For example, you might receive an email to your personal email address designed to trick you into revealing a work-related password.

Exactly what security measures are prudent may vary depending on the device and what you're using it for. Some good practice examples are:

- Configuring screens to lock after a period of inactivity
- Ensuring that work-related data on the device is regularly backed up
- Encrypting storage
- Using good passwords and changing defaults
- Avoiding connecting devices to untrustworthy networks (internet cafes, security conferences, unencrypted (open) wifi networks, etc)
- Disposing of your device securely when you no longer need it

If you need to use a personal device but cannot take these sorts of measures, you should get permission first.


### Expenses
From time to time, some of us spend our own money at work. Most often, this is things like:

* Train fares for unexpected travel
* Refreshments purchased for meetings with clients
* Stationery/materials, especially for workshops or events

dxw will always pay expenses which are:

* __Necessary__: We only expense things we need in order to be able to complete our work
* __Proportionate__: The total expense should be proportionate to the work at hand. In general, we try to avoid spending lots of money. For example, unless you have a good reason, don't get a cab to a meeting when you could get a train.

Wherever possible, it's best to check that expenses can be reclaimed before incurring them.

We manage expenses using Xero. For more information about how to do this, see the [guide on claiming expenses]()


### The buddy system
The buddy system is the main way we help each other to perform well and improve our skills. During your first couple of months at dxw, as you get to know the team, you should choose someone and ask them to be your buddy.

As soon as you have a buddy, you'll meet regularly with them to talk about how you're doing. You can talk about things you'd like to improve, problems you're having or new things you'd like to do. After you've discussed what you want to achieve, you'll decide together how best to go about it. In your regular meetings, you'll talk about what's working well and what's not, and decide if you need to change something.

During each meeting, we add cards to the [buddy trello](https://trello.com/b/TmiYBPZg/buddy-chats), so that the rest of the team know what you're working on and can help. If you want to talk about something private, you can. You don't have to put everything on the board. But the presumption is that we do, unless there's a good reason not to.

The buddy system is there to help us all improve, to make sure we're doing the right kind of work and to check that we're dealing with practical problems we're facing. It's not line management, so it's not the right place to talk about holiday, salary, sickness, absence or anything disciplinary. If you need to talk about those things, talk to Vee or Harry.

There are a two main ideas that underpin this system.

#### We are each responsible for our own improvement
Before this system, we had regular performance reviews. They were supposed to be quarterly but generally ended up being annual. They didn't work very well, and were very top-down. We don't think this is the right way.

We prefer to assume that everyone wants to improve, and will do so given the time and space to work on it. The buddy system is there to provide a set of prompts to ensure that this happens, and an explicit time to talk about it.

#### It's best to be open
Trying to improve things in secret is a missed opportunity to get help from others. We may each be responsible for our own improvement, but we're also a team: we should help each other. Recording the things we're working on with the buddy Trello is an unintrusive, quick way to ensure that everyone else knows too.


### Calendars and documents
We use Google Apps for Work to manage calendars, write and share documents. There is a dxw folder where we share most of the things we write. If you can't see it when you log in to Google Drive, you'll need to ask someone else to send you the link, and then click "Add to drive".

When we write new things, we try to save them in a sensible folder within the existing structure.


### Protective marking scheme
Some information that we have is confidential. We use a protective marking scheme so that everyone understands how to handle this material, and who they're allowed to disclose it to. All of the documents and data we hold will fall into one of the categories below.

* __Management-in-Confidence__: internal documents whose circulation within dxw needs to be restricted.
* __Company Confidential__: information owned by dxw which would be of value to those outside the company, such as competitors, and whose loss or theft would potentially damage the company.
* __Client Confidential__ or __Commercial in Confidence__: information owned by dxw or its clients, which needs to remain confidential between dxw and the client.
* __Unclassified__: information, which would not be of significant commercial value to those outside dxw.

Some of our clients also have protective marking schemes. For example, all central government bodies will apply the [Government Protective Marking System (GPMS)](https://www.gov.uk/government/uploads/system/uploads/attachment_data/file/251480/Government-Security-Classifications-April-2014.pdf). If you are in possession of materials that are protectively marked using other schemes, treat them as company confidential.

We take care to handle all data carefully, but when information is protectively marked, extra requirements apply.

Because we value openness highly, we take care not to over-classify information. We don't protectively mark information unless there is a good reason to keep it confidential.

#### Management-in-confidence
This category is used only for dxw's most confidential information. For example, employment records, salary details and company strategy documents.

Do not share any information with this marking with any person, whether internal or external to dxw.

This information:

* Must be clearly labelled or described as "Management-in-confidence"
* When printed:
  * Stored only in a locked container
  * Transported only via courier, recorded delivery or personally by dxw staff
  * Destroyed by cross-cut shredding when no longer required
* When digital:
  * Stored in an encrypted format
  * Communicated only when encrypted or via an encrypted connection, unless emailed from one dxw.com address to another


#### Company Confidential
This category is used for information which should not be communicated outside dxw. For example, details about how we operate security controls or internal discussions about client work.

Exactly the same controls apply to this information as detailed under Management-in-confidence, with the exception that Company Confidential information can be shared within the dxw as required.

#### Client Confidential or Commercial in Confidence
This category is used for information which is disclosed to a limited group of people external to dxw, or which is unclassified information we have received from clients. For example, dxw proposals, presentations for pitches or planning documents.

Unless otherwise specified, all unclassified information we receive from clients falls into this category.

This information:

* Must be clearly labelled or described as "Client Confidential" or "Commercial in Confidence"
* When printed:
  * Stored out of sight
  * Destroyed by cross-cut shredding when no longer required
* When digital:
  * Stored in an encrypted format when on exchangeable media or a mobile device

As a rule of thumb, label a document as Client Confidential if it mostly contains the client's confidential information, or Commercial in Confidence if it mostly contains dxw's.

#### Unclassified
Anything not captured by the sections above is unclassified. Examples are external marketing material, general emails and letters.

Beyond a general duty to treat information carefully, unclassified information is not subject to any specific restrictions.

### Email Signature
Name
Job Title
name@dxw.com
Twitter handle - if you’re comfortable to share
Mobile - if you’re comfortable to share

www.dxw.com :: 0345 2577520 :: @dxw
helping public sector teams to make good technology decisions and build better services

### Benefits

#### Pensions
dxw will provide a pension which is operated by Aviva. We are in the process of setting this pension up, and will add more details here as soon as they are finalised. We expect the first deductions to be made around May 2017.

#### Childcare Vouchers
dxw have a Childcare vouchers scheme with Busy Bees Benefits www.busybeesbenefits.com/childcare
For more information, check BreatheHR or let Vanessa know you would like to join the scheme.

#### Conference Perk
It's important to cultivate interests outside work, and we believe that investing time in this brings benefits to dxw.

So, in addition to going to conferences relevant to our roles, everyone who works at dxw is able to attend one conference per year about anything that they'd like.

On request, dxw will cover the cost of a conference ticket, travel and accommodation, anywhere in reach of a budget flight.

#### Cycle to work scheme
dxw operates a cycle-to-work scheme, which may allow you to purchase a bicycle at reduced cost. If you would like to take this up, speak to Vanessa.

#### Book purchase
If there is a book relevant to your work that you would like to read, let Vanessa or Leanne know and they will buy it for the library.


## Sharing

### Events
We all go to work-related events and conferences, sometimes for work and sometimes in our personal time. No matter what capacity you're attending an event in, you are a representative of dxw. What you say and do will influence the way people think about the company as well as about you. It's important, both personally and for the business, that you make a positive impression.

This section is here to share what we've learned about how to make the most of these sorts of events.

- **Be nice**: this should go without saying, but whenever we're at events, we show respect to others, treating them how we would like to be treated ourselves. If you meet and talk to others and you’re pleasant, welcoming, and interested in what they have to say you’ll always be remembered in a positive light.
- **Talk to people**: one of the best parts of this community is that we’re all in it to socialise, share ideas, and grow as an industry. So talk to people. Try to talk to at least one new person at every event. Don’t just stick to the same group of friends: be sociable. You never know what might come of it.
- **Talk about work**: but don’t be pushy. People will always usually ask “what do you do” or “where do you work” so take that opportunity to talk about dxw positively. Talk about the things you’re doing, what you’re finding interesting, and things relevant to the situation. Just don’t go on about yourself, ask people about their work and be interested in what they have to say.
- **If we’re hiring**: talk to even more people than normal! Especially if you’re at an event where the attendees might be relevant for the job. But again, don’t be pushy. Talk to people, join conversations, and if appropriate, mention that we’re hiring and they might be a good candidate. Just don’t let it be the only thing you talk about.

#### Speaking at events
Speaking at events is a great opportunity to represent dxw. There are a couple of ways this can be valuable.

If it’s an event around your personal speciality (front-end development, sysops, UX etc), feel free to stick to any personal “branding”, slides, or talk style you might have already developed. At the start of your talk however, please introduce yourself as being from dxw, introduce what the company does, and what you do at the company. Then continue with your talk.

If it’s an event more around dxw’s focus (public sector events, dxw projects, public-sector specific topic etc) then err more towards using dxw's branding and slides. Introduce the company in full and what your role is within the company. Stick to the dxw style of talk and where appropriate discuss the company’s principles.

In either situation, if we’re hiring, mention this towards the end of the talk. Tell people what roles we’re looking for and that they’re welcome to speak to you after the talk about it in more detail. Also make sure to have a short link to the job description in your slides too.

The most important thing to remember is that you'll leave the best impression - personally and for the company - if your talk is interesting, useful and well-presented. It takes time to make talks that work well. If you need help, advice or time to prepare, don't be afraid to ask for it. It's also good to blog after the event, to talk about your experience and what you learned. If you need time to be set aside, talk to a Delivery Manager and see what's possible.


### Blog
At dxw, we all write blog posts regularly.

We blog because want to share what we're doing and what we're learning about tech and government with the digital community. When we're hiring, we also want potential new staff to be able to to get to know us a bit beforehand. Writing introductory blog posts and following up with communicating about the work we do helps people gauge what kind of team we are. We also work in the open and are keen to share our knowledge, express our values and get people thinking about how to improve services for the public sector. One of the ways we do this is by encouraging feedback as much as honing our own views on certain topics.

We collect ideas for blog posts on a Trello board, where they can be discussed before being written. Often, we'll pick up ideas from this board on Fridays and spend our dxw time writing.

The process for writing a new post is:

- Write the post and save in Google drive
- Have peers review your post and suggest changes (if required)
- When you're happy with the post, ask Harry to sign it off
- Send the post to CommsCrowd to see if they might want to pitch it to publications
- When ready, add the post to WordPress as a draft and agree a publication time with the team
- Write a tweet to promote your post and add it to Buffer, scheduled to go out when the post is public

### Twitter

### Facebook
