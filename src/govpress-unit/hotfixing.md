---
title: Hotfixing code in GovPress
last_reviewed_at: ""
---

GovPress site repositories follow this pattern:

1. A `develop` branch is protected and will deploy to a staging site on merge.
1. A `main` branch is protected and will deploy to a production site on merge.

_Hotfixing_ in our context means creating a PR from a branch off `main` and merging into `main`, skipping `develop` altogether.

This is a risky operation because:

1. We have no way of testing the new code in a deployed environment. The code will be checked in the CI/CD pipeline but not against a database of content that is "like" production.
1. The staging and production sites will now be out of sync, and so staging will no longer be an accurate test for code we wish to deploy to production.
1. We risk creating a merge conflict between the `develop` and `main` branches which will block future production deploys.

For these reasons, we have a bias towards avoiding hotfix merges as far as possible and we try to keep `develop` branches in a state where they are always deployable.

## Reducing the likelihood of hotfixes

Sometimes we start a long-running piece of development work, for example a redesign of an active theme, which is likely to hold up production deploys.

In this case, we should first consider factoring our code to avoid hotfixes. For example, can new features be designed as a new plugin, which can be deactivated by default? Can a theme rebuild be placed in a new theme?

An alternative to a new plugin or theme is to guard the new feature with a [feature flag](https://blog.jetbrains.com/space/2022/06/16/feature-flags/) which can be set to activate the feature in staging but not in production. This is something that is much easier to implement if your code is well factored, according to the [SOLID principles of OOP](https://en.wikipedia.org/wiki/SOLID).

We usually implement feature flags as a environment variables. If you are not sure how to use environment variables in our PAAS please ask a Tech Lead or Ops Engineer.

## But I really, _really_ need to hotfix... what should I do?

Occasionally, we may need to apply a security patch to a dependency or merge some other urgent fix whilst we have work on staging which cannot be deployed. If you think you are in this situation there are several things you can do to reduce the risk of hotfixing.

### Dealing with supply chain vulnerabilities

If you need to change a lockfile to patch a dependency (such as a WordPress plugin or PHP library) please create _two_ PRs, one to merge into `develop` and one for `main`. This way the lockfile will be identical on both branches, which will avoid creating a merge conflict.

### Dealing with other urgent fixes

If you think there is a bug that is so serious that it should be hotfixed, please [start an incident](/tech/incidents/dealing-with-an-incident/). This will ensure that we record the bug and our response to it and encourage us to reflect on how we can avoid hotfixing in future. It will also ensure that there is a Tech Lead available to offer advice and someone should be available to talk to the relevant client.
