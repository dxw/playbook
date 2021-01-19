---
title: GovPress plugin Advisories
---

## Workflow

We'll normally create an advisory as a result of a plugin inspection where we
were able to quickly prove that the plugin is vulnerable. We may also do so as a
result of issues found in a pen test.

The steps for progressing an Advisory are:

1. Check for existing advisories
1. Write up an advisory
1. Report the advisory to the plugin author
1. Notify the WordPress plugin admins (only in special circumstances)
1. (at a later date) Publish the advisory
1. Request a CVE

The progress of advisories inspections is tracked alongside inspections using
the
[inspections Trello board](https://trello.com/b/sN42avTZ/dxwsec-inspections-and-advisories)

## Check for existing advisories

Pluginscan includes a report on vulnerabilities, based on the API exposed by the
[WPScan Vulnerability Database](https://wpvulndb.com/)

It's important that we avoid publishing advisories that have already been
reported by someone else.

## Writing up Advisories

### Naming the advisory

Titles should be in the following format:

> [Vulnerability Type] in [Plugin Name] allows [User Type] to [Do Bad Things]

- XSS should always say whether it’s stored or reflected

Here are some Harry-approved examples:

- Arbitrary Code Execution in NextGEN Gallery allows privileged users to run php
- CSRF and stored XSS in WordPress Content Slide allow an attacker to have full
  admin privileges

### CSRF/XSS:

Title:

Reflected XSS in [plugin name] allows an unauthenticated attacker to do almost
anything an admin can

Description:

> An attacker able to convince an admin to visit a link of their choosing is
> able to execute arbitrary JavaScript
>
> …the attacker can then use JavaScript to perform almost any action an admin
> can take (including creating new users, executing arbitrary php through the
> theme editor or exploiting vulnerabilities in WordPress or other plugins which
> normally require the user to be authenticated as an admin).”

or maybe:

> If an attacker is able to convince a logged-in admin user to follow a link
> (phishing emails can be made to look very convincing), then …

Proof of concept:

> If a logged-in administrator user clicks the submit button on this form, a
> JavaScript alert will display on \{\{A SPECIFIC PAGE\}\} (In a real attack the
> form can be made to auto-submit using JavaScript).”

### Unserialize

Title:

Unserialize vulnerability in [plugin name] allows an attacker to run code on the
server

Description:

If there are classes with methods like `__destruct()` that have certain
properties, the attacker can …

### Mitigations

- Disable the plugin until a new version is released that fixes this bug

### CVSS Scores

- Need to be considered in isolation: e.g. if it’s merely an enabler of other
  bad stuff then only consider the impact on e.g. integrity
- CSRF/XSS vulns (i.e. get a logged-in admin to click a link) are Access
  Complexity: medium.

## Reporting an advisory

In order to publish advisories responsibly there are a number of steps which
must be followed:

- [ ] Ensure you're happy with the text of the findings and the title (see
      previous sections)
- [ ] Ensure that the mitigations section says something like 'Disable the
      plugin until a new version is released that fixes this bug'
- [ ] Ensure that the 'Timeline' section includes the date that the
      vulnerability was discovered
- [ ] Publish the advisory privately (Publish > Visibility > Edit) - Make sure
      it doesn't get tweeted!
- [ ] Publish the associated inspection privately in the same way

Note:

- The format of timeline entries should be `YYYY-MM-DD: Message`, e.g.
  `2013-08-09: Discovered`

### Notify the plugin Author

Note:

In extreme cases where the advisory will have a significant impact we may need
to request an encrypted email connection for these communications. In all other
cases, normal email is fine.

- [ ] On the (privately) published page, under "Text version for reports" click
      the "Click for a blank email with the right subject" link
- [ ] Copy the email text from "Text version for reports"
- [ ] Find contact details for the plugin author
- [ ] Add a humanising intro and send to the plugin author
- [ ] Add a note to the timeline, mentioning the method - e.g. 2014-01-02:
      Reported to vendor by email
- [ ] At the bottom of the page, set the status to "Reported"

As an example of a humanising intro:

> Hello We’ve found a security vulnerability in Version 2.8.2 of the Advanced
> Access Manager plugin – please see the details below. After you’ve had a
> chance to investigate could you please let us know a timeline for a fix – our
> disclosure policy is linked at the bottom of the report. Best regards Duncan

## Notify the WordPress plugin admins

There are two scenarios in which the WordPress plugin admins
(plugins@wordpress.org) should be contacted:

1. If we really couldn’t get in touch with the plugin dev
1. If the vulnerability is really serious and the plugin is popular (say over
   100,000 downloads), so needs to be taken down ASAP

Their policy is this:

> Every attempt to contact the developer directly should be made BEFORE you
> reported the plugin to us. Since our policy is to close the plugin (preventing
> new downloads) until it’s fixed, you may not be alerted until the plugin is
> updated.

- [ ] Hit the "WP Plugins" button under "Report emails"
- [ ] Add a note to the timeline - e.g. 2014-01-02: Reported to WP Plugins

### ⚠️ IMPORTANT ⚠️

If we couldn’t get in touch with the plugin author then WP Org may be able to
contact them on our behalf, BUT we shouldn’t expect them to feed back any
information to us, or even to confirm that they have successfully contacted the
author (they are insanely busy).

Therefore we shouldn’t say things like “No response from WP Org” (because we
shouldn’t expect one) or “No response from author to WP Org” (because we don’t
know that’s the case).

## Publishing an Advisory

There are two reasons that we will publish an advisory:

- The plugin author lets us know that they’ve fixed the issue and released a fix
- We couldn’t contact the plugin author, or they didn’t respond within the time
  period defined in our
  [disclosure policy](https://security.dxw.com/disclosure/)

If an author has at any point been in touch and shown willingness to cooperate
then we should give them the benefit of the doubt and make several attempts to
get in touch.

### Preparing advisories for publication

If the issue is fixed:

- [ ] Ensure that there's a note in the timeline of when the vendor first
      replied.
- [ ] Update the timeline as appropriate, e.g. 2014-01-02: Vendor reported issue
      fixed in version 1.2.3
- [ ] Update the timeline as appropriate, e.g. 2014-01-05: Advisory published
- [ ] Mark the advisory from 'Reported' to 'Fixed'
- [ ] Update the 'mitigation' section to say 'Upgrade to version X or later'

If the issue is NOT fixed:

- [ ] Update the timeline as appropriate, e.g. 2014-01-02: Vendor could not be
      contacted
- [ ] Update the timeline as appropriate, e.g. 2014-01-05: Published
- [ ] Leave the status as 'Reported'
- [ ] Update the 'mitigation' section to say 'Disable: the plugin has been
      removed from the plugins directory and no fixed version is known.'

If the plugin was removed from the directory:

- [ ] Update the timeline as appropriate, e.g. 2014-01-02: Plugin has been
      removed from the WordPress directory
- [ ] Update the timeline as appropriate, e.g. 2014-01-05: Published
- [ ] Leave the status as 'Reported'
- [ ] Update the 'mitigation' section to say 'Disable: no fixed version is
      known.'

### Publishing the advisory and associated inspection

- [ ] Set the Tweet status to 'Tweet'
- [ ] Amend the published date to today (otherwise it will show with the
      privately published date)
- [ ] Publish the advisory
- [ ] While logged in, view the published advisory and hit the Full Disclosure,
      WP Scan and dxw WP Security buttons

Once the advisory has been published the associated inspection can also be
published:

- [ ] Add a link to the advisory
- [ ] Set the Tweet status to 'Do not tweet'
- [ ] Amend the published date to today (otherwise it will show with the
      privately published date)
- [ ] Publish the inspection

Once it's published we can alert upstream:

- [ ] Email the developer:
  - thank them for the fix
  - include a link to the advisory
  - suggest that they add the link to the changelog

### Request a CVE

Note that most CVEs cannot be requested before publication due to the rules of
the Distributed Weakness Filing project. Vulnerabilities in plugins made by
WordPress itself follow different rules as they're covered by MITRE.

- [ ] Visit [https://iwantacve.org](https://iwantacve.org) and fill out the form
- [ ] Add a note to the timeline - e.g. 2014-01-02: Requested CVE
