import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RootShellComponent } from './root-shell.component';

// ,

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: RootShellComponent,
        children: [
          {
            path: '',
            pathMatch: 'full',
            redirectTo: 'dashboard',
          },
          {
            path: 'dashboard',
            loadChildren: () =>
              import('@seek/dashboard/shell').then(
                (m) => m.DashboardShellModule
              ),
          },
          {
            path: 'company',
            loadChildren: () =>
              import('@seek/company/feature-manage').then(
                (m) => m.CompanyFeatureManageModule
              ),
          },
          {
            path: 'catalog',
            loadChildren: () =>
              import('@seek/catalog/feature-shell').then(
                (m) => m.CatalogFeatureShellModule
              ),
          },
          {
            path: 'customer',
            loadChildren: () =>
              import('@seek/customer/feature-main').then(
                (m) => m.CustomerFeatureMainModule
              ),
          },
        ]
      }
    ]),
  ],
  exports: [RouterModule],
})
export class RootShellRoutingModule { }
