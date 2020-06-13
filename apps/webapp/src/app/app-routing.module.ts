import { registerLocaleData } from '@angular/common';
import localePtExtra from '@angular/common/locales/extra/br';
import localePt from '@angular/common/locales/pt';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

registerLocaleData(localePt, 'pt-BR', localePtExtra);

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
          import('@seek/catalog/shell')
            .then(m => m.CatalogShellModule)
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
