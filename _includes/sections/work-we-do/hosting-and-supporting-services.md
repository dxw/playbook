### Hosting and supporting services

#### GovPress

GovPress is dxw's hosting platform which hosts the WordPress websites we build
for the public sector.

We built GovPress because our clients were frequently asking us for secure,
scalable and highly available hosting, but didn't have enough budget to be able
to build an appropriate hosting platform for their service. This is fair enough,
because they shouldn't have to. We built GovPress to meet this need, and it is
now used by most of our clients.

We offer
[managed hosting and support](https://www.digitalmarketplace.service.gov.uk/g-cloud/services/930612236449495)
for WordPress websites, as well as
[blogging](https://www.digitalmarketplace.service.gov.uk/g-cloud/services/355674790119695)
and
[campaigns](https://www.digitalmarketplace.service.gov.uk/g-cloud/services/691308552308120)
platforms, through the G-Cloud framework, configured to our client's branding
requirements, all on our GovPress hosting platform.

You can read more about GovPress at
[www.govpress.com](https://www.govpress.com).

#### Tailored support

We also offer support for services that aren't built in WordPress. We are able
to host and support services with our
[tailored support plan for cloud applications](https://www.digitalmarketplace.service.gov.uk/g-cloud/services/393702576050692),
even if your service isn't hosted with us.

#### Support helpdesk

The dxw Technical Operations team build, manage and run GovPress, as well as
provide first-line support.

We use [Zendesk](https://dxw.zendesk.com) to manage support requests. Any
incidents, requests for us to fix a problem or make a change to a site must come
to us via Zendesk as a ticket. We use tickets to manage requests in order to:

- Keep track of all the things we need to do, and what state they're in, for us
  and our clients
- Have a record of the changes we're asked to make
- Ensure that we only accept change requests from people who are authorised
- Generate data about how much staff time is spent on each client's issues.

If a client asks us to do something in person, on the phone or via email, we ask
them to visit the [dxw Zendesk](https://dxw.zendesk.com/), and submit a ticket
there. This is so that:

- We can keep track of the issue from report to solution, and ensure that it's
  assigned to the right person;
- We don't risk misunderstanding the problem by writing it down based on a
  verbal explanation
- We can formally track the changes that people ask for, by documenting them in
  tickets that we can look at later if we need to

For these reasons, we do not do any work on a client website or service unless
we are working during scheduled development time or on a relevant ticket. We
think this is really important.

##### Support rota

We work on tickets by having a developer on support according to a rota.
Developers are assigned to support for one week at a time and work on tickets
for the whole week. If there is a ticket they need another developer to help
with, this work is scheduled.

#### Client experience (AKA: ticket principles)

##### Be responsive

Clients expect us to deal with their issues promptly. But they understand that
this isn't always possible. They are generally forgiving of the fact that we're
sometimes busy, and they understand that some issues are complex and require
long investigations.

The thing most clients value above all else is being kept informed of what is
going on. The first quality of a good ticket experience is responsiveness: we
keep clients informed of what we're doing, even if there hasn't been much
progress.

##### Stick to your commitments

It's really important that we do what we say we'll do, and don't promise things
we can't deliver. If we're unable to deal with a ticket in good time and leave
an update saying we'll work on it tomorrow, we must meet that commitment.

It is doubly bad to fail to meet a commitment and not say anything about it.
Responsiveness is always the priority. So if for some reason we couldn't do what
we said we'd do, we always respond to say so.

##### Make a good impression

In tickets as in all things, we are mindful of dxw's [values](#our-values).

Most clients' routine contact with us is via support tickets, so it's vital that
our clients' experience of the support system is a good one, and also that they
have a positive experience with us personally.

We are always considerate, and think about what style of response is best. For
example, technical clients may appreciate short, information-dense responses,
while non-technical clients might perceive that style as rude or dismissive.

In general:

- We are personable, friendly and helpful
- If things look like they're going to get difficult or the client seems
  unhappy, we are honest and assume good faith
- If we screw something up, we take responsibility and apologise. If the client
  seems very upset, we let a delivery lead know.
- If we do become annoyed or frustrated by a ticket, we respond later or speak
  to a delivery lead about reassigning it.

##### Don't over-deliver

Of course, every client would like us to go the extra mile to solve their
problem. But they also understand that to do that for them would mean bad
service for another client - or that we never get to their issue, because we're
too busy gold-plating the solution to someone else's.

While we do everything we can to make sure the client is happy with our
solution, we are also mindful of what's practical. We don't do serious bits of
development work on tickets, or trial new approaches. We don't play with new
tools or sink hours into interesting bugs. We set those things aside, and do
them later.

The main purpose of a ticket is to take some action that solves the problem, as
quickly as possible. Generally speaking, we do the most time-efficient thing
that we can. Of several potential solutions that solve the problem, assuming
none is a bad one, we do the one which can be implemented the most quickly.

#### Deciding what to work on

Developers on support are free to work on whichever tickets they are assigned to
and think is most important. But there are some important things to bear in
mind.

##### Triage

We all have limited time. We try to spend it wisely. All other things being
equal, it is better to spend half an hour solving each of four tickets than to
spend two hours on one issue.

##### Priority

The priority of tickets is important, and we must be biased towards dealing with
more urgent tickets before less urgent ones.

Each ticket's priority should be reviewed regularly: whenever we update a
ticket, we check the priority to make sure it's still right.

#### Initial investigation

It's important that we don't make changes unless we thoroughly understand what
we're being asked to do, and are confident that the client understands and has
approved of the implications of the change.

##### Replicate the bug

If the issue is a bug, we replicate the behaviour the client has reported before
working on a fix. It's important that we can reliably and repeatably create the
conditions necessary for the bug to arise before we start working on it. If we
don't do this, we can't tell whether we've fixed the problem.

##### Ensure the client has understood and approved the change

When presented with a problem, clients don't always ask us to do the most
appropriate thing to fix it. Sometimes we can think of a better solution.
Sometimes the change the client asks for has some implication that they haven't
considered.

Our helpdesk service is advisory, so we're not afraid to suggest alternative
approaches and ideas if we have them - including where there's a better
solution, but [at a cost](#charging-for-ticket-work). We always give options
when we can.

#### Scope

Clients can use the support service to ask for help with any aspect of the
service we provide, including help with using the admin panel and advice on
getting the best out of their site.

But there are some limitations. Under the support service, we do not:

- Add any new functionality requiring anything beyond extremely trivial
  development. This does not generally include installing plugins: checking and
  installing plugins is allowed
- Alter the source code of a plugin or library maintained by a third party
- Do things that the client can do for themselves in the WordPress
  administration area. In this situation, help them by letting them know the
  steps to take to achieve whatever they're trying to do.
- Other than by prior arrangement, communicate on the client's behalf with the
  operators of third-party services that the site uses
- Install a plugin that fails an inspection
- Do research to identify plugins to solve a particular problem. It's fine to
  recommend something that we already know of, but in this situation, we usually
  ask the client to do some searches on the WordPress Directory and suggest one,
  which we can then check and install.
- Fix complex problems that come up after a plugin or WordPress core update is
  applied. Exactly what constitutes a complex problem is at our discretion. But
  if we've spent a couple of hours on an update-related bug and it's still not
  fixed, we're probably dealing with one.
- From time to time, we may make an exception to these restrictions. If you
  think that might be appropriate, ask a delivery lead. In all the above cases,
  we can offer to quote for the required work.

#### Charging for ticket work

If you decide that a ticket asks for work to be done which falls outside this
scope, then the work is chargeable. In this situation, we reassign the ticket to
a delivery lead or someone from the client services team with an explanation.

It is good to try to think of alternative approaches that we could do under our
support service before taking this step - seek advice if you're unsure.

The person you assign the ticket to will then treat it as a [lead](#sales), and
contact the client to make a plan.
