---
title: GovPress support
last_reviewed_at: ""
---

GovPress Support provides day-to-day support for our existing GovPress clients.
Support is co-ordinated by our Account Manager, but issues raised in support
will be resolved by a team of colleagues.

Responding to client needs is the responsibility of the whole team, and so
everyone will touch support work at some point.

The rest of this page describes how GovPress Support is organised, and will be
especially useful to anyone who is working in support for the first time.

## Ticket workflow

![How tickets cascade through support levels (reified as Zendesk views)](/assets/images/govpress/support-flow.svg)

Tickets arrive in Zendesk and are automatically assigned (by customer email
address) to the **GovPress support triage** group. Colleagues in this group will
triage the ticket by adding all available metadata and setting the **Priority**
for the ticket. Colleagues will also ask for any obvious clarifications that we
need from the client. At this point, Support colleagues will make a judgement
about how long the ticket will take to resolve, and re-assign the open ticket to
someone appropriate in the relevant Zendesk group, which are:

- **GovPress 1st line support** for tickets that take less than one hour to resolve.
  This may involve making a change on a client WordPress installation, helping the
  client use an editor, adding or updating a plugin, uploading or downloading
  data, etc.
- **GovPress 2nd line support** for development tasks that take less than 0.5
  days and is clearly defined. This might mean making a small change to the
  styling of a site or its functionality. Tickets in this view should have a
  corresponding Trello card in the
  [Oak Squad board](https://trello.com/b/pF46aRdl/govpress-oak-squad).
- **GovPress scoping and discussion** for development tasks that take more than 0.5 days.
  This work may need to be scoped in more detail and the relevant Delivery and
  Squad Lead should be made aware of it. If a task is very complex, colleagues
  may want to close the ticket (to meet our Zendesk SLAs) and schedule the work
  in the same way we schedule long-term work for new clients. If Spruce Squad is
  especially busy, support work might move into Pine Squad, or be scheduled for
  future sprints. Tickets in this view should have a corresponding Trello card
  in the
  [Spruce Squad board](https://trello.com/b/c060cvdQ/govpress-spruce-delivery-board).

Note that if a task takes longer than expected, colleagues on GovPress 1st or
2nd line support will want to cascade the work down to the next group.
Conversely, if a ticket has to be dropped, it can be returned to the GovPress
Support Triage group to be triaged again.

## Ticket statuses

When you respond to a ticket on Zendesk, there are a number of options for
"submitting" your response. These are ticket statuses. We use ticket statuses
slightly differently than Zendesk intended. This is our current practice:

- **New** tickets have recently been submitted by a client and have not been triaged.
- *Open* tickets have been triaged and GovPress colleagues are currently working
  on them.
- **On-hold** tickets are open, but we cannot work on them because we are blocked.
  The reason for this should be noted in an internal note. Tickets marked
  On-hold have their time-to-SLA-breach value paused.
- **Pending** tickets are waiting on the client for a response. These will
  automatically close after a number of days, which should nudge the client to
  respond if they have forgotten. Tickets marked Pending have their
  time-to-SLA-breach value paused.
- **Solved** tickets have been resolved by us (or automatically marked Solved by
  Zendesk). We typically do not use this status because clients sometimes respond
  with "thank you" which re-opens the ticket, instead please use
  **Pending believed solved**.
- **Pending believed solved** tickets are ones that we have resolved and will
  automatically be marked Solved after 4 days. This is to avoid the problem where
  a client email re-opens a ticket that has been solved.

## Ticket attributes

![A single Zendesk ticket with an SLA applied to it (1) and its type and priority set (2)](/assets/images/govpress/support-Zendesk-ticket-view.png)

Once tickets have been triaged, they should have their **priority** and **type**
attributes set (2 in the screenshot above). Setting the priority of a ticket
will also determine the service level agreement (SLA) which is applied to it (1).
The requester will have been sent
an automated email which will tell them which SLA has been applied to their
request. We aim to meet the SLA for every ticket, so please prioritise tickets
which are closest to breaching their SLA.

## Adding Trello cards to tickets

![ Zendesk Trello integration](/assets/images/govpress/support-Zendesk-Trello-integration.png)

You can automatically create a Trello card for the Oak or Spruce squad boards
from within Zendesk. Click on the "bento box" menu icon labelled **Apps** on the
right of the ticket (1), and fill in the highlighted form (2) to create a new
ticket. Once the ticket has been created, you will see its id appear with the
other ticket attributes (3).

## Preparing to work in Support

### Access to our systems infrastructure

On Support, you are likely to need access to more of our infrastructure than you
would normally use in day to day development work. If you have never worked on
the support rota before, in the
[Oak Squad Trello board](https://trello.com/b/pF46aRdl/govpress-oak-squad),
please make a copy of the card called
[Add a new developer to the support rota (copy me!)](https://trello.com/c/Q5BahEhI/207-add-a-new-developer-to-the-support-rota-copy-me)
to keep track of the work that you (and others) need to do to gain access to all
of our systems, which means you should have completed your staff vetting.

These are the systems you will need access to:

- The Site management vault on 1Password (please raise a Zendesk ticket and
  assign it to the 1st line support group where it will be picked up by
  colleagues from Technical Operations).
- An AWS login for use with `dalmatian-tools` (please raise a Zendesk ticket
  and assign it to the 1st line support group where it will be picked up by
  colleagues in Technical Operations).
- The v1 GovPress infrastructure (follow the docs
  [here](https://git.govpress.com/ops/docs/-/blob/master/create-a-user-data-bag-for-chef.md)
  and raise an MR).
- Our "Helpful" infrastructure (ask someone from Oak Squad to help).
- Basic auth, which we use for access to the GovPress v1 staging sites (follow
  the docs
  [here](https://git.govpress.com/ops/docs/-/blob/master/create-a-user-data-bag-for-chef.md)
  and raise an MR).
- The dxw VPN (follow the docs
  [here](https://git.govpress.com/ops/docs/-/blob/master/create-a-user-data-bag-for-chef.md)
  and raise an MR).
- Papertrail for Dalmatian infrastructure application logs (ask someone in Oak Squad).

The documentation
[here](https://git.govpress.com/ops/docs/-/blob/master/create-a-user-data-bag-for-chef.md)
describes how to actually access a running server or instance. If you need to
find the highest id in the current user data bags, you can run:

```bash
grep uid *.json | cut -d \" -f 4 | sort | tail -1
```

From the `data_bags/users` directory in the [Chef repository](https://git.govpress.com/ops/chef-repo).

### Software to install

Please ensure that you have the following installed before your start your rotation:

* `whippet` – install with: `brew install dxw/tap/whippet`
* `dalmatian-tools`
* `govpress-tools`
* `security-alert-notifier` (doesn’t really get installed, but you might want to
put the main script on your $PATH)

And make sure you have the [`govpress-developer-docs`](https://github.com/dxw/govpress-developer-docs)
repo and [`ops/docs` repo](https://git.govpress.com/ops/docs/) bookmarked, along
with the [Project Knowledgebase on AirTable](https://airtable.com/appNpQYEz4XOan53g/tblne7bw5jfACz2XB/viw13NhyxHHRuBHoH?blocks=hide).

Please also ensure that you have the [incident.io](https://incident.io/) app
installed in Slack, that you can access the [Dashboard](https://app.incident.io/dashboard)
with single-sign-on, and that you have completed the tutorial (type
`/incident tutorial` in Slack to do this).

## Starting a 2nd line support rotation

When you start your rotation, you need to be added to the **GovPress 2nd line support**
group in Zendesk. Please ask someone in Oak Squad, or one of the Delivery Leads
to do this for you, and to remove the last person on the rota, if they are still
in the group.

## During your rotation

Whilst you are working in Support, please attend the Oak Squad stand-ups and join
the [Oak Squad Trello board](https://trello.com/b/pF46aRdl/govpress-oak-squad).
This will help you with context for what is going on in 2nd line support, and
the other work around our infrastructure.

Please join the support channels on Slack, which contain automated notifications
from Zendesk:

- `#dxw-govpress-support-triage` (for tickets that are being triaged)
- `#dxw-govpress-support-1st-line`
- `#dxw-govpress-support-2nd-line`
- `#dxw-govpress-support-scoping`

And these channels which will give you information about our infrastructure and incidents:

- `#dxw-dalmatian` (deploys to Dalmatian sites appear here)
- `#dxw-client-support` (when a production system fails, Opsgenie alerts appear here)
- `#incidents` (any incident raised in the company will appear here)
- `#systems` (alerts from monitoring tools such as updown.io and Icinga appear here)

You are responsible for delivering all the tickets in the
**GovPress 2nd line support** group. If you think that any of these will take
more than around 0.5 days of development work, they should be scoped and moved
into a Squad. In this case, please talk to the Squad Lead and Delivery Lead in
Spruce Squad, in the first instance.

At the start of your rotation, it is a good idea to read through all of the
tickets in the GovPress 2nd line support group and note any particular deadlines
that clients might have. As you go through the day, try to work through tickets
in priority order and look out for any that are close to a breach of our SLAs
(which should be resolved first).

As you look through each ticket, write down any thoughts you have or any progress
you have made as internal notes, which are not seen by clients. This is useful
for other colleagues you may be working with and for anyone who needs to go back
to this ticket for context about the client or project.

Please also regularly check the **Suspended tickets** view in Zendesk, which
sometimes holds tickets for GovPress.

## If you run out of 2nd line tickets to work on

Whilst you are on Support, 2nd line work should keep you busy through the day
and this will be your first priority. Work from your usual squad will be picked
up by other colleagues.

If you run out of tickets to resolve, please ask GovPress 1st line support if
they need help. If you still have nothing to do, please go through the
**Weekly routine** swimlane in the
[Oak Squad Trello board](https://trello.com/b/pF46aRdl/govpress-oak-squad),
which lists the jobs that need completing weekly. Each card there should have a
clear explanation of how the relevant job should be done. If those explanations
aren’t clear, please ask on the
[Oak Squad Slack channel](https://dxw.slack.com/archives/C04AJM8DCRF).

## Ending a 2nd line support rotation

Before you finish your time on Support, please make sure that any unfinished work
you have, or any context you may have is passed on to the next person on the rota.
Please ensure that you:

- Push any incomplete branches to GitHub; and assign the next person on the rota
  (and tell them on Slack).
- Go through all remaining tickers in the **GovPress 2nd line support** group and
  leave internal notes on any tickets that you have investigated, so that the next
  person does not have to repeat your work.
- Reassign any Zendesk tickets that are assigned to you, to the next person on
  the rota.
- Attend the Oak Squad stand-up on the day _after_ your last day, to answer
  any questions the next person on the rota may have.
