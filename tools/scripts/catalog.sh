
ng g @angular-architects/ddd:domain catalog

ng g @angular-architects/ddd:feature shell --domain catalog --app webapp --lazy --entity product

ng generate @nrwl/angular:ngrx --name=products --module=libs/catalog/domain/src/lib/catalog-domain.module.ts --no-minimal --root --no-interactive

ng generate @schematics/angular:component --name=containers/products --project=catalog-feature-shell --style=scss --no-interactive --dry-run
ng generate @schematics/angular:component --name=components/product-list --project=catalog-feature-shell --style=scss --no-interactive --dry-run
