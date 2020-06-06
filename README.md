# Dekao

```sh
# Node 10.17
ng add @angular/fire
ng add @angular/material

# Firebase
npm i @angular/fire firebase

npm i @angular/flex-layout

ng add @angular-architects/ddd

ng g @angular-architects/ddd:domain booking

cp apps/webapp/src/environments .
```

# Auth
```
ng g @angular-architects/ddd:domain auth
ng g @angular-architects/ddd:feature login --domain auth --app webapp --entity auth-user
ng g @angular-architects/ddd:feature account --domain auth --app webapp --entity account-user
```

# Shared domain
```
ng g @angular-architects/ddd:domain shared
ng g s services/firestore --project shared-domain
```

# Auth shell
```
ng generate @nrwl/angular:library --name=shell --style=scss --directory=auth --lazy --parentModule=apps/webapp/src/app/app.module.ts --routing
ng generate @schematics/angular:component --name=auth-shell --project=auth-shell --style=scss --displayBlock
```

# Catalog
```
ng g @angular-architects/ddd:domain catalog
ng g @angular-architects/ddd:feature browse-products --domain catalog --app webapp --entity product
ng generate @nrwl/angular:library --name=shell --style=scss --directory=catalog --lazy --parentModule=apps/webapp/src/app/app.module.ts --routing
ng generate @schematics/angular:component --name=catalog-shell --project=catalog-shell --style=scss --displayBlock

ng g @angular-architects/ddd:feature manage-products --domain catalog --entity product-category

ng generate @schematics/angular:component --name=product-form --project=manage-products --style=scss --export--no-interactive
```


```
ng generate @schematics/angular:guard --name=guards/account --project=catalog-shell --skipTests --no-interactive

ng generate @schematics/angular:guard --name=guards/account --project=catalog-shell --skipTests --no-interactive

ng generate @ngneat/spectator:spectator-component --name=components/account-menu --project=auth-feature-account --style=scss --changeDetection=OnPush --export --withHost --no-interactive
```

---

```sh
ng generate @nrwl/angular:library --name=ui-currency --style=scss --directory=shared --publishable --tags=domain:shared,type:ui --no-interactive

ng generate @schematics/angular:component --name=form-currency --project=shared-ui-currency --style=scss --export --type=Field --no-interactive

ng generate @schematics/angular:directive --name=currency-field --project=shared-ui-currency --no-flat --skipImport

npm i ngx-currency
```

```sh
npm i @ngneat/spectator --save-dev

ng generate @ngneat/spectator:spectator-component --name=components/search --project=catalog-feature-browse-products --style=scss --changeDetection=OnPush --export --withHost --no-interactive

ng generate @ngneat/spectator:spectator-component --name=components/list-items --project=catalog-feature-browse-products --style=scss --changeDetection=OnPush --export --withHost
```

# Ui Common
```sh
ng generate @nrwl/angular:library --name=common --directory=shared/ui --tags=type:ui
```


# Ui Select
```
ng generate @nrwl/angular:library --name=select --style=scss --directory=shared/ui --publishable --tags=domain:shared,type:ui --no-interactive

ng generate @ngneat/spectator:spectator-component --name=select --project=shared-ui-select --flat --style=scss --export --withHost
ng generate @ngneat/spectator:spectator-component --name=select --project=shared-ui-select --flat --style=scss --export --withHost
ng generate @ngneat/spectator:spectator-component --name=option-group --project=shared-ui-select --style=scss --export --withCustomHost
ng generate @ngneat/spectator:spectator-component --name=option --project=shared-ui-select --style=scss --export --withCustomHost
ng generate @ngneat/spectator:spectator-component --name=option/time-option --project=shared-ui-select --style=scss --export --withCustomHost
```

```
ng generate @ngneat/spectator:spectator-component --name=time-select --project=shared-ui-datetime --style=scss --export --withHost
ng generate @ngneat/spectator:spectator-component --name=time-select/time-option --project=shared-ui-datetime --style=scss --export --withCustomHost
```

This project was generated using [Nx](https://nx.dev).

<p align="center"><img src="https://raw.githubusercontent.com/nrwl/nx/master/nx-logo.png" width="450"></p>

🔎 **Nx is a set of Extensible Dev Tools for Monorepos.**

## Quick Start & Documentation

[Nx Documentation](https://nx.dev/angular)

[10-minute video showing all Nx features](https://nx.dev/angular/getting-started/what-is-nx)

[Interactive Tutorial](https://nx.dev/angular/tutorial/01-create-application)

## Adding capabilities to your workspace

Nx supports many plugins which add capabilities for developing different types of applications and different tools.

These capabilities include generating applications, libraries, etc as well as the devtools to test, and build projects as well.

Below are some plugins which you can add to your workspace:

- [Angular](https://angular.io)
  - `ng add @nrwl/angular`
- [React](https://reactjs.org)
  - `ng add @nrwl/react`
- Web (no framework frontends)
  - `ng add @nrwl/web`
- [Nest](https://nestjs.com)
  - `ng add @nrwl/nest`
- [Express](https://expressjs.com)
  - `ng add @nrwl/express`
- [Node](https://nodejs.org)
  - `ng add @nrwl/node`

## Generate an application

Run `ng g @nrwl/angular:app my-app` to generate an application.

> You can use any of the plugins above to generate applications as well.

When using Nx, you can create multiple applications and libraries in the same workspace.

## Generate a library

Run `ng g @nrwl/angular:lib my-lib` to generate a library.

> You can also use any of the plugins above to generate libraries as well.

Libraries are sharable across libraries and applications. They can be imported from `@seek/mylib`.

## Development server

Run `ng serve my-app` for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng g component my-component --project=my-app` to generate a new component.

## Build

Run `ng build my-app` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test my-app` to execute the unit tests via [Jest](https://jestjs.io).

Run `nx affected:test` to execute the unit tests affected by a change.

## Running end-to-end tests

Run `ng e2e my-app` to execute the end-to-end tests via [Cypress](https://www.cypress.io).

Run `nx affected:e2e` to execute the end-to-end tests affected by a change.

## Understand your workspace

Run `nx dep-graph` to see a diagram of the dependencies of your projects.

## Further help

Visit the [Nx Documentation](https://nx.dev/angular) to learn more.
