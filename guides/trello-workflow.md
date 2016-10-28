# Trello Workflow

New workflow. Uses Trello.

## States

- `backlog`
- `in progress`
- `awaiting code review`
- `code review`
- `awaiting DM review`
- `awaiting client review`
- `accepted`
- `done`

## Working on a story in a sprint

Move story from `backlog` to `in progress`, create new `feature/` branch against `develop`.

When the story is finished, create a MR targetting `develop`, move to `awaiting code review`.

## Code reviewing within a sprint

Move story from `awaiting code review` to `code review`.

Manually test that the ACs are met. Ensure the commit messages are good. Look over the code and ensure that it has tests and isn't doing anything weird.

Ask questions and/or request changes, then move to `in progress`.

If nothing is questionable, press `accept` on the MR and move the card to `awaiting dm review`.

## Working on a ticket outside of a sprint

After receiving Zendesk ticket, create a new story in `in progress`, create new `hotfix/` branch against `master`.

When the work is ready to be code reviewed, create a MR targetting `master`, ????????

TODO

## Deploying code at any time

Changes to deployed are in the `accepted` column. The `awaiting DM review` and `awaiting client review` columns must be empty.

```
% git fetch
% git checkout master
% git merge --no-ff origin/develop
% git push
```

Then move all stories in `accepted` to `done`.
