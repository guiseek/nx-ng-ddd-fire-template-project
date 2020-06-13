import { DragDropModule } from '@angular/cdk/drag-drop';
import { NgModule } from '@angular/core';
import { redirectLoggedInTo } from '@angular/fire/auth-guard';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { AuthFeatureLoginModule } from '@seek/auth/feature-login';
import { AuthFeatureRegisterModule } from '@seek/auth/feature-register';
import { SharedUiCommonModule, SharedUiMaterialModule } from '@seek/shared/ui/common';
import { AuthShellComponent } from './auth-shell/auth-shell.component';
import { SelectCompanyComponent } from './select-company/select-company.component';

const redirectLoggedInToItems = () => redirectLoggedInTo(['/produtos']);

@NgModule({
  imports: [
    DragDropModule,
    FlexLayoutModule,
    SharedUiCommonModule,
    SharedUiMaterialModule,
    AuthFeatureLoginModule,
    AuthFeatureRegisterModule,
    RouterModule.forChild([
      {
        path: '',
        component: AuthShellComponent
      },
      {
        path: 'company',
        component: SelectCompanyComponent
      }
    ]),
  ],
  declarations: [AuthShellComponent, SelectCompanyComponent],
})
export class AuthShellModule { }
