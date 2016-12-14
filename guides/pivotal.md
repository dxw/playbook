# How we use Pivotal Tracker

## Features and bugs

Features/bugs have the following states:

* Unstarted
* Started
* Finished
* Delivered
* Accepted

## Responsibilities

### Developers

* If a story is unstarted, you may start it on a branch called `feature/[ticketID]-[something-descriptive]`.
* When you believe all the work has been done, create a merge request for your change, add a link to the MR to the story description, deploy the change to staging, and leave a note explaining how to test your change. Then you may click "finished".
* When a story is accepted, deploy it to production and add the "deployed" label.

### DMs

* When a story is finished, review the changes and "deliver" or set to "started" with an explanation.

### Clients

* When a story is delivered, review the changes and click "accept" or "reject" with an explanation if necessary.

## Chores

TODO: ???
