import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedUiMaterialModule } from '@seek/shared/ui/common';
import { SharedUiLayoutModule } from '@seek/shared/ui/layout';
import { RootShellRoutingModule } from './root-shell-routing.module';
import { RootShellComponent } from './root-shell.component';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    SharedUiMaterialModule,
    SharedUiLayoutModule.forRoot([
      {
        icon: 'account_circle',
        label: 'Conta',
        roles: [],
        path: '/account'
      },
      {
        path: '/company',
        label: 'Empresa',
        icon: 'home',
        roles: ['admin']
      },
      {
        path: '/dashboard',
        label: 'Dashboard',
        icon: 'dashboard',
        roles: ['admin']
      },
      {
        path: '/catalog',
        label: 'Produtos',
        icon: 'list_alt',
        roles: ['admin']
      },
      {
        path: '/customer',
        label: 'Clientes',
        icon: 'people',
        roles: ['admin']
      }
    ]),
    RootShellRoutingModule
  ],
  declarations: [RootShellComponent],
})
export class RootShellModule {}
