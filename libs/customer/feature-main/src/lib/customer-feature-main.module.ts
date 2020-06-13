import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthFeatureAccountModule } from '@seek/auth/feature-account';
import { CustomerDomainModule } from '@seek/customer/domain';
import { SharedUiCommonModule, SharedUiMaterialModule } from '@seek/shared/ui/common';
import { SharedUiLayoutModule } from '@seek/shared/ui/layout';
import { SharedUiPhotoModule } from '@seek/shared/ui/photo';
import { SharedUiTableModule } from '@seek/shared/ui/table';
import { FormComponent } from './components/form/form.component';
import { ListComponent } from './components/list/list.component';
import { DetailComponent } from './contaiers/detail/detail.component';
import { HomeComponent } from './contaiers/home/home.component';
import { NewComponent } from './contaiers/new/new.component';
import { MainComponent } from './main.component';

@NgModule({
  imports: [
    SharedUiPhotoModule,
    SharedUiLayoutModule.forRoot([
      {
        path: '/customer',
        label: 'Clientes',
        icon: 'people',
        roles: ['admin']
      }
    ]),
    SharedUiTableModule,
    SharedUiCommonModule,
    SharedUiMaterialModule,
    CustomerDomainModule,
    AuthFeatureAccountModule,
    RouterModule.forChild([
      {
        path: '',
        component: MainComponent,
        children: [
          { path: '', component: HomeComponent },
          { path: 'new', component: NewComponent },
          { path: ':id', component: DetailComponent }
        ]
      }
    ])
  ],
  declarations: [MainComponent, ListComponent, FormComponent, NewComponent, DetailComponent, HomeComponent],
  exports: [MainComponent],
})
export class CustomerFeatureMainModule {}
