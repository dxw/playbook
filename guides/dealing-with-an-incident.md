---
Subject: Dealing with a production incident
---
# incident

- incident lead and incident comms
  - roles
  - these can change
  - what they do
- if security or data breach let CTO and Head of Tech Ops know
- if data breach let our DPA officer know.

- treat all OOH alerts as incidents?
- deal with all emergency requests dont worry about what level of support this
  is for the account managers to worry about afterwards
- create a channel using the  incident commad to discuss what you are doing.
  this helps with reconsturcting timelines. (maybe only with long running ones)
  do we  levels (minor/major/critical) minor may not need a report but maybe we
  should anyway to practice
- if you cant fix soemthing within 30 minutes escalate if OOH althogh sooner is
  also fine. 2ndline OOH is there to help
- pulling other people as needed (If you dont feel you can escalate to CTO or
  HoTO) (This is easier during a working day)
- incident lead decides who does what
- people should say they are going to do soemthing before they do.
- commands run which change things should be put in the channel so we can keep
  track of what and
  when . informational commands and thier output is also useful but less
  critical to record (although are a learning experince for people)
- work out what the issue is(we moslty run simple websites so the following are
  always good steps)
  - look at logs (where?)
  - look at metrics (where?)
  - look at rollbar
  - these things for db, load balancer, CDN, application server where
    available. Dalmatian basically focres most of these
  - look at monitoring(where)
  - log onto machine
  - see if there is ops docs guide for this error
- once you have an idea  the issue is try and implement a fix. if it can be
replicated in staging all the better. if it needs a code fix do the normal
deploy stuff.
- fix the issue
- throuhgt these communicate with the client and other stakeholders
  - cleint via zendesk ( especially if  a ticker raised)
  - internally via slack (possigbly #general)
  - every 30 minutes is good

- ooh if it has taken more than 2 hours you  should stop unless you feel you
  are close. Hopefully at 2 hours you have alredy escalted to 2ndline who can
  normallly help you decide how important the cleint is. but it can mostly wait
  till morning.

## after the incident

- create a trello card on incident board
- hold an investigation to  work stuff out for the incident report
- add the timeline to incident report
- come up with an explanation and overview with at least numbers for the
  impact. requests/visits/users ipacted and over what time
- hold an incident review
  - all tech tram should be invited and other interested parties. (for big ones
    the entire company should be invited) if a currently sprinting team al the
    spriont team shoul dbe invited0
  - this should be lead by someone by defualt the incident lead but an outside
    party would be good. see etsy facicialtion guide
  - remind people that this shoudl be blameless and a learning expereince. how
    does this shit actually work
  - go through the time line.
  - explain what we think the current explanation is
  - discuss the incident
    - what went well
    - what went badly
    - dig into the why to understand what really happended
    - discuss the handlign of the incident as well as the issue itself  so we
      can imporeve the incident handling
    - talk about the recommendations
    - pick soem recoommendatios to become actions
- come up with some actions in incdient review
- publish incident review internally and to the affected cleints. Client
  version should be checked for things which make us commerically
  liable/culpable for
  shit but mostly jus tpublishing shoudl be fine.
- add actions to incident actions board
- do actions in a timely manner
- imporve our stuff and process
