# Deploying

This is a guide to how we deploy changes to code onto different environments.

Each project should have two branches:
* develop
* master

And one remote:

* origin - GitHub or GitLab

### To Staging

You can deploy your code to staging by going through pull requests. When they are merged they are automatically pushed to `origin/develop` and CI service (Chef/Heroku) deploys the new code to the staging environment.

### To Production

You can deploy your code to Production by manually merging develop into master. The CI service (Chef/Heroku) will automatically deploy the new code to the production environment.
