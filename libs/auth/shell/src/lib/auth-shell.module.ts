import { NgModule } from '@angular/core';
import { redirectLoggedInTo } from '@angular/fire/auth-guard';
import { RouterModule } from '@angular/router';
import { AuthFeatureLoginModule } from '@seek/auth/feature-login';
import { SharedUiCommonModule, SharedUiMaterialModule } from '@seek/shared/ui/common';
import { AuthShellComponent } from './auth-shell/auth-shell.component';

const redirectLoggedInToItems = () => redirectLoggedInTo(['/produtos']);

@NgModule({
  imports: [
    SharedUiCommonModule,
    SharedUiMaterialModule,
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
