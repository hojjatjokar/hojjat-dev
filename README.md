# Hojjat-Dev

## Apps and Libs in this project

- [app] blog
- [app] blog-e2e
- [app] storybook-e2e
- [lib] components

## Scripts

### Blog

- Run development: `nx serv blog` this will run the blog in this address: http://localhost:4200/
- Execute all unit tests: `nx test blog`
- Run unit tests affected by a change: `nx affected:test`
- Lint: `nx lint blog`
- Build: `nx build blog`. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

### Blog E2E

- Run E2E tests: `nx e2e blog-e2e`
- Run e2e tests affected ny a change: `nx affected:e2e`
- Lint: `nx lint blog-e2e`

### Components

- lint: `nx lint components`
- test: `nx test components`
- storybook: `nx storybook components`
- build-storybook:`nx build-storybook components`

## Code scaffolding

Run `nx g @nrwl/react:component my-component --project=blog` to generate a new component.

## Generate new packages

- `nx g @nrwl/react:app the-new-app-name` to generate an application.
- `nx g @nrwl/react:lib the-new-lib-name` to generate a library.

Libraries are shareable across libraries and applications. They can be imported from `@hojjat-dev/name-of-lib`.

## Understand your workspace

Run `nx graph` to see a diagram of the dependencies of your projects.
