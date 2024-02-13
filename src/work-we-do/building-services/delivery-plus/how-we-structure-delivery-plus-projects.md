---
title: How we structure delivery plus projects
related_order: 1
last_reviewed_at: ""
---

At dxw we follow the Government
[Service Manual](https://www.gov.uk/service-manual) and our projects move
through discovery, alpha, beta, live and retirement phases.

One change to our approach is the addition of an **Inception** phase at the
start of a project, before discovery. We think this phase is necessary to set up
a single team with our clients, establish ways of working, and get everyone
behind a shared vision and goals for the project.

At a high level, we believe the purpose of each phase is:

**Inception**: Establish a single, multi-disciplinary team with the client.
Bring everyone together for a kick-off session to agree principles for how we'll
work together. Run a roadmapping workshop to define a set of goals and vision
for the project. The roadmap also clearly defines dependencies and risks, and a
list of things to learn or prove to form the basis of a user research plan.

**Discovery**: Carry out research to define users and understand their needs.
Document findings, user needs and user journeys. Sometimes this phase also
involves conducting technical discovery work to look at different technologies
and solutions that might meet users' needs.

**Alpha**: Translate user needs into prototypes. Test prototypes with users and
iterate them based on feedback. We also use the alpha phase to carry out
technical spikes and experiments, and to make initial technology and service
design decisions.

**Beta**: Build a working version of the service, based on what we learned in
alpha. Carry out regular usability testing of the service with users, and launch
a minimum viable product. Make plans for supporting the service and continue
iterating it.

**Live**: Operate the service, carry out regular user research and continue to
iterate it. If new user needs are identified, we develop the service and launch
new features to meet them.

**Retirement**: Work out how user needs will be met without your service.
Provide help and guidance, archiving, and links to other services. Don't leave
people in the lurch; never let a link die.

We don't always do all these phases for every client. Often, we'll only be
involved in a couple. But we can help with all or any of them, depending on our
clients' needs.

## Development sprints

We break down projects into two-week sprints. Throughout a project we maintain a
product backlog, refine user stories based on what we learn and carry out
development work to meet the user needs that have been identified.

Every project, client and team is different. But, there are some common
approaches we take to all projects.

On the first day of a sprint we facilitate a planning session and finish sprints
with a show and tell and retrospective. These sessions involve the whole team,
including developers, user researchers, designers and delivery leads, as well as
the product owner and other members of the client team.

### Communicate Progress

Every morning a delivery lead facilitates a standup. Standups last 5-10 minutes
and are for the team to discuss what they're working on that day and whether
there are any problems or dependencies affecting them. If the team is not
co-located with a client, standups happen over a video-call.

During the sprints a delivery lead will share a week note, usually on a Friday,
with everyone involved or interested in the project. The note will include a
brief summary of what the team have done that week, what is planned for the
following week and highlight blockers, dependencies or things the team is
thinking about too.

At the end of each sprint the team run a show and tell. This is an opportunity
for the team to show the work they have done on that sprint and allows people
involved in the project to see what has been achieved. We work in an open and
transparent way so encourage anyone interested in the project to attend the show
and tell and ask questions.

### Plan

Sprints begin with a planning session, where the whole team (dxw and the client)
review and prioritise the stories in the backlog. Working together, we discuss
the stories that we are prioritising for the current sprint, ensuring that they
are well-formed and understood by everyone in the team.

Often this involves writing new stories and updating existing ones, but we try
to avoid this becoming the main purpose of the meeting. In our experience,
sprint planning is much more useful when the stories are written in advance.

During this session, developers discuss the effort required to finish each
story. We discuss effort so we know whether we have a reasonable amount of
stories to work on and we’re confident as a team that we can get through the
stories in the backlog. Sometimes we will estimate stories. We do this based on
complexity, not the time we think it will take to finish it.

Once estimated, stories are prioritised by the client and put into the backlog
for the sprint. Developers also advise the rest of the team at this point if
there are any technical dependencies the client should be aware of. By the end
of the session, the full team should be confident about the goal of the sprint
and what is going to be worked on.

### Inspect and adapt our work

At the end of every sprint, a delivery lead facilitates a retrospective where
the team discuss how the sprint went. We talk about what went well, what didn't,
and what we can do to improve how we work for the next sprint. These sessions
are attended by all the people involved in delivering the sprint along with the
client team. We use retros to make sure we acknowledge and continue to do the
things that are working well, and also commit to change anything that can be
improved.

### Focus on user needs

At regular intervals the team look through the sprint backlog to re-prioritise
and update stories, based on things we've learned during delivery and from user
research. Stories that are no longer needed are deleted, stories that may be
needed later or are blocked are put on hold (we call this the icebox) and all
other stories are re-prioritised for future sprints.

We have regular user research playback sessions to ensure the whole team is
involved in understanding user needs, feedback from user testing and what
iterations means for the users.

### User stories

We document development work that needs to be completed by writing
[user stories](https://www.gov.uk/service-manual/agile/writing-user-stories).

A user story is a succinct explanation of some work that will be done in order
to meet the needs of a particular kind of user. They are usually structured into
a sentence, of the form:

> As a \[kind of user], so that I can \[meet a need], I want \[a feature in the
> product]

Breaking everything down into user stories allows us to be confident that
everything we develop is meeting
[user needs](https://www.gov.uk/service-manual/user-centred-design/user-needs).
By using this story format, we directly associate a feature or piece of
functionality we're building with the group of users who want it and the needs
that they have.

We keep lists of stories in Trello. We use user needs to create the title of a
story, by rearranging it to reflect the new state of the system after the work
is complete. For example:

> As an administrator, so that I can ensure I don't publish defamatory comments,
> I want to be able to review and approve comments before they are shown.

Might have a title of:

> Administrators can review and approve comments before they are shown

Each user story will also contain a list of acceptance criteria. Acceptance
criteria are a collection of statements about the functionality of the service
which must be true in order for the story to be considered "done".

For more information about writing good stories, we recommend reading User
Stories Applied by Mike Cohn. There is a copy of this book in the dxw library.

### Lifecycle of a story

<!-- TODO: This section should be an explanation of what happens to a story as
it is worked on, focussing on "why" rather than "how" and explaining the
philosophy. -->

There are several states that a story has to go through in order to be deployed
to production. We use Trello and physical story boards to keep track of which
stage a given story is in.

- **In progress**: A developer has started working on the story, making changes
  to the product to ensure that each acceptance criterion is met
- **Awaiting review**: The developer has finished the story and is ready for a
  second developer to review the technical aspects of the story in a pull
  request
- **Code review**: The story is being reviewed by the second developer who
  leaves feedback if the pull request is not ready to be merged and needs
  further work
- **dxw/client review**: The two developers have finished the review and the
  story has been merged and pushed to staging. It is ready for a delivery lead
  and the client to review against its acceptance criteria
- **Accepted**: The client has accepted the story and it's ready to deploy to
  production
- **Done**: The story has been deployed to production

## Managing delivery

> "The delivery manager sets the team up for successful delivery. They remove
> obstacles, or blockers to progress, constantly helping the team become more
> self organising. They enable the work a team does rather than impose how it’s
> done."
> --<cite>[Government Digital Service](https://www.gov.uk/service-manual/the-team/delivery-manager)</cite>

At dxw, delivery leads ensure that sprints go smoothly and that the team remain
productive. They are generally the client's first and main point of contact, and
are responsible for ensuring that we deliver good work.

Throughout a sprint, delivery leads ensure that an agreed process is followed,
organising and facilitating discussions as required. They run sprint planning
and retrospective sessions. They run daily standups with the dxw and client
teams to keep everyone informed and to discuss and resolve any blockers.

Outside of these sessions and standups, they maintain regular communication with
the client and the delivery team to respond quickly to challenges as they arise.
If priorities change during a sprint, the delivery lead works with the client to
understand and plan for the impact of the change.
