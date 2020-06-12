# dxw Playbook

Are you looking for the Playbook? Read and search it at
[playbook.dxw.com](https://playbook.dxw.com).

## What is this?

It’s dxw’s Playbook. It explains how we get things done.

## Changes

The Playbook documents how the Playbook gets changed. See the
[changes to this document](https://playbook.dxw.com/#changes-to-this-document)
section for more information.

## Licence

The contents of dxw's Playbook is released under a
[Creative Commons Attribution-NonCommercial](https://creativecommons.org/licenses/by-nc/2.0/uk/)
licence. You are free to reuse and adapt this content with credit, for
non-commercial purposes.

## Development

### Running locally

If this is your first time running the setup, or you want to start from scratch,
run

```sh
script/setup
```

If you're coming back and want to update the dependencies, run

```sh
script/update
```

To start a local development server run

```sh
script/server
```

and visit [localhost:4000](http://localhost:4000) to see your local Playbook.
Changes to the source should be automatically picked up while the server is
running.

To build the site manually in development mode, run

```sh
script/build
```

To build the site manually in production mode, run

```sh
script/build production
```

### Testing & linting

Check your changes for any issues in the code, formatting, and prose:

```sh
script/test
```

The prose linter will only show "errors" and "warnings" by default. If you want
extra suggestions for better writing, run:

```sh
npm run lint:prose:suggestions
```
