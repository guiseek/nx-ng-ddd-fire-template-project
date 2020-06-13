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
        path: 'account',
        loadChildren: () =>
          (import('@seek/auth/feature-account'))
            .then(m => m.AuthFeatureAccountModule)
      },
      {
        path: '',
        loadChildren: () =>
          import('@seek/dashboard/shell')
            .then(m => m.DashboardShellModule)
      },
    ]),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
