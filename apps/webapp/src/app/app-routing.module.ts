import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'dashboard'
      },
      {
        path: 'dashboard',
        loadChildren: () =>
          import('@seek/dashboard/shell')
            .then(m => m.DashboardShellModule)
      },
      {
        path: 'auth',
        loadChildren: () =>
          import('@seek/auth/shell')
            .then(m => m.AuthShellModule)
      },
      {
        path: 'catalog',
        loadChildren: () =>
          import('@seek/catalog/feature-shell')
            .then(m => m.CatalogFeatureShellModule)
      },
      {
        path: 'customer',
        loadChildren: () =>
          import('@seek/customer/feature-main')
            .then(m => m.CustomerFeatureMainModule)
      },
    ]),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
