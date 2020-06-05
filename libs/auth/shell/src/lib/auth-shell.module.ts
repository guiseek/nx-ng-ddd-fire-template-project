import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { redirectLoggedInTo } from '@angular/fire/auth-guard';
import { RouterModule } from '@angular/router';
import { AuthFeatureLoginModule } from '@dekao/auth/feature-login';
import { AuthShellComponent } from './auth-shell/auth-shell.component';

const redirectLoggedInToItems = () => redirectLoggedInTo(['/produtos']);

@NgModule({
  imports: [
    CommonModule,
    AuthFeatureLoginModule,
    RouterModule.forChild([
      {
        path: '',
        component: AuthShellComponent
      }
    ]),
  ],
  declarations: [AuthShellComponent],
})
export class AuthShellModule {}
