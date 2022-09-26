---
title: Getting a project ready for support
---
For some projects, once the primary development phase has wrapped up dxw will
continue to offer support (subject to a support contract). Since we rotate
support staff, things need to be in place to let them effectively respond to
issues.

## Make sure the documentation is up to date

Support developers may not have context on the project, and rely on the
documentation to effectively solve problems. For most projects:

* The `README` file should cover how to download a project, install any
  dependencies, and start a working development instance (if necessary including
  seed data). We recommend using the
  [Scripts To Rule Them All](https://github.com/dxw/scripts-to-rule-them-all)
  pattern to automate this as much as possible.
* As much documentation as possible should be kept in one place, ideally in the
  repository alongside the code. Remember to check that documentation doesn't
  contain any secrets.
* There should be a single 'front line support' runbook which covers common
  support tasks (if necessary linking to other documentation) in as much of a
  step by step process as possible. This may be stand-alone in the repository
  alongside the code (preferred), or in the operations documentation repository.

  * Add the link to this document to the Project Knowledgebase **support
    runbook** field (see below).
* If there is a specific process for on-boarding developers before they can
  support the service (eg creating user accounts, elevating permissions) then
  this should also be kept in a single step by step document.

  * Add a link to this process to the
    [set up person for support](https://trello.com/c/EblCSAdY/57-set-up-person-for-support)
    checklist template, so that new support developers will follow the process.
  * Make sure that existing support developers know there is a new on-boarding
    checklist to follow.

## Add the project to Project Knowledgebase

Our [Project Knowledgebase](https://airtable.com/tblne7bw5jfACz2XB/) is the
starting point for support agents who are new to a project - it displays key
information about the project alongside requests in Zendesk. Each project should
have a row in the Projects table which has been completed.

The basic information needed for each project is its **name**, the **client**
the work is with, the **maintenance status** (if the project is currently
supported or not), and optionally if the project is under a specific **support
package**.

You should also add the **account manager** and any **delivery managers** who
have particular knowledge about the project. Add any **developers** who would be
suitable for second line escalation of issues. You can either reuse an existing
person record (the majority of developers and managers in dxw already have
these), or create a new one.

Complete as many other fields as possible. If you need help or aren't sure what
to add, please ask in Slack.

## Add the project to the operations documentation

Make sure the client has a document in the
[operations documentation](https://git.govpress.com/ops/docs) repository. It
should include either documentation or (preferably) links to documentation for
any on-boarding steps needed, and the front line support runbook.

## Set up monitoring systems

Make sure that enough monitoring systems are in place to raise warnings in case
of outages, errors or service degradation (the exact level of monitoring will
depend on the project and support contract).

### Make sure error reports are raised in Zendesk

If errors are being raised by monitoring they must be delivered to our Zendesk
instance so that the support developer can triage and address them.

You should consider if alerts being raised are actionable by whoever is on
support; if there is nothing that can be done about it then the alert will only
be creating extra noise.