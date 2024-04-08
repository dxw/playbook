[![Netlify Status](https://api.netlify.com/api/v1/badges/41bf71b6-221f-47c6-b391-4ac43b0b3b8c/deploy-status)](https://app.netlify.com/sites/laughing-payne-b9fbd2/deploys)

# dxw Playbook

Are you looking for the Playbook? Read and search it at
[playbook.dxw.com](https://playbook.dxw.com).

## What is this?

It’s dxw’s Playbook. It explains how we get things done.

## Changes

The Playbook documents how the Playbook gets changed. See the
[This Playbook](https://playbook.dxw.com/#this-playbook) section for more
information.

## Development guide

### Setup

Run the setup command. This installs the dependencies required for running the
project.

```
script/setup
```

To just update dependencies, you can run the bootstrap command (though this
currently does the same as `script/setup` due to the small number of
dependencies required):

```
script/bootstrap
```

### Running the application

To run the server, from the root directory, run:

```
script/server
```

This runs the server on localhost:4000.

### Checking the HTML

After making a change, please run `script/test`, which will ensure that there
are no broken links. The following are ignored:

- external links that require authentication or are manually confirmed working,
  when listed in `script/utils/check-html`
- 200 OK status codes - this prevents false positives such as links with anchors

### Code style

This project uses [JavaScript Standard Style](https://standardjs.com/) to enforce consistent style. This is enforced on pull requests to the main branch. Linting is run across all JavaScript files as part of the test script.

```
script/test
```

Alternatively you can run standalone linting checks by running `npm run lint`, or fix files using `npm run lint:fix`. Specific files and directories written in the glob pattern can be passed as optional arguments to either script when surrounded by quotes.

E.g.
```
npm run lint "src/_webpack/**/*.js"
```

## Licence

The contents of dxw's Playbook is released under a
[Creative Commons Attribution-NonCommercial 4.0](https://creativecommons.org/licenses/by-nc/4.0/)
licence. You are free to reuse and adapt this content with credit, for
non-commercial purposes.
