import { NgModule } from '@angular/core';
import { AuthDomainModule } from '@seek/auth/domain';
import { SharedUiCommonModule, SharedUiMaterialModule } from '@seek/shared/ui/common';
import { SharedUiLayoutModule } from '@seek/shared/ui/layout';
import { AccountComponent } from './account.component';
import { AuthFeatureAccountRoutingModule } from './auth-feature-account-routing.module';
import { AccountMenuComponent } from './components/account-menu/account-menu.component';

@NgModule({
  imports: [
    AuthDomainModule,
    SharedUiCommonModule,
    SharedUiMaterialModule,
    SharedUiLayoutModule.forRoot([
      {
        icon: 'account_circle',
        label: 'Conta',
        roles: [],
        path: '/account'
      }
    ]),
    AuthFeatureAccountRoutingModule
  ],
  declarations: [AccountComponent, AccountMenuComponent],
  exports: [AccountComponent, AccountMenuComponent],
})
export class AuthFeatureAccountModule {}
