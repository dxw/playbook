# Transferring a repo from git.dxw.net to github

To allow better access to our code, for us to do code reviews, and run tests, we’re now switching most of our repos to be on Github. This guide will take you through a step-by-step of how to set up a new repo on Github and what to do with the deployment repo on GovPress.

For more information on deploying using the new repository setup, see the [deploying guide](https://github.com/dxw/playbook/blob/master/guides/deploying.md).

## Create the new repo

Create a new private repository on Github: [https://github.com/organizations/dxw/repositories/new](https://github.com/organizations/dxw/repositories/new)

The naming convention to follow is: `{organisation}-{project}-{repo}`. (repo = “app” or “etc” or “tools”)

i.e. judiciary-intranet-app

If it’s a shared theme, `{organisation}-theme-{theme name}`.

i.e. judiciary-theme-judiciary

## Copy across from old repository

From the old repository, set up the new Github repo with a copy of the current branches and tags:

	# go to your local copy of the old repo
	cd the-old-repo
	# fetch
	git fetch
	# Create a new master branch as a copy of the current production branch (don’t do this for themes)
	git branch -f master origin/production
	# push all local branches
	git branch | cut -b 3- | xargs git push origin
	# duplicate all branches on the origin to the new repo (and duplicate local tags)
	git push git@github.com:dxw/{name-of-repo}.git 'refs/remotes/origin/*:refs/heads/*' 'refs/tags/*:refs/tags/*'

Set up the new repo on your machine:

	# clone the new repo
	cd /path/to/repos
	git clone git@github.com:dxw/{name-of-repo}.git
	cd {name-of-repo}
	# add the remote for the git.dxw.net repo
	git remote add govpress git@git.dxw.net:{name-of-repo}/app

Spring cleaning:

	# since we’re starting fresh, we may as well prune some unnecessary branches
	git branch --merged=master -r | grep origin | grep -E '(hotfix|feature)' | cut -d/ -f2- | xargs git push origin --delete
	# we don’t need production and testing
	git push origin --delete production testing

## Set options

1. Settings > Branches > Choose a branch > “master” > Protect this branch > Save changes
2. Settings > Collaborators & teams > Add a team > WordPress devs > and set permission level to write too

## Don’t forget

Lastly when you’ve finished all the above steps, remember to set up a local copy of the stage branch:

	git branch stage origin/stage

And update all the plugins and submodules in the project if required:

	git submodule update --init --recursive
	whippet plugins install
