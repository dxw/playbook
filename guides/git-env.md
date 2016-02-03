# Git ENV

At dxw we use the Git ENV branching model, as [described here by FINE](https://www.wearefine.com/mingle/env-branching-with-git/). We even have a [little tool](https://github.com/dxw/git-env) for working with it.

This guide assumes you have read the FINE article on Git ENV and have already installed the Git ENV tool.

## Starting a new project with Git ENV

To start a new project all you need to do initialise Git ENV with your working branches.

	# Navigate to your project directory
	cd your-project-folder
	# Run git env init
	git env init
	What is your production branch? [master]
	What other environment branches do you have? [stage dev] stage
	What command should be run to deploy to the production branch? [git checkout {{.env}} && git merge —no-ff {{.feature}}]
	You’re ready to go.

Git ENV is now set up and you can start work.

## Starting a new piece of work using Git ENV

To start on a new bit of work on the current project, you can `start` a new feature or hotfix branch using Git ENV. For more details on our branching structure it’s discussed in the [development section of the Playbook](https://github.com/dxw/playbook/blob/master/playbook.md#development).

	# Navigate to your project directory
	cd your-project-folder
	# Start a new feature or hotfix
	git env start feature/{id}-{feature}
	# You will now be on a new branch for the current feature you are about to start

At this point, the Git ENV tool has created a new branch from the current `master` branch.

## Finishing a piece of work using Git ENV

To finish a piece of work, you can use the Git ENV tool to safely merge your work with the deployment branch. Note, with new GovPress projects that are on Github, you should only complete work for staging this way, all work for production should go through pull requests into the master branch, see [deploying](https://github.com/dxw/playbook/blob/master/guides/deploying.md) for more information.

	# Navigate to your project directory
	cd your-project-folder
	# Checkout your feature or hotfix branch
	git checkout feature/{id}-{feature}
	# Merge the changes using git ENV to the stage branch
	git env deploy stage
	# From here you can push the changes to staging.
	git push origin stage

At this point your changes should be merged with staging and pushed to the Github repo. You can now follow the [deploying guide to staging](https://github.com/dxw/playbook/blob/master/guides/deploying.md#deploying-to-testing) to deploy your changes to the testing environment.
