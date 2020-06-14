import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CompanyDomainModule } from '@seek/company/domain';
import { SharedUiCommonModule, SharedUiMaterialModule } from '@seek/shared/ui/common';
// import { SharedUiListDesktopModule } from '@seek/shared/ui/list';
import { ManageComponent } from './manage.component';

@NgModule({
  imports: [
    CompanyDomainModule,
    SharedUiCommonModule,
    SharedUiMaterialModule,
    // SharedUiListPhoneModule,
    // SharedUiListDesktopModule,
    // SharedUiLayoutModule.forRoot([]),
    RouterModule.forChild([
      {
        path: '',
        component: ManageComponent
      }
    ])
  ],
  declarations: [ManageComponent],
  exports: [ManageComponent],
})
export class CompanyFeatureManageModule {}
