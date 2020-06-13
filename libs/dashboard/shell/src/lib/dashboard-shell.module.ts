import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedUiLayoutModule } from '@seek/shared/ui/layout';
import { SharedUiPhotoModule } from '@seek/shared/ui/photo';
import { DashboardShellRoutingModule } from './dashboard-shell-routing.module';
import { ShellComponent } from './shell.component';

@NgModule({
  imports: [
    CommonModule,
    SharedUiLayoutModule.forRoot([
      {
        icon: 'account_circle',
        label: 'Conta',
        roles: [],
        path: '/account'
      },
      {
        path: '/customer',
        label: 'Clientes',
        icon: 'people',
        roles: ['admin']
      }
    ]),
    SharedUiPhotoModule,
    DashboardShellRoutingModule
  ],
  declarations: [ShellComponent],
})
export class DashboardShellModule {}
