```sh
ng generate @nrwl/angular:library --name=shell --style=scss --directory=root --lazy --parentModule=apps/webapp/src/app/app-routing.module.ts --publishable --routing --tags=root --no-interactive
```

```sh
ng g c root-shell --project root-shell --flat
```

# Package by layer

```ts
 data (module)
 └───repository
 └───cache
 └───database
 └───api
 └───exception
 └───shared

 domain (module)
 └───model
 └───interactor
 └───executor
 └───abstraction
 └───shared

 presentation (module)
 └───presenter
 └───view
 └───navigation
 └───shared
```


# Package by layer
```ts
data (module)                     app (module)
└───repository                    └───data
└───cache                                 └───repository
└───database                              └───cache
└───api                                   └───database
└───exception                             └───api
└───shared                                └───exception
                                          └───shared
domain (module)                   └───domain
└───model                             └───model
└───interactor                        └───interactor
└───executor                          └───executor
└───abstraction                       └───abstraction
└───shared                            └───shared
                                  └───presentation
presentation (module)                     └───presenter
└───presenter                             └───view
└───view                                  └───navigation
└───navigation                            └───shared
└───shared
```

# Package by feature
```ts
app
└───core
    └───data
    └───utils
└───timeline
└───details
└───gallery
└───post
└───profile
└───notifications
└───messaging
└───metrics
└───search
└───settings
```

##
```ts
```

##
```ts
```
