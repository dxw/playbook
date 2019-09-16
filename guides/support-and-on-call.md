# Support and on call

We have service definitions for [GovPress hosting], [container hosting] and
secure WordPress hosting for our [blogging platform] and [campaign multisites]
through G-Cloud.

We have agreed service levels for each client we provide support for. Our
standard terms, including prioritisation definitions and response times, are
detailed in our [Service Level Agreement].

With our default support plan we will manage all code, maintenance, updates and
uptime monitoring and provide security event monitoring intended to detect and
prevent attacks. Users can also use our helpdesk service for help with any
aspect of their site.

Our Managed Plus plan is for clients with higher assurance requirements. It
includes all the fully-managed features of our default support plan, plus a
quarterly site review meeting, a named delivery manager and an enhanced SLA
with faster response targets.

We provide support for clients and users of these services in three ways:

* Clients and users of these services can raise a **ticket** with us about
  usability issues, errors or faults. Sometimes what they’re asking for is a
  larger feature request, which needs separate handling.
* We do proactive **maintenance** for our client’s sites and services, for
  example by applying security updates.
* We have monitoring systems for our services that continually check whether
  they are operating correctly, and whether there are any warning signs of
  problems. When problems are detected they raise an **alert** for the team to
  investigate and resolve.

That support is handled by the team in two ways:

* We provide in-hours (10.00–18.00) support for all our clients, resolving
  tickets and alerts and doing maintenance. We call this **first line
  support**, and it’s staffed by a developer and an ops engineer on rota.
* We provide out-of-hours (24/7) support for some of our clients, responding
  only to critical alerts and emergency tickets. We call this **on call**, and
  it’s staffed by a developer or an ops engineer through an opt-in rota.

## Being on first line support

Support tickets come in from clients and users every day. These tickets could
relate to any of the products we currently support, which are a mixture of
Rails apps and WordPress implementations, spread across clients all over the
public sector, including central government.

Tickets could be about any aspect of the service, from a production outage to a
typo, or something that turns out to be a request for more development work
from a client.

In order to make sure all tickets are effectively dealt with, a dedicated
person will work on first line support for a week at a time, inside office
hours.

There are lots of details about [our approach to first line support in the
playbook](https://playbook.dxw.com/#/?id=tickets).

### Which things are my responsibility when I am on first line support?

While on support, your focus is on monitoring incoming alerts and tickets,
responding to them or delegating to colleagues as appropriate.

#### Alerts

We use monitoring and alerts to notify you when an issue occurs, and provide
[run-books] to help you respond to events and restore service for our clients.

#### Tickets

You’re responsible for managing new tickets that come in. That means doing some
initial triage to identify what kind of work is needed, tag the ticket with the
right project information, and ensure that SLAs are not being breached.

You’ll also be expected to check any existing tickets which have breached (or
will soon breach) their SLA, trying to resolve those effectively.

### I’m on support and there aren’t any tickets to deal with – what should I do?

Whilst you’re on support, you are a member of the dxw Technical Operations
team. When there aren’t tickets that need your attention, you should look for
ways to make managing and providing support more effective and efficient. That
could include improving documentation in the runbook for an issue you’ve worked
on or fixing the root cause of common alerts.

The team might have work ready in a backlog to develop new tooling to help with
managing or providing support, or to automate tasks that happen relatively
often. Beyond this, pairing with other members of the Technical Operations team
is a great way to share knowledge across the technical team as a whole.

### What impact does it have on the things I’d usually be working on and participating in?

During your week on support, you won’t be participating in the sprint for your
current project team. That means that whilst the project will continue as
normal, your work on your current project will pause whilst you’re on support.

Support weeks will start on Wednesdays and finish on Tuesdays, so that they fit
into our existing sprint cycle. That enables you and your team to plan around
the half-sprint you’ll be on support, and you’ll have the context to rejoin
your project for the other half of the sprint.

There’s a separate [guide for project teams who have a member on first line
support](https://docs.google.com/document/d/1WocWXmy0I0ew8CuYP1d1E3ySYntJnuMkT10vvBhiBf0/edit?usp=sharing).

#### Recruitment

It’s important that you’re only involved in meetings that you can practically
leave if a support issue arises. That means that you can continue to
participate in things like CV sifting, but you shouldn’t be part of interview
panels or worksim teams.

#### Sales

As with recruitment, the important thing is that you can practically leave any
meetings if something urgent crops up. That means you can be as involved as you
would usually be in things like writing 100 word responses to sales
opportunities, giving your input to qualification work, or helping put together
proposals and pitch decks, but you shouldn’t commit to being part of a pitch
team.

#### Fridays

You can still participate in Friday work whilst you’re on support, but you’ll
need to make sure anyone you’re working with knows that you might need to stop
working on a Friday project to handle support queries. You might want to choose
smaller things to do on a Friday when you’re on support, so that you don’t end
up overcommitted.

## Being on call

On call includes out of hours, and sometimes means getting woken up and
handling things at weekends. As a result, it’s optional, and people who spend
time on call will be compensated for the time.

While on call, your responsibility is making sure all the services we support
are running correctly and effectively.

As with in-hours support, we use monitoring and alerts to notify you an issue
occurs and provide [run-books] to help you respond. The difference to in-hours
support is that you’ll only be alerted when [a high-severity
issue](https://docs.google.com/document/d/1Y_uhCQEKyyFyDI_oM-FhAf4LyvFIziTfOtwPfi8LqOs/edit)
occurs, and you aren’t expected to take action out of hours unless alerted.

Outside office hours, the expected response depends on the severity of the
incident. We have a set of factors that determine the severity of an incident,
and have included these in our [Service Level Agreement].

[GovPress hosting]: https://www.digitalmarketplace.service.gov.uk/g-cloud/services/930612236449495
[container hosting]: https://www.digitalmarketplace.service.gov.uk/g-cloud/services/754953588860938
[blogging platform]: https://www.digitalmarketplace.service.gov.uk/g-cloud/services/355674790119695
[campaign multisites]: https://www.digitalmarketplace.service.gov.uk/g-cloud/services/691308552308120
[Service Level Agreement]: https://contracts.dxw.com/service_level_agreement.md.html
[run-books]: https://git.govpress.com/ops/docs
