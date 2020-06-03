import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { redirectLoggedInTo } from '@angular/fire/auth-guard';
import { RouterModule } from '@angular/router';
import { AuthShellComponent } from './auth-shell/auth-shell.component';

const redirectLoggedInToItems = () => redirectLoggedInTo(['/produtos']);

@NgModule({
  imports: [
    CommonModule,

    RouterModule.forChild([
      {
        path: '',
        component: AuthShellComponent,
        children: [
          {
            path: '',
            loadChildren: () =>
              import('@dekao/auth/feature-account').then(
                (m) => m.AuthFeatureAccountModule
              ),
          }
        ]
      },
      {
        path: 'login',
        loadChildren: () =>
          import('@dekao/auth/feature-login').then(
            (m) => m.AuthFeatureLoginModule
          ),
      },
    ]),
  ],
  declarations: [AuthShellComponent],
})
export class AuthShellModule {}
