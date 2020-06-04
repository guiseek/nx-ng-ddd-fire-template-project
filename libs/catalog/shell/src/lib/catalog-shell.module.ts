import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthFeatureAccountModule } from '@dekao/auth/feature-account';
// import { AuthDomainModule } from '@dekao/auth/domain';
import { CatalogFeatureBrowseProductsModule } from '@dekao/catalog/feature-browse-products';
import { CatalogFeatureManageProductsModule } from '@dekao/catalog/feature-manage-products';
import { CatalogShellComponent } from './catalog-shell/catalog-shell.component';

@NgModule({
  imports: [
    CommonModule,
    // AuthDomainModule,
    AuthFeatureAccountModule,
    CatalogFeatureManageProductsModule,
    CatalogFeatureBrowseProductsModule,
    RouterModule.forChild([
      {
        path: '',
        component: CatalogShellComponent
      }
    ]),
  ],
  declarations: [CatalogShellComponent],
})
export class CatalogShellModule { }
