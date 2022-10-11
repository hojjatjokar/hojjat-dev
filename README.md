

# HojjatDev

## Apps and Libs in this project

- [app] blog
- [app] blog-e2e
- [app] storybook-e2e
- [lib] components

## Development server

Run `nx serve blog` for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `nx g @nrwl/react:component my-component --project=blog` to generate a new component.

## Running unit tests

Run `nx test my-app` to execute the unit tests via [Jest](https://jestjs.io).

Run `nx affected:test` to execute the unit tests affected by a change.

## Running end-to-end tests

Run `nx e2e my-app` to execute the end-to-end tests via [Cypress](https://www.cypress.io).

Run `nx affected:e2e` to execute the end-to-end tests affected by a change.

## Build

Run `nx build blog` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Generate new packages

- `nx g @nrwl/react:app the-new-app-name` to generate an application.
- `nx g @nrwl/react:lib the-new-lib-name` to generate a library.

Libraries are shareable across libraries and applications. They can be imported from `@hojjat-dev/name-of-lib`.

## Understand your workspace

Run `nx graph` to see a diagram of the dependencies of your projects.