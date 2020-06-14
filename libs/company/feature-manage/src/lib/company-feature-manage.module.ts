import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { CompanyDomainModule } from '@seek/company/domain';
import { SharedUiMaterialModule } from '@seek/shared/ui/common';
import { SharedUiLayoutModule } from '@seek/shared/ui/layout';
import { SharedUiListDesktopModule } from '@seek/shared/ui/list';
import { ManageComponent } from './manage.component';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    CompanyDomainModule,
    SharedUiMaterialModule,
    // SharedUiListPhoneModule,
    SharedUiListDesktopModule,
    SharedUiLayoutModule.forRoot([]),
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
