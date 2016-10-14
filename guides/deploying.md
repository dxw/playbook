# Deploying

This is a guide to how we deploy changes to code onto different environments.

## WordPress projects on GovPress

This guide goes through the process of deploying to the different environments on GovPress. On GovPress there are two main environments: `develop` and `master`.

This guide assumes that the main working repo is on Govpress GitLab for deployments. Your local repo should have it's remote set up to work with:
- `origin git@git.govpress.com:project/app` - the Govpress GitLab repo

### Deploying to Staging

You can deploy any branch to Staging without going through a code review process. Staging is managed from the `develop` branch, but can be overridden at any time for specific testing requirements. 

Deploying from `develop` using [Git ENV](https://github.com/dxw/playbook/blob/master/guides/git-env.md):

	# From your working feature/hotfix branch, stage your changes
	git checkout feature/{id}-{feature}
	git env deploy develop
	# Push the develop branch to Govpress GitLab (origin)
	# This should trigger chef on the staging server
	git push origin develop
	# Your changes should now be deployed

To deploy something completely different to what’s currently on Staging you can force-push your branch to `develop`. This might be because there’s an urgent fix that needs testing or some work that conflicts with the current stage branch but needs testing anyway.

**NOTE**: Proceed with caution, notify all the developers working on the project and the client to make sure they’re aware this is happening.

	# From your working feature/hotfix
	git checkout feature/{id}-{feature}
	# Push your current branch to the testing branch on govpress
	# This should trigger chef on the staging server
	git push govpress +feature/{id}-{feature}:develop
	# Your changes should now be deployed

### Deploying to Production

Working with GitLab means that everything we deploy to production now should go through a merge request into the `master` branch on GitLab.

To create a pull request, make sure your branch is pushed to GitHub:
		
	git push origin feature/{id}-{feature}

When pushed, visit GitLab, locate your branch from the branches list and press the “Merge Request” button. Create the merge request with an appropriate description to the `master` branch.

At this point, the code should be reviewed and signed off by another member of the development team before proceeding. See the playbook for details on [code review and pull requests](https://github.com/dxw/playbook/blob/master/playbook.md#pull-requests-and-code-reviews).

When the pull request has been signed off and merged it will deploy to production.

## Ruby projects
