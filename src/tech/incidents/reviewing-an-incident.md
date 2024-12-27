---
title: Reviewing an incident
last_reviewed_at: ""
---
# Reviewing an incident

*This section is for the incident review facilitator, who should not normally
have been involved in the incident response*

A few days after an incident, we hold an incident review meeting. These are
usually 1.5-2 hours long depending on the complexity of the incident.

### Purpose

The primary goal of the review is learning. We want everyone involved to get a
full understanding of what happened and the thinking behind how we responded.

Crucially, the review is not about blame. When reviewing incidents we follow the
‘[prime directive](https://retrospectivewiki.org/index.php?title=The_Prime_Directive)’:
*“Regardless of what we discover, we understand and truly believe that everyone
did the best job they could, given what they knew at the time, their skills and
abilities, the resources available, and the situation at hand.”*

We don’t know enough about our system, which is why something went wrong. For
the review to be effective it should be a blameless learning experience. We want
to learn about the process of the incident and its handling as well as the
technical issues.

### Attendance

The discussion should include the people who responded to the incident, a
delivery manager (if there was a client impact, preferably for the relevant
client) and any other staff who have an interest:

* People involved in the incident must attend
* People involved with the client should attend
* Available members of the tech team should attend
* Other members of the company can attend

If there is ongoing work with the client (i.e. an active sprint) then the sprint
team (including the client’s staff) should attend.

If the incident was a major incident, the review should include a senior member
of staff not involved in the initial response (a head of something).

Bear in mind that when the audience is large or includes outside parties, people
may feel less comfortable speaking up, so you should provide a means for people
to raise comments outside of the meeting too.

### Facilitation

The meeting should, wherever possible, be facilitated by someone who was not
involved in the incident. There should also be a separate dedicated note-taker
so that the facilitator can focus on facilitation.

As the facilitator your job is to lead the meeting, picking the key topics of
discussion, moderating the conversation to ensure that everyone involved feels
safe sharing their story, and checking that everything gets covered. It is
recommended that you read through the
[Structure and Preparation section of Etsy’s guide](https://github.com/etsy/DebriefingFacilitationGuide/blob/master/guide/04-structure-and-preparation.md).

Don’t go through the timeline line by line because this is not a good use of
time. Everyone should have seen the timeline in advance and made any necessary
comments on it. Instead you should focus on the interesting communication
patterns, decision points, observations, and actions that require a deeper dive,
using the timeline as a prompt.

The key idea is that when somebody says “X happened” you take the opportunity to
ask questions that provide context for X. Not everyone in the discussion will
come to the meeting knowing that context, so it’s important not to skip over
details as you walk through the timeline.

The review should focus on the *how* rather than the *why*. ‘How did the
attacker gain access to the database?’ is more useful to us than ‘why was the
attacker able to access the database?’, and shifts the conversation away from
blame and towards learning. See
[The Art of Asking Questions in Etsy’s guide](https://github.com/etsy/DebriefingFacilitationGuide/blob/master/guide/05-the-art-of-asking-questions.md).

People may not be expecting this approach, or may be new to incident reviews, so
clearly set out the focus of the meeting at the start.

Some key questions:

* What happened?

  * What made us declare an incident? What triggered this?
  * How did we respond?
  * What were the key decision points?
  * How did we make those decisions?
* Have we taken all the restorative actions that we need to take?
* Do we have a plan for communicating with the client/s?
* How can we do better at responding to incidents?

  * How could our processes be improved?
  * How could our documentation be improved?
* How could we prevent this kind of incident from happening again?

It is easy to focus on the ‘how could we prevent this kind of incident from
happening again?’ part of the discussion and get thinking about preventative
actions. This is not the focus of an incident review. If there are major flaws
in our setup then we should address these, but many incidents are a result of
circumstances that are unlikely to reoccur, and our time would be better spent
ensuring that we can respond effectively to all kinds of incidents. Wider
discussion points like ‘should we develop a process for auditing package
updates?’ should be held for a tech team forum.

### Notes

Notes should be taken, and it should also be recorded. These files should go in
the incident folder.

### Actions

Coming up with actions is not the goal of the review, but it’s likely that some
will be suggested. Try to hold off on discussing them until after you’ve been
through everything else so that they don’t end up taking you down a rabbit hole.

Sometimes all the necessary actions will have been taken during the incident, so
don’t feel obliged to come up with some actions. Equally you may find that there
are many follow-up actions. In that case, try to narrow this down to about three
so that they actually get done.

Any actions should be added to the  follow up actions of the Incident in
incident.io and given an owner. The owner should add the action to any relevant
trello board and ensure the work is done in a timely manner. If the action has
impact on the ISMS it should be added to the Findings tracker and ISMS trello
board as well.
