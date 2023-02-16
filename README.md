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

To proof the HTML for things like dead links, run:

```
bundle exec jekyll build
bundle exec htmlproofer _site
```

### Code style

[JavaScript Standard Style](https://standardjs.com/) is the authority on style for JavaScript files. This is enforced on pull requests to the main branch. Linting is run across all files as part of the test script.

```
script/test
```

Or alternatively you can run standalone linting checks by running

```
npm run lint
```

## Licence

The contents of dxw's Playbook is released under a
[Creative Commons Attribution-NonCommercial](https://creativecommons.org/licenses/by-nc/2.0/uk/)
licence. You are free to reuse and adapt this content with credit, for
non-commercial purposes.
