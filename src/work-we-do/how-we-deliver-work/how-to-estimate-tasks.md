---
title: How to estimate tasks
last_reviewed_at: 2025-02-07T00:00:00.000Z
---
### Creating the right environment for estimation

To produce an estimate that the team has confidence in, we need to set ourselves up for success first. That means that each ticket which requires an estimate should have: 

* A [definition of done](https://www.atlassian.com/agile/project-management/definition-of-done) that the team has agreed on
* Where appropriate, a short, defined [user story](https://www.atlassian.com/agile/project-management/user-stories) (“as a *user* I want to *do this thing* so that I can *impact*”) 
* Links to any relevant material including designs and other tickets 
* A team conversation about the ticket to ensure alignment

People will probably have preferred ways of doing this work, but here’s a suggested process:

* Product manager (PM) keeps the backlog prioritised in line with the agreed roadmap - with support from team, for example:

  * User research playbacks
  * Non-functional requirements eg performance, tech debt
  * Bug fixes
  * Estimates - if the estimate on a feature or task is bugger than the PM had thought, that will feed into their prioritisation efforts 
* Tech lead writes the detail in the ticket with support from delivery lead (DL), product manager and others as needed in a backlog refinement session.
* We bring those refined tickets to the sprint planning session and review them with the team for discussions, challenges, questions, etc before estimating them

Your own process may change on different projects based upon the projects and team shape. You should document your estimation process and be clear on everyone’s responsibilities.

**Getting the numbers**

So, now you have your perfectly curated tickets - you understand the assignment. Now you need to actually estimate. Humans are optimistic in their estimates, we always think we can do more in the time we have. What’s your gut instinct for the estimate?

Now, consider what might slow you down: 

* Are there dependencies involved, and who is following up to ensure those dependencies don’t become blockers? 
* Do you have experience with this particular piece of work or is it brand new to you?
* Is this a particularly complex piece of code? 
* If you worked on this part of the project before, did you have to fix any bugs? 
* Is this a ticket for existing code, and if so will refactoring be needed? 
* How will we verify the work is done correctly?
* How fast can we run the automated tests?
* What manual testing will need to be done, and by who?
* How quick is the deployment process to the server? 
* What’s our deployment process - do we release daily or once a sprint or as soon as the code passes review?

The estimate should account for the end to end process - the “cycle time”: from starting the ticket to it being deployed to the live environment (or test environment, depending on the circumstances - some clients will want to review work in the test environment before it gets deployed to a live service). 

By including the time needed for a code review and possible feedback, we’re building a picture of how long we think the task will take to be done, rather than just ready for a review. 

Getting a task ready to the point of code review is not done from the perspective of the user and can give us overly optimistic estimates. Your estimates should be based on the environment you are in - team shape, project requirements, and domain complexity should all factor into your estimate.

**Diagram & key**

*Lead time: The total time it takes from deciding to do a story, to it being released into production*

*Cycle time: The actual time you and others will spend working on a story, up until it being released into production*

*Lead time for changes: The time it takes from merging the change into production to it being in the hands of users*

**Diagram based on this article about measuring software delivery:** <https://medium.com/gits-apps-insight/dora-metrics-how-to-measure-software-delivery-performance-e890ec2011c0#45d7> 

Typically we would like to estimate the "cycle time". This is because we have less control over when something is prioritised into a sprint and ready to be worked on (first part of overall lead time), and also over how long it takes to get a change into production on client systems (lead time for changes).

We are interested in all the different timings for different reasons. Cycle time shows us how complex tasks are and helps prioritise workload, whilst Lead times help predict when users may see changes and help us plan change control.

When coming up with your estimate, make sure you’re comfortable with the level of detail on the ticket and the definition of done. As mentioned above, this helps the person reviewing and ensures that what you’ve written actually fulfils the scope. It also helps to reduce the risk that we build the wrong thing - the code may be perfect but if it isn’t what is expected, it’s wasted work. 

If the estimate for a task is bigger than 2 days, you should consider if it could be broken down into smaller tasks. Generally if a task is estimated to take longer than this, the accuracy of the estimate starts to drop quickly. All tasks however should be broken down smaller wherever possible.