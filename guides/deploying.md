# Deploying

This is a guide to how we deploy changes to code onto different environments.

## WordPress projects on GovPress

This guide goes through the process of deploying to the different environments on GovPress. On GovPress there are two main environments: `testing` and `production`.

This guide assumes that the main working repo is on Github and the repo for deployments is on GovPress. Your local repo should have 2 remotes set up to work with:
- `origin` - the main Github repo
- `govpress` - the GovPress deployment repo

### Deploying to Testing

You can deploy any branch to testing without going through a code review process. Testing is managed from the `stage`  branch on the `origin` repo, but can be overridden at any time for specific testing requirements. 

Deploying from `staging` using [Git ENV](https://github.com/dxw/playbook/blob/master/guides/git-env.md):

	# From your working feature/hotfix branch, stage your changes
	git checkout feature/{id}-{feature}
	git env deploy stage
	# Push the stage branch to Github (origin)
	git push origin stage
	# Push the changes on stage to testing
	# This should trigger chef on the staging server
	git push govpress origin/stage:testing
	# Your changes should now be deployed

To deploy something completely different to what’s currently on `testing` you can force-push your branch to testing. This might be because there’s an urgent fix that needs testing or some work that conflicts with the current stage branch but needs testing anyway.

**NOTE**: Proceed with caution, notify all the developers working on the project and the client to make sure they’re aware this is happening.

	# From your working feature/hotfix
	git checkout feature/{id}-{feature}
	# Push your current branch to the testing branch on govpress
	# This should trigger chef on the staging server
	git push govpress +feature/{id}-{feature}:testing
	# Your changes should now be deployed

### Deploying to Production

Working with Github means that everything we deploy to production now should go through a pull request into the `master` branch on Github.

To create a pull request, make sure your branch is pushed to GitHub:
		
	git push origin feature/{id}-{feature}

When pushed, visit Github. Either locate your branch from the branches list or press the big green “New pull request” button on the repo’s main page, and create the pull request with an appropriate description to the `master` branch.

At this point, the code should be reviewed and signed off by another member of the development team before proceeding. See the playbook for details on [code review and pull requests](https://github.com/dxw/playbook/blob/master/playbook.md#pull-requests-and-code-reviews).

When the pull request has been signed off and merged you need to deploy to production on GovPress.

	# Fetch recent changes
	git fetch
	# Push updated master to govpress production
	# This should trigger chef on the production server
	git push govpress origin/master:production
	# Your changes should now be deployed

## Ruby projects