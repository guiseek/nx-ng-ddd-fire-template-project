import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { AuthApiModule, AuthGuard } from '@seek/auth/api';
import { AuthFeatureAccountModule } from '@seek/auth/feature-account';
import { CatalogFeatureBrowseProductsModule } from '@seek/catalog/feature-browse-products';
import { CatalogFeatureManageProductsModule } from '@seek/catalog/feature-manage-products';
import { SharedUiLayoutModule } from '@seek/shared/ui/layout';
import { CatalogShellComponent } from './catalog-shell/catalog-shell.component';

@NgModule({
  imports: [
    CommonModule,
    AuthApiModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
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
