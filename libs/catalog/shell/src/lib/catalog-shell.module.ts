import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { AuthApiModule, AuthGuard } from '@seek/auth/api';
import { AuthFeatureAccountModule } from '@seek/auth/feature-account';
import { CatalogFeatureBrowseProductsModule } from '@seek/catalog/feature-browse-products';
import { CatalogFeatureManageProductsModule } from '@seek/catalog/feature-manage-products';
import { SharedUiAddressModule } from '@seek/shared/ui/address';
import { SharedUiLayoutModule } from '@seek/shared/ui/layout';
import { SharedUiPhotoModule } from '@seek/shared/ui/photo';
import { CatalogShellComponent } from './catalog-shell/catalog-shell.component';

@NgModule({
  imports: [
    CommonModule,
    AuthApiModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    SharedUiAddressModule,
    SharedUiPhotoModule,
    AuthFeatureAccountModule,
    CatalogFeatureManageProductsModule,
    CatalogFeatureBrowseProductsModule,
    SharedUiLayoutModule.forRoot([
      { path: '/catalog/add', label: 'Criar', icon: 'add', roles: [] }
    ]),
    RouterModule.forChild([
      {
        path: '',
        component: CatalogShellComponent,
        canActivate: [AuthGuard]
      }
    ]),
  ],
  declarations: [CatalogShellComponent],
})
export class CatalogShellModule { }
