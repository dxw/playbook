# dxw's playbook

## Purpose
For most of dxw's life, we've been small enough that it's been easy for everyone to know what's going on and how to get things done, just by listening to what's going on in the office. The team is now big enough that we need a reference for the way we do things. A place to capture the changes we agree to make. Something canonical that tells us what the current "right way" to do things is.

We'll always iterate on this document, because we'll always explore better ways to get things done. But now, when we've found one, it'll be recorded here. And once it is, it'll be the way we do things until we find something better, and write it down.

This document lives in Github. Anyone on the team can edit it, and should do so. But an edit must never be a substitute for discussion and agreement, so be careful about making significant changes. This document is also public, because there is very little about our process that cannot be open. But there will be things from time to time, so don't forget that changes here get published to the world.

Finally, this document is inspired by [Thoughtbot's excellent playbook](https://playbook.thoughtbot.com/), some of which we have made our own. Thanks, Thoughtbot!


## Working at dxw

### Why are we all here?
The web has revolutionised the way society works. Most of society has reaped the benefits of digital technology, but most public services lag behind. As a result, they are often expensive to build and run, and hard for people to use.

Since dxw was founded in 2008, a lot of things have become better. The Government Digital Service has changed the conversation about how and why services get built, and many are much better as a result. But the challenge facing the public sector is not one that any organisation could tackle alone.

In addition to talented in-house teams who understand how to deliver great services, the public sector needs talented suppliers who understand how to work with it. And who are driven by a desire to make public services better. And who understand how to combine a modern technogical approach with agile principles of development and user-centricity. That's what dxw is here to do.

We build digital public services that are flexible, efficient, effective and useful. We want people's experience of those services to be straightforward, positive and seamless. We believe that in building those services using agile principles, we can help government to embed those same principles in other parts of their organisations.

Ultimately, we want to help the public sector to spend less on technology so that it can spend more on education, healthcare, policing and welfare. We believe that it is possible to use technology and agile principles to help government become something recognisably, radically better: and we want to help make it happen.

### Values
We think that it's very important to have a talented team if we're going to succeed. But just as important as raw talent is our ability to work well together. These are the values that we aspire to, and help each other to achieve.

#### Helpful
We are helpful, useful and expert. We give practical and pragmatic advice to each other, and to our clients.

#### Honest
We are honest, trustworthy and straightforward. We give plain-spoken, frank, accurate feedback and advice, and we never mislead or obfuscate.

#### Positive
We are positive, cheerful and supportive. Even in crisis, we stay optimistic. We [assume good faith](https://en.wikipedia.org/wiki/Wikipedia:Assume_good_faith) and offer constructive challenge.

#### Creative
We are creative, diverse and curious. We help each other to learn and improve and we're sensitive to each others' needs. We love technology and finding new ways to solve problems.

#### Determined
We are determined, discerning and motivated. We believe in high standards, we enjoy doing things properly, and we're loath to settle for less.

#### Reliable
We are reliable, consistent and committed. We make every effort to live up to each others' expectations, and to exceed the expectations of our clients.

### Some guiding principles

#### Agile mindset
TODO

#### Sustainable pace
We work at a sustainable pace. We estimate work and schedule it conservatively, and set realistic expectations with clients about the pace of delivery.

This doesn't mean that we don't work hard. Being productive is a vital part of maintaining the trust that our clients give us, and it's important not to let them down.

When taking time off during client work, we discuss how it will impact the schedule with other team members.

Sending communication outside of working hours may create an unintended sense of urgency with the recipients of your message. Try to avoid creating that urgency when possible. Unless actually urgent, you may ignore messages which you receive outside of working hours and handle them once you are back at work.

#### Openness
TODO - must include confidentiality bits

### Time
Our working hours are 10:00-18:00, Monday to Friday. Some people work different hours by arrangement. Anyone is free to do that as long as their hours of work don't make it hard for other people to get things done.

We have a short stand-up every morning, where we each tell the whole team about a single thing we will get done that day. The stand-up is at 10:05. If you miss the stand-up, then you are [late](#lateness).

Most developers have maintenance responibilities, which they do during [ticket time](#ticket-time).

We do our very best to work to a [sustainable pace](#sustainable_pace). But sometimes, when we're approaching a firm deadline or a launch, or a client is having an emergency, we work longer hours than normal. From time to time, there's an emergency that means we have to work during anti-social hours to solve the problem. Neither of these happen very often, but they are a normal part of life at dxw.


### Changes to this document
This playbook is a collaborative effort. If you spot something that's wrong, feel free to hop in and correct it. But remember that this playbook is the result of our conversations about how we should do things, not a substitute for one. So don't make changes unless they reflect our shared agreement about how things are going to be done.

If you are making a substantial change (perhaps following a team conversation) please make it in a branch and submit a pull request. Then ask someone else who was in the conversation to review and merge it. When we review a pull request on the playbook, we check that it accurately captures the conversation, that it doesn't contain anything private, and that it's well written and free of typos, incorrect speelings and other minor errors.

## Build

### Discovery, research and usability testing

#### Scheduling

#### Field work

#### Reporting

### Sprints
We sprint. Sprint zero. Sprints are the same in all phases.

## Products

### GovPress
GovPress is a product we built to host most of the WordPress websites we build. It also has some things on it that are hosted and maintained by other people.

We built GovPress because clients were frequently asking us for hosting with high availability and high security, but didn't have enough budget to be able to build an appropriate hosting platform for their service. This is fair enough, because they shouldn't have to. We built GovPress to meet this need, and it is now used by most of our clients.

Read more about it at [www.govpress.com](https://www.govpress.com).

### GovSite
GovSite is a product we have built to provide a pre-configured WordPress site to clients with simple publishing requirements. It's a theme that we made, and a set of plugins we have curated.

We built GovSite because new prospective clients frequently ask us to build very similar sites to ones we have built before. There's a feature set that is very commonly asked for, but usually required by clients who don't have enough budget to build a proper [Digital by Default](https://www.gov.uk/service-manual/digital-by-default) service. We built GovSite to meet this need: it caters for the things we are most commonly asked for, and is much less expensive than building a site from scratch.

Read more about it at [www.govsite.com](https://www.govsite.com).

### Mongoose


## Tickets

### Basics
We use [Zendesk](https://dxw.zendesk.com) to manage support requests. If you're just getting started, the [Zendesk Introduction](https://support.zendesk.com/hc/en-us/articles/203921213) is your first port of call. After you've read that, ask someone to sit with you and talk you through it, to answer any questions.

Other than for projects you're currently sprinting on, all requests for us to do things must come via tickets. We use tickets to manage requests in order to:

* Keep track of all the things we need to do, and what state they're in;
* Have a record of the changes we're asked to make;
* Ensure that we only accept change requests from people who are authorised;
* Generate data about how much staff time is spent on each client's issues.

If a client asks us to do something in person or on the phone, we politely ask them to visit http://dxw.zendesk.com/ instead, and submit a ticket there. If they send a request via email, we forward their email to support@dxw.com to turn it into a ticket.

We do not do any work at all on a client site unless we are on a sprint or working on a relevant ticket. This is really important.

### Ticket time
We work on tickets every day. Developers get 1.5-2 hours per day to work on their tickets. This applies every day, including when we're working on sprints. This is reflected in the cost of our sprints - they are 10 days long, but we only charge for 8.

If you don't have any tickets of your own to do, see if you can take one over from someone else in the team, or pick up a new one. There is almost always something to do.

### Client experience

#### Responsiveness
Clients expect us to deal with their issues promptly. But they understand that this isn't always possible. They are generally forgiving of the fact that we're sometimes busy, and they understand that some issues are complex and require long investigations.

The thing most clients value above all else is being kept informed of what is going on. The first quality of a good ticket experience is responsiveness: we keep clients informed of what we're doing, even if there hasn't been much progress.

#### Sticking to commitments
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
* If we do become annoyed or frustrated by a ticket, we respond later or reassign it.


#### Don't over-deliver
Of course, every client would like us to go the extra mile to solve their problem. But they also understand that to do that for them would mean bad service for another client - or that we never get to their issue, because we're too busy gold-plating the solution to someone else's.

While we do everything we can to make sure the client is happy with our solution, we are also mindful of what's practical. We don't do serious bits of development work on tickets, or trial new approaches. We don't play with new tools or sink hours into interesting bugs. We set those things aside, and do them later.

The main purpose of a ticket is to take some action that solves the problem, as quickly as possible. Generally speaking, we do the most time-efficient thing that we can. Of several potential solutions that solve the problem, assuming none is a bad one, we do the one which can be implemented the most quickly.


### Workflow
All tickets that arrive on the helpdesk go through a number of stages in the course of being worked on.


#### New tickets

When a new ticket arrives, it is automatically assigned to the Front-line Support group. All agents in this group receive an email to alert them.

If you are in the Front-line Support group, it's important that you keep an eye on the helpdesk so that you know when new tickets arrive. It's your responsibility to review tickets as they arrive, and decide what to do with them. If you can deal with the issue, or if you can complete an initial investigation into the problem, do so.

If you're ultimately unable to solve the ticket, assign it to someone in the Escalated Support group. Try to choose the person you think will be best placed to solve the issue. If you're not sure, ask a delivery manager.


#### Assignments

No matter what group you're in, when a ticket is assigned to you, you will receive an email. The ticket will also appear on your home screen in Zendesk.

When you are assigned a ticket, it is your responsibility to review it and take action. You must either solve the ticket or pass it on to someone who can.

A wide variety of issues can be reported through the helpdesk, so it's not possible to give an exhaustive guide on how to solve tickets. But there are some articles in the [Help Centre](https://dxw.zendesk.com) which may be useful. These are written for clients, but contain lots of useful information.

It's important to be proactive about solving tickets. As soon as we receive a ticket, the clock starts ticking: clients expect us to be [responsive](#responsiveness) and deal with their problems promptly.

If we're not sure how to proceed with a particular ticket, we don't just let it sit there: we ask for help. If we know what to do but don't have time to get it done, we get advice from a delivery manager.

Whenever we do anything at all related to a given ticket, we update it to let the client know - even if it's just to say that we haven't managed to figure out what the problem is yet.

If we're replying to a ticket just to update the client, but we still need to take some action, we set its status to open. The same applies if you are reassigning the ticket to another agent.

If we have taken some action and are now waiting for the client to reply, we set the ticket's status to pending. This will remove it from the list of tickets (until they answer).

#### Pending tickets

Pending tickets are those which we have updated with a question or a potential solution, and which now need to be updated by the client before we can proceed.

Pending tickets will not appear in the list of tickets or in the views for the Front-line and Escalated groups, allowing us to focus on tickets which still need your action.

Tickets which are pending will also be closed automatically after a set period of time if the client does not respond. They will get reminders before this happens. If a pending ticket you are assigned to is closed because the client didn't reply in time, both you and the client will get an email, so you can open it again if you think that's best.

When assigning a ticket to another agent, we do not set it to pending, otherwise they probably won't see it.


#### Solving tickets

If we believe that we have solved the issue the client has raised, we submit it as solved.

If it's something the client needs to check and confirm as fixed, we submit the ticket as pending until they reply, and mark it solved if they say everything's ok.

If a client replies to a solved ticket, it will be reopened. Sometimes clients reply just to say thanks. If so, we set it back to solved without comment.

It is important that solved tickets contain some record of what we did. This is usually not difficult, as your communication with the client will describe what actions you've taken. But that's not always the case.

Some tickets are not raised by clients, but are raised by another agent or by an automated process. In this situation, it's still important that tickets record what actions we took, so we don't close them without a good update. We always leave a couple of sentences to say what we did, even if it was minor.

Before solving a ticket, we use the *How much work was this?* field to give an approximatation of the time we spent on the issue, or we select *chargeable* if it's a ticket we'll invoice for.

#### On-hold tickets

Sometimes a ticket does not need any action imminently but is nonetheless an important issue which we must keep track of. Renewing certificates and domain names in good time is a good example of this kind of task.

In these situations, we turn the ticket into a task and give it a due date, and then set it to on-hold. The helpdesk will automatically reopen the ticket ten days before its due date, and it'll show back up in your list of open tickets.

Only tasks with due dates should be made into on-hold tickets.


### Deciding what to work on

You are free to work on whichever of your assigned tickets you think is most important. But there are some important things to bear in mind.


#### Triage

We all have limited time. We try to spend it wisely. All other things being equal, it is better to spend spend half an hour solving each of four tickets than to spend two hours on one issue.


#### Procrastinating

We don't procrastinate about dealing with difficult tickets. Most of our SLA breaches happen when a a complex ticket arrives and is assigned to a busy person. In this situation, it's only natural that we prefer to do other work first. But it is vital that we don't let the hard tickets gather dust while we crack through the easy ones, so we try to be mindful of this bias.

#### Priority

The priority of tickets is important, and we must be biased towards dealing with more urgent tickets before less urgent ones.

Zendesk can help us to balance these factors. When you log in and land on the dashboard, you will see a list of your tickets, ordered by age and priority.

Unless there's a good reason not to, we deal with tickets in the order they are displayed. There's a "play" button at the top right hand corner of the ticket list that will serve up each ticket in turn, moving to the next as you mark things open, pending or solved.

Zendesk knows each ticket's age, the time it's been since it was updated, its priority and the time left until we breach our SLA. Generally speaking, it makes good decisions about priority.


### Initiatial investigation

When we pick up new tickets or are assigned one where no investigation has yet happened, we complete an initial investigation. If you don't have the right skills for the issue or are not familiar enough with the project to know what to do, reassign the ticket to a more appropriate agent, or consult a delivery manager.

It's important that we don't make changes unless we thoroughly understand what we're being asked to do. To that end, there are a few things we do when a new ticket arrives.


#### Complete all fields

All the fields on a ticket are important. Early in the process, we fill them in - including the type.

The priority and project fields are especially important. We always review them to make sure that they are correct. dxw's [Service Level Agreement](https://dxw.zendesk.com/hc/en-us/articles/205117695) explains what the different priorities mean.


#### Understanding the request

We make sure that we understand the request that the client is making. When tickets arrive, they do not always describe the issue clearly. There is some [guidance](https://dxw.zendesk.com/hc/en-us/articles/200814655-Tips-for-submitting-tickets) you can send to clients if their tickets are often difficult to understand.

If you're not sure what the client is asking, ask questions. You can call them if you think that it would be easier just to have a conversation about the problem.

When you've reached an understanding of the situation the client is in and what they'd like you to do about it, write it on the ticket in an internal note, so that any other agent looking at the ticket has an easier time.

If the client's request is clear, there's no need to do this bit.


#### Replicating the bug

If the issue is a bug, we replicate the behaviour the client has reported before working on a fix. It's important that we can reliably and repeatably create the conditions necessary for the bug to arise before we start working on it. If we don't do this, we can't tell whether we've fixed the problem.

Sometimes, we find that the steps we need to follow are not exactly the same as those given by the client. If so, add an internal note with your findings.


### Managing tickets

There are a few background tasks that we do to ensure that helpdesk work goes smoothly.

#### Suspended tickets

The work in this section is the responsibility of **Front-line support agents**.

Only people who have been registered in Zendesk are permitted to submit tickets.

Tickets received from unregistered users are put into the Suspended Tickets view with a reason of "permission denied". We receive a digest email on the systems email to let us know what is in the suspended queue.

If we see a suspended ticket that looks legitimate, we create a ticket for the project owner and ask if the user should be added. If they can be added, we create them in Clients and Projects as a contact on the appropriate project, and then recover the ticket from the suspended list. If the new user should't be added, we delete the ticket and ask the project owner to resubmit it if required.

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
* From time to time, we may make an exception to these restrictions. If you think that might be appropriate, ask Harry or a delivery manager. In all of the above cases, we can offer to quote for the required work.

Finally, there is an overarching principle that we don't do anything on a ticket that is very time consuming or that is objectively a bad idea. If you think you're in this situation, ask a delivery manager for advice.


#### Charging for ticket work

If we decide that the ticket is not resolvable under our support service and that the work is chargeable, we reassign the ticket to a delivery manager with an explanation.

It is good to try and think of alternative approaches that we could do under our support service before taking this step - seek advice if you're unsure.

## Sales

### Typical projects

We make most of our money by researching, designing and building web sites and apps. These are always for public sector organisations. Broadly speaking, they are either informational services ([corporate websites](https://www.judiciary.gov.uk), [campaigns](https://www.greatbusiness.gov.uk), intranets) or transactional services ([making payments, bookings, reporting things](https://www.youtube.com/watch?v=NN5B9rL_Hxs)). Somtimes they're a bit of both.

In so doing, we try to make sure that the organisations we're working with will be able to operate their new services well and sustainably. This sometimes involves work that an agency might not normally do, like advising an organisation's leaders on how their teams could be restructured, or on what their digital strategy could be.

More directly, we earn money by scheduling people to work on solving problems, finding things out, or building things. We charge for this work by the day, and sell it in batches of days. Everyone is billed at the same day rate.

We also make some of our money by hosting some of the services that we build, and by selling subscription-based products that are related to the rest of our work.


### Leads

Most of our leads arrive via email as a result of recommendations and word-of-mouth. Some arrive via via more formal channels like framework agreements. Leads might arrive to anyones email account. We try to make sure things arrive in the sales email account wherever we can.

When any lead arrives, we record it in [Pipeline Deals](https://www.pipelinedeals.com/home) as a *Deal*. However, we also use PipelineDeals to record information about projects we have sold. So, we don't refer to anything in PipelineDeals as a "Deal". We either call it a *lead*, or after it's sold, an *order*.

We record as much information as we can about leads when they arrive. A lead should always be described in enough detail that someone else in the team could pick it up and work on it if needs be. That means that we always record a sensible name, the details of the organisation and the contact information of the person we're talking to. If they have provided any documents, we upload those into PipelineDeals as well.

Leads go through several stages during their life, to show whether we're waiting for more information, waiting for a meeting, writing a proposal and so on.

When the process ends, a lead will either be [won](#winning_work) or [lost](#losing_work).

### Qualifying a lead

Before we spend too much time thinking about or working on a lead, we need to make sure that the work and the client are a good fit for us, and that we're a good fit for them.

To do this, we:

* Make sure we understand what they need, and what their vision is
* Make sure the work that they need is something we can do
* Check that their budget is enough for the work they need
* Check that they are happy to work in an agile way
* Check that we'd be able to complete the work in time for whatever deadlines they have


### Budgets

Clients won't always be happy to talk about their budgets, but [we do need to know](https://medium.com/@monteiro/why-i-need-to-know-your-budget-a61ec864c898). If they absolutely can't tell us, we do our best to guess at what it probably is, based on the information we have.

Where we don't think we could do what the client needs within their budget, we explore alternative options with them that are more affordable. Sometimes this works out, sometimes not. That's ok. Where it does, it tends to be because we've made a good case that it's better to have a small feature set that works really well than a large one that's slightly disappointing.

Where clients have a larger budget than we think they need, we say that too. This usually means explaining why we're able to do the work for less than they thought. We also think about what extra things we could do to improve their chances of success, and suggest extra work they could do.

Where a budget is disclosed that's more than we think is necessary, we usually propose a peice of work that uses that budget fully. But we're always open, and tell them that we've done this, and that we'd be delivering more than the minimum. And we're always happy to win a smaller bit of work than the client thought they'd need. We try to structure these proposals so that the extra work is easy to remove.


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

When we win work, we mark it as Won in PipelineDeals. We amend the budget, closing date and services sold if necessary. We write to the client to thank them and ask them for a convenient time to meet and start the work. We create invoices in Xero and save them as drafts, so we don't foget to bill them. And we add the project's sprints and other work to Forecast, so that the team can see who's working on what.


### Losing work

When we lose work, we mark it as Lost in PipelineDeals. We write to the client to thank them for their interest and ask them for any feedback they might have. We usually also say that we'd be happy to talk about any future work they might have. We record the main reason we didn't win the work in PipelineDeals along with the detailed feedback.


## Recruitment

### Basics
We use [Workable](https://dxw.workable.com) for recruitment, to help us stay organised and keep in touch with candidates.

Each candidate moves through a number of stages before being offered a job or declined: a screening interview via skype, two in-person interviews and a work day.

We feel strongly that it's important to be respectful of candidates time and interest in us, and that their attention is valuable. So we do our best to be responsive, human and open. It's particularly important to give unsuccessful candidates good, thorough feedback about why we haven't made them an offer.

### Job descriptions
Before we decide to advertise a new job, we write a job description. This helps us make sure we all agree on what we need, and helps candidates to know if their skills are a good fir for the job. A good job description has three parts:

1. A description of what the person in this job will do
2. A list of their responsibilities
3. A list of the skills, experience and personal qualities they will need to be good at their job

There are lots of job descriptions on the website if you need inspiration. It's important for them to be declarative ("The person with this job will...") and as objective as possible. Throughout the rest of the process, we'll use this document to decide what questions to ask in interviews, and to fix activities for the work day. The skills and personal qualities need to be things that we can have a go at understanding by asking questions and observing a candidate's behaviour.

### How we find people
The first way we find people is through our networks. We look for people we know. Everyone who is willing tweets about the job and shares it on Facebook and other social networks.

The second way we find people is by advertising. We advertise jobs on StackOverflow, Github, WorkInStartups and Unicorn Hunt. Not all jobs go on all of these boards - we pick whatever seems most appropriate for the job.

The third way we find people is by making sure we're regularly blogging about what we're doing, and being open about our culture, work and process. We accept [general applications](https://www.dxw.com/jobs/general-application/) from people who are interested in dxw  but who don't fit an open job.

There's a page on [Zealify](http://www.zealify.com/companies/dxw/) with a video and some other content about what it's like to work at dxw.


### Review applications
All applications arrive via Workable. We review these applications as a team to decide who to take forward.

An application review is a very quick process. We look at the information given by the candidate and decide if it is plausible that the applicant has the skills, experience and personal qualities that we need. If it is plausible, we progress them to the next stage.

### Skype screen
The purpose of the Skype screen is to:

1. Introduce ourselves and explain a little more about the job and life at dxw
2. Talk to the candidate about their experience and explore why they are interested in the job
3. Decide whether you think they are reasonably likely to have the experience and personal qualities that we are looking for

Try to keep the conversation quite high-level, and avoid going into too much technical detail. This part of the process is more about experience and personal qualities than about skills. Things to keep in mind:

* Does this person seem likely to embody our [values](#values)?
* Does this person have experience working in [agile environments](#agile_mindset)
* Would you be comfortable taking this person to a meeting with a client? If not, why not?

If you can find out how they heard about the job, that's useful for us to know. Be prepared for a question about salary, but do not discuss it at this stage. You should also avoid making any commitments during this call. Near the end, explain that we'll be in touch soon. Don't offer an interview there and then: that's something we agree as a team.

### Interviews
Candidates who have a successful skype screen will be offered a first interview. This is an hour long with two members of the team.

Before going to an interview, make sure you have:

* Set aside enough time for the interview. You should leave half an hour each side in case the candidate is early or the interview goes long.
* Read the job description
* Read the candidate's CV
* Read the questions for the interview, and thought about whether they are the right things to ask

dxw interviews are informal. They are a semi-structured conversation, rather than a Q&A. We do not recite the list of questions or keep verbose notes on replies. The questions are there to ensure that you don't forget to cover important ground, and as a prompt when the conversation naturally dries up.

Start with a couple of questions, and then allow the conversation to evolve naturally. Ask questions about things they say, and try to go into more detail on the points that you think will help you to assess their skills, experience and personal qualities. Keep the job descrition in mind: this should always be your frame of reference.

At the end of the interview, always ask the candidate if there's anything they would like to ask you. If they have questions, answer them honestly. If they ask about salary at this stage, or have a concern or question about the job that you don't feel comfortable addressing, tell the candidate we'll get back to them and make a note for an appropriate colleague to call them.

When everything's done, we thank the candidate their time and then return to the office and discuss the interview. As soon as possible, we put a thorough update on Workable. This update should include the good things and bad things about the candidate, a recommendation on whether to take them forward, and an rationale for that recommendation. It is very important that this update is detailed enough for us to understand what happened and why, long after everyone involved has forgotten all about it.

The second interview is exactly the same as the first, but with different members of the team and different questions. Usually, it happens in the first hour of the work day.

### Work day

### Offer and onboarding

### Performance and development

### Compensation

## Operations

### Expenses

### Calendars and documents

### Accounting and legal

#### Cashflow

#### Payroll

#### CCS management information

### Projects and contacts

## Sharing

### Events

[Move this gdoc into here](https://docs.google.com/document/d/1lO4lzUsbNf8KoxvcgJ0O1WKEWmi5wKIb_XFnHufwF_A/edit)

### Blog

### Twitter

### Facebook
