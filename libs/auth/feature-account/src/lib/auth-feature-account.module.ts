import { NgModule } from '@angular/core';
import { AuthDomainModule } from '@seek/auth/domain';
import { SharedUiCommonModule, SharedUiMaterialModule } from '@seek/shared/ui/common';
import { AccountComponent } from './account.component';
import { AccountMenuComponent } from './components/account-menu/account-menu.component';

@NgModule({
  imports: [
    AuthDomainModule,
    SharedUiCommonModule,
    SharedUiMaterialModule
  ],
  declarations: [AccountComponent, AccountMenuComponent],
  exports: [AccountComponent, AccountMenuComponent],
})
export class AuthFeatureAccountModule {}
