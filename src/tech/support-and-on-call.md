---
title: Support and on call
redirect_from:
  - /guides/support-and-on-call
last_reviewed_at: ""
---
We have agreed service levels for each client we provide support for. Our standard terms, including prioritisation definitions and response times, are detailed in our Service Level Agreement.

With our default support plan we manage all code, maintenance, updates, and uptime monitoring and provide security event monitoring intended to detect and prevent attacks. Users can also use our helpdesk service to ask for help with their service as outlined in [providing technical support](/work-we-do/providing-techical-support/).

We provide support for clients and users of these services in three ways:

* clients can raise a ticket with us to fix a problem or make a change to a site we support.
* we do proactive maintenance for our clients’ services, for example by applying security updates.
* we have monitoring systems for our services that continually check whether they are operating correctly, and whether there are any warning signs of problems
* when problems are detected they raise an alert for the team to investigate and resolve

That support is handled by the team in 2 ways. We provide:

* in-hours (10:00 – 18:00) support for all our clients, resolving tickets and alerts and doing maintenance. This is staffed by dedicated support developers, with assistance from the Ops team.
* out-of-hours (24/7) support for some of our clients, responding only to critical alerts and emergency tickets. We call this on call, and it’s staffed by a developer or an operations engineer through a separate opt-in rota, with additional compensation.

Being able to do support effectively requires access to our production systems, so you won’t be added to the support rotas until you’ve completed your vetting. You might shadow someone else on support before your vetting is finished.

## Being on call

Being on call means you are the first line support for issues that occur out of hours. This sometimes means getting woken up or handling things at weekends. As a result, it’s optional, and people who spend time on call will be compensated for their time. Let the Head of Technical Operations know if you’d like to be added to the on call rota.

While on call, your responsibility is making sure all the services we support are running correctly and effectively.

As with in-hours support, we use monitoring and alerts to notify you when an issue occurs via Opsgenie, and provide [runbooks](https://github.com/ops-docs) to help you respond to those issues. The difference to in-hours support is that you’ll only be alerted when a high-severity issue occurs, and you aren’t expected to take any action out of hours unless alerted.

Outside office hours, the expected response depends on the severity of the incident. We have a set of factors that determine the severity of an incident, and have included these in our [Service Level Agreement](https://contracts.dxw.com/service_level_agreement.md).

## On call escalation

While you are on call there is also a second line on call rota formed of senior members of the technical operations team. Opsgenie will alert them if you do not acknowledge an alert within 5 minutes. This is to make sure that alerts are dealt with in a timely manner. You should not feel bad about missing an Opsgenie alert. This is one of the reasons why we have the second line rota.

You can also use Opsgenie to escalate an alert to them if you are unsure what to do, lack access, or need a hand in general. If it’s a major incident you may want to escalate so that they can deal with client communications. If the person on the second line rota does not respond feel free to escalate the alert to the Head of Technical Operations or the Technical Director to help you. You should also feel free to contact other members of the team if the incident is serious enough and you have discussed it with the person you have escalated to.

To escalate to people not on the current rota, create an alert on Opsgenie with the Default API (not the ops_team api) and add them as a responder.

## Claiming TOIL for out of hours alerts

If you are alerted out of hours you can claim Time Off in Lieu (TOIL) in BreatheHR. For alerts:

* while you are awake you can claim 0.25 days/1.75 hours of TOIL
* which wake you up you can claim 0.5 days/3.5 hours of TOIL

If you have to work more than an hour fixing an alert, you can claim extra TOIL at 0.25 days per hour.

If you receive multiple alerts within an hour of the first one you receive they do not count as an extra alert for claiming TOIL. For example, if you receive 4 alerts for different issues in the space of 10 minutes you can only claim 0.25 days TOIL and not 1 day of TOIL. If after an hour you receive another alert, that is when you can claim again.

If you have been woken up by an alert you are not expected to start work at your normal time. Let your delivery lead or line manager know via a Slack message if possible.

If you feel that you need a rest from being on call out of hours after a disrupted night of sleep please talk to the Head of Technical Operations or the Technical Director who will find a replacement for that night.
