---
title: Support and on call
---
We have agreed service levels for each client we provide support for. Our
standard terms, including prioritisation definitions and response times, are
detailed in our
[Service Level Agreement](https://contracts.dxw.com/service_level_agreement.md).

With our default support plan we manage all code, maintenance, updates, and
uptime monitoring and provide security event monitoring intended to detect and
prevent attacks. Users can also use our helpdesk service to ask for help with
their service as [documented in the main playbook](/#supporting-services).

We provide support for clients and users of these services in three ways:

* Clients can raise a **ticket** with us to fix a problem or make a change to a
  site we support.
* We do proactive **maintenance** for our clients' services, for example by
  applying security updates.
* We have monitoring systems for our services that continually check whether
  they are operating correctly, and whether there are any warning signs of
  problems. When problems are detected they raise an **alert** for the team to
  investigate and resolve.

That support is handled by the team in two ways:

* We provide in-hours (10:00 – 18:00) support for all our clients, resolving
  tickets and alerts and doing maintenance. We call this
  [first line support](#being-on-first-line-support), and it's staffed by a
  developer and an operations engineer
  [on a rota](#support-scheduling-and-the-rota).
* We provide out-of-hours (24/7) support for some of our clients, responding
  only to critical alerts and emergency tickets. We call this
  [on call](#being-on-call), and it's staffed by a developer or an operations
  engineer through a separate opt-in rota, with additional compensation.

Being able to do support effectively requires access to our production systems,
so you won't be added to the support rotas until you've completed your vetting.
You might shadow someone else on support before your vetting is completed.

## Being on first line support

Support tickets come in from clients and users every day. These tickets could
relate to any of the products we currently support. Tickets could be about any
aspect of the service, from a production outage to a typo, or something that
turns out to be a request for more development work from a client.

### Which things are my responsibility when I am on first line support?

While on support, your focus is on monitoring incoming alerts and tickets,
responding to them or delegating to colleagues as appropriate.

#### Alerts

We use monitoring and alerts to notify you when an issue occurs, and provide
[runbooks](https://git.govpress.com/ops/docs) to help you respond to events and
restore service for our clients.

#### Tickets

You're responsible for managing new tickets that come in. That means doing some
initial triage to identify what kind of work is needed, tagging the ticket with
the right project information, and ensuring that SLAs are not being breached.

You'll also be expected to check any existing tickets which have breached (or
will soon breach) their SLA, trying to resolve those effectively.

##### Decide what to work on

People on support are free to work on whichever tickets they are assigned to and
think is most important. But there are some important things to bear in mind:

* Triage

  We all have limited time. We try to spend it wisely. All other things being
  equal, it is better to spend half an hour solving each of four tickets than to
  spend two hours on one issue.
* Priority

  The priority of tickets is important, and we must be biased towards dealing
  with more urgent tickets before less urgent ones. Each ticket's priority
  should be reviewed regularly: whenever we update a ticket, we check the
  priority to make sure it's still right.
* Time since last response

  Our clients expect to be kept in the loop. If a ticket hasn't had any activity
  for a while, it might be a sign that it needs following up on. This might mean
  taking over where another person on support left off.

###### What to do when there are no tickets

Whilst you're on support, you are a member of the dxw Technical Operations team.
When there aren't tickets that need your attention, you should look for ways to
make managing and providing support more effective and efficient. That could
include improving documentation in the runbook for an issue you've worked on or
fixing the root cause of common alerts.

The team might have work ready in a backlog to develop new tooling to help with
managing or providing support, or to automate tasks that happen relatively
often. Beyond this, pairing with other members of the Technical Operations team
is a great way to share knowledge across the technical team as a whole.

##### Replicate the bug

If the issue is a bug, we replicate the behaviour the client has reported before
working on a fix. It's important that we can reliably and repeatably create the
conditions necessary for the bug to arise before we start working on it. If we
don't do this, we can't tell whether we've fixed the problem. If we don't have
enough information to do this, we ask the client to provide it before
continuing.

###### Ensure the client has understood and approved the change

When presented with a problem, clients don't always ask us to do the most
appropriate thing to fix it. Sometimes we can think of a better solution.
Sometimes the change the client asks for has some implication that they haven't
considered.

Our helpdesk service is advisory, so we're not afraid to suggest alternative
approaches and ideas if we have them - including where there's a better
solution, but [at a cost](#charging-for-ticket-work). We give options whenever
we can.

##### Pay attention to scope

Clients can use the support service to ask for help with any aspect of the
service we provide, including help with using the admin panel and advice on
getting the best out of their site. But there are some limitations. Under the
support service, we do not:

* add any new functionality requiring anything beyond extremely trivial
  development or plugin integration
* alter the source code of a plugin or library maintained by a third party
* do things that the client can do for themselves, letting them know how to do
  it themselves instead
* other than by prior arrangement, communicate on the client's behalf with the
  operators of third-party services that the site uses

From time to time, we may make an exception to these restrictions. If you think
that might be appropriate, ask the account manager for the client.

###### Charging for ticket work

If you decide that a ticket asks for work to be done which falls outside the
scope for support, then the work is chargeable. In this situation, we reassign
the ticket to the account manager with an explanation of why the work is
chargeable and a rough idea of how much work the client is asking for.

It is good to try to think of alternative approaches that we could do under our
support service before taking this step - seek advice if you're unsure.

The person you assign the ticket to will then treat it as a [lead](/#sales), and
contact the client to make a plan.

### Impact on your other work

During your week on support, you won't be participating in the sprint for your
current project team. That means that whilst the project will continue as
normal, your work on your current project will pause whilst you're on support.

Support weeks will start on Wednesdays and finish on Tuesdays, so that they fit
into our existing sprint cycle. That enables you and your team to plan around
the half-sprint you'll be on support, and you'll have the context to rejoin your
project for the other half of the sprint.

#### Recruitment

It's important that you're only involved in meetings that you can practically
leave if a support issue arises. That means that you can participate in things
like CV sifting, but you shouldn't be part of interview panels or worksim teams.

#### Sales

As with recruitment, the important thing is that you can practically leave any
meetings if something urgent crops up. That means you can be as involved as you
would usually be in things like writing 100 word responses to sales
opportunities, giving your input to qualification work, or helping put together
proposals and pitch decks, but you shouldn't commit to being part of a pitch
team.

#### dxw time

You can still participate in dxw time work whilst you're on support, but you'll
need to make sure anyone you're working with knows that you might need to stop
working on a project to handle support queries. You might want to choose smaller
things when you're on support, so that you don't end up overcommitted.

### Support scheduling and the rota

In order to support our clients, we ensure there is always a developer dedicated
to working on support, and that the responsibility cycles around every developer
at dxw. [There's a rota](https://github.com/dxw/support-rota) which is set at
least three months in advance, which is also reflected in 10,000ft.

#### Scheduling around client work

Each week, in the regular scheduling meeting, we look at the upcoming schedule
for the rota and look to see if there are any developers not already scheduled
on to client work. If there's a viable change to the rota that will allow us to
continue billing clients for our time, we'll make it.

Any change we make will be made with at least one week of notice. We will update
the rota and send an email to the individuals and teams affected.

If there are multiple developers not on client work, we'll try to spread the
weeks between all of them, but otherwise, some developers may be asked to do
multiple weeks in a row.

If you have a good reason to need a change but are unable to arrange one, then
we'll make sure we can accommodate the change. A good reason might be if you
have a service assessment and the named developer is participating. Having lots
of work on the backlog won't usually be a valid reason. Some notice for changes
like this is important, ideally of at least a couple of weeks.

#### Scheduling around out of office time

The developers affected are encouraged and expected to trade slots in the rota
to accommodate known or planned absences from work.

If you need to change your slot, find a slot in the rota that you are able to
do, and talk to your delivery lead, the person you'll swap with, and their
delivery lead, to ensure that the swap makes sense for both of you and your
projects.

## Being on call

Being on call means you are the first line support for issues that occur out of
hours. This sometimes means getting woken up or handling things at weekends. As
a result, it's optional, and people who spend time on call will be compensated
for the time. Let the Head of Technical Operations know if you'd like to be
added to the on call rota.

While on call, your responsibility is making sure all the services we support
are running correctly and effectively.

As with in-hours support, we use monitoring and alerts to notify you when an
issue occurs via Opsgenie, and provide
[runbooks](https://git.govpress.com/ops/docs) to help you respond to those
issues. The difference to in-hours support is that you'll only be alerted when a
high-severity issue occurs, and you aren't expected to take any action out of
hours unless alerted.

Outside office hours, the expected response depends on the severity of the
incident. We have a set of factors that determine the severity of an incident,
and have included these in our
[Service Level Agreement](https://contracts.dxw.com/service_level_agreement.md).

### On call escalation

While you are on call there is also a second line on call rota formed of senior
members of the technical operations team and the CTO. Opsgenie will alert them
if you do not acknowledge an alert within 5 minutes. This is to make sure that
alerts are dealt with in a timely manner. You should not feel bad about missing
an Opsgenie alert. This is one of the reasons why we have the second line rota.

You can also use Opsgenie to escalate an alert to them if you are unsure what to
do, lack access, or need a hand in general. If it is a major incident you may
want to escalate so that they can deal with client communications. If the person
on the second line rota does not respond feel free to escalate the alert to the
Head of Technical Operations or the CTO to help you. You should also feel free
to contact other members of the team if the incident is serious enough and you
have discussed it with the person you have escalated to.

To escalate to people not on the current rota, create an alert on Opsgenie with
the `Default API` (not the `ops_team api`) and add them as a responder.

### Claiming TOIL for out of hours alerts

If you are alerted out of hours you can claim Time Off in Lieu (TOIL) in
BreatheHR.

* For alerts while you are awake you can claim 0.25 days of TOIL.
* For alerts which wake you up you can claim 0.5 days of TOIL.

If you have to work more than an hour fixing an alert, you can claim extra TOIL
at 0.25 days per hour.

If you receive multiple alerts within an hour of the first one you receive they
do not count as an extra alert for claiming TOIL. For example, if you receive 4
alerts for different issues in the space of 10 minutes you can only claim 0.25
days TOIL and not 1 day of TOIL. If after an hour you receive another alert,
that is when you can claim again.

If you have been woken up by an alert you are not expected to start work at your
normal time. Let your delivery lead or line manager know via a Slack message if
possible.

If you feel that you need a rest from being on call out of hours after a
disrupted night of sleep please talk to the Head of Technical Operations or the
CTO who will find a replacement for that night.