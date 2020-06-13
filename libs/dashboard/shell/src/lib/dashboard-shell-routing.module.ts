import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGuard } from '@seek/auth/api';
import { ShellComponent } from './shell.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        data: {
          icon: 'dashboard',
          label: 'Dashboard',
        },
        component: ShellComponent,
        canActivate: [AuthGuard],
        children: [
          {
            path: '',
            data: {
              icon: 'people',
              label: 'Customer',
            },
            loadChildren: async () =>
              (await import('@seek/customer/feature-main')).CustomerFeatureMainModule
          },
        ]
      }
    ]),
  ],
  exports: [RouterModule]
})
export class DashboardShellRoutingModule { }

