---
title: Dealing with an incident
redirect_from:
  - /guides/dealing-with-an-incident
  - /tech/dealing-with-an-incident
last_reviewed_at: 2025-05-16T17:00:00.000Z
---
## Introduction

This guide defines what an incident is, how we react to them, and how we follow
them up. It's primarily for technical people, but will be useful to anyone
involved in incidents. Anyone can declare an incident, but it is the
responsibility of the on-call support person to deal with an incident.

## Summary

* Identify the problem
* Decide if it’s an incident
* Create an incident channel with /incident
* Appoint an incident lead
* Decide severity - critical, major, or minor (when it doubt, go higher)
* Communicate the problem

  * If critical check that the incident has been announced in #general
  * Appoint a client comms manager if clients are affected
  * Inform the Head of Technical Operations, the Data Protection Officer, and
    the Information Security Manager if there is a security or data breach.
    Contact a director if you cannot reach any of the above
* Understand, contain, resolve, and monitor the incident
* Schedule a review meeting
* Write up a [first draft
  report](/tech/incidents/writing-up-an-incident/#first-draft) and circulate it
* Hold the [review meeting](/tech/incidents/reviewing-an-incident)
* Write up the [final
  report](/tech/incidents/writing-up-an-incident/#final-version)

## What is an incident?

An incident can be any unplanned interruption in or an unexpected reduction in a
service’s quality, security, redundancy or performance.

There is no hard and fast rule about what is and isn’t an incident, but
generally something is an incident if it:

* Affects security or discloses sensitive data
* Causes data loss
* Causes a site to be unavailable
* Impacts front end users for more than a couple of minutes
* Causes a significant departure from expected behaviour

Incidents are usually acute (short and sharp) problems rather than chronic
(long-running) ones. For example known long-term bugs are generally not
incidents.

Incidents for which reporting would be appropriate will include

* A site not responding to requests (from a small number of failures to a
  significant number. I.e. an outage)
* A site is responding to a significant number of requests with an error, e.g. 503
  (although not for expected errors, e.g. 404 for files not expected to exist)
* Supported browsers being presented with errors (e.g. certificate warnings)
* Unauthorised content being made publicly available (e.g. a site defacement)
* Unauthorised exposure of sensitive data. (e.g. user credentials being exposed)
* Any event which triggers a significant warning level on an alerting system

Some things that would be an incident on one site would not be on another. For
example a denial of service (DOS) attack would be an incident if it knocked out
a smaller site, but would not be one if it just increased load times slightly on
a larger site that is attacked regularly.

If you are unsure, then assume it *is* an incident.

### Out of hours alerts

Out of hours is between 18:00 and 10:00, during this time only respond to
critical alerts and emergency tickets. You should treat all such alerts as
incidents, and you should not be afraid to wake up 2nd line support if you need
help.

If the incident is critical or major then you should immediately escalate to 2nd
line support. If it’s something less severe, then you should generally escalate
it if you can’t fix it within 30 minutes, but you can also escalate it sooner if
you think it’s needed.

2nd line support are there to help you, and it is always better to wake them up
when they’re not needed than to not contact them when they are needed. When in
doubt, wake them up.

## Declaring an incident

If you are not a technical person, then your first step should be to inform the
on-call support person whose job it will be to go through this process.

### Identifying the problem

Your first step should be to understand the problem. How best to do that will
depend on the incident, but we mostly run simple websites so the following are
always good steps:

* Is the site or server available? Use
  [Airtable](https://airtable.com/appL5dzrJCzmldhcG/tbllUuMjfRR8Npe61/viwsS1RB8nJZjBekX?blocks=hide)
  to discover the URL
* Check if this alert is a currently known event in ops/docs and read any
  previous guidance
* Find the available tooling for this site/server, see Airtable and the repo
  documentation
* Investigate the issue using available tooling to improve our understanding of
  the impact of this event (looking at logs, metrics etc.)

Once you have identified the problem see if there is an
[Ops Docs](https://github.com/dxw/ops-docs) guide for this error.

### Declaring an incident

If your preliminary investigation suggests that the problem is an incident, then
you should declare an incident. If in doubt, declare an incident. An incident is
not a sign of failure.

We have [incident.io](https://docs.incident.io/creating-your-first-incident)
installed on the dxw Slack for this purpose.

1. Type /incident &lt;name&gt; in any Slack channel, the name should be
   something short but understandable like "example.com errors"
2. Give the incident a description, e.g. "We are seeing a large number of 503
   errors being returned on example.com"
3. Select a severity level (see below)
4. Select which business unit it affected
5. Set an incident lead with `/incident lead me` or `/incident lead @person` –
   The incident lead does not have to be you and may change over the course of a
   response (see below).

### Deciding severity

We have three levels of severity (based on
[those used by GOV.UK](https://insidegovuk.blog.gov.uk/2016/05/11/categorising-incidents-on-gov-uk/)).
To decide which one is most appropriate, we ask three questions:

* What’s the urgency and why?
* What’s the impact on our users and systems?
* What’s the extent of the issue and how many systems and users are affected?

If you’re torn between two categories, opt for the higher one. It’s always
better to escalate an issue than to miss something important. We can easily
deescalate if things turn out to not be as bad as we thought.

You may find that an incident that initially seems minor turns out to be more
severe as you investigate it further.

#### Critical

The most serious kind of incident. This is generally when there’s an outage of
one or more sites during a period when they would be expected to be available,
or a significant security or data breach such as significant privilege
escalation from an unapproved user. Dealing with a critical incident takes
priority over all other work and will continue out of hours until the incident
can be downgraded.

#### Major

When major functionality, such as site search, is broken, or there is a small
security or data breach. For example flaws allowing for significant privilege
escalation from an approved user. This will be dealt with during working hours
above other non-emergency work.

#### Minor

This is the lowest level of incident, but will usually still take priority over
regular work. Generally, we’ll declare a minor incident if minor functionality
or internal tools aren’t working as intended. In terms of software security
risks, this covers security risks that may exist on the server for which we are
not currently vulnerable to.

#### Trivial

For retrospective issues that still need to be treated as incidents, such as a
short (minutes) outage for a site outside what might be considered a time of day
that the site would be relied on being available. This covers events that may
have been retrospectively responsible for availability issues, as well as scans
that seem sufficiently novel or deliberately targeted.

### Assembling a team

An incident should always have an incident lead. The role of the incident lead
is to have an overview of the whole incident, decide what should be done and by
whom, and to manage internal comms. They are responsible for ensuring that the
response process outlined in this document is followed.

The incident lead is not necessarily the person responsible for the
post-incident work. At the end of the incident response, a decision should be
made about who does the investigation and write-up, and organises the review.

The incident lead will generally initially be the person who discovered the
problem, but may change to whoever is best placed to deal with the problem at
any given time. If you are not confident being the lead, you should hand it over
to someone more senior.

Many of our incidents are very small, and don’t need multiple people to address
them. In those cases the incident lead is often just managing themselves.
However, large incidents do need multiple people, and the lead should be
delegating work rather than doing it themselves so that they can focus on
managing the incident as a whole.

If an incident impacts clients, then a client comms manager should also be
appointed. Smaller incidents may not need that.

Both of these positions can be exhausting and if you are at it for a long time
you are likely to make mistakes, so if the incident runs for more than a couple
of hours then new people should step into these roles.

If the incident is critical, then you should let the Head of Technical
Operations (bob) and the Information Security Manager (Neil) know, as well as
our Data Protection Officer (Gurps) if it is a security incident.
If you can’t get hold of these people, post in #general and tell the most senior
people you can find.

## Responding to an incident

When responding to an incident your goals are to:

* **Understand** what is happening
* **Inform** relevant parties (e.g. the client or the ICO)
* **Contain** any breach. Revoke any unauthorised access, remove any
  modifications and identify if any data has been compromised. Preserve data
  that may be required for later investigation or forensics.
* **Restore** normal service by taking action to resolve the problem
* **Monitor** systems to ensure that they continue to operate normally

### Communication

Communication is key during an incident. Use the incident channel to discuss
what you are doing, even if you’re the only one doing it.

Any commands you run and changes you make should be recorded in the channel.
This reduces miscommunication, helps keep track of where we’re at, and ensures
that no one person is an information bottleneck. It also helps us determine
later whether any follow-up work is needed.

After the incident it should be possible to reconstruct what was done based on
the channel logs. It’s much easier to record what you’re doing as you’re doing
it than to try to remember the next day. We also want to learn how we can
improve and prevent incidents in future, and looking at how we respond to
incidents is a key part of that. This is not about being able to blame anyone,
it is about learning.

The incident.io Slack bot will prompt you to provide a summary every 30 mins,
and you can also use it to update the status and log actions
([see bot command reference](https://docs.incident.io/command-reference)).

#### Client communications

*This section is for the client comms manager*

Often we will become aware of an incident because a client has raised a Zendesk
ticket with us, but the incident may also affect other clients.

If you expect to receive a large number of tickets, you should create a parent
ticket to assign all related tickets to. This helps streamline the process of
communicating with clients.

You should put together a list of email addresses for affected clients. This
list may include senior stakeholders as well as our regular contacts, depending
on the severity of the incident. The primary source for this is the customer
lists in [Zendesk](https://dxw.zendesk.com/agent/user_filters/1900001763473).

Client communications should be frequent enough to reassure clients we are
working on the problem. We suggest hourly updates to affected clients whilst the
incident is ongoing.

### Fixing the problem

Once you have an idea of what the issue is, try to determine how to fix it. You
should try to test any fix before applying it to confirm that it works and to
avoid inadvertently making things worse.

If the fix is a change to the codebase, then the normal deploy process (i.e.
passing tests and a PR review) should be followed unless there is a very strong
reason not to do so.

### When to stop

Sometimes it is best to leave the resolution until normal working hours, when
more people will be available to help you.

If an out of hours incident has taken more than two hours, you should stop
unless you feel you are close or it needs urgent resolution. By this point you
should have escalated it to 2nd line support who will be able to help you make
that call.

Some clients are more important than others, depending on their public profile
and the nature of their contract with us. If you are not sure, assume they are
important or ask someone senior.

### Wrapping up

An incident should be considered resolved when you are confident that you have
met all the goals: you understand the problem, have contained it, have restored
normal services, and have monitored to ensure the problem is really fixed.

Most incidents require a follow up in the form of a report and a review meeting.
Trivial incidents and some recurring incidents (such as DDOSing) don’t require
this. If you’re unsure, ask someone more senior.

You should schedule an incident review meeting for about a week later and assign
someone the task of drafting the incident report over the next few days. You
should ensure that this person has enough time to complete a draft in time to
circulate a few days in advance of the incident review.