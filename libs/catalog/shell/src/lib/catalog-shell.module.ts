import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
// import { AuthDomainModule } from '@dekao/auth/domain';
import { CatalogFeatureBrowseProductsModule } from '@dekao/catalog/feature-browse-products';
import { CatalogShellComponent } from './catalog-shell/catalog-shell.component';

@NgModule({
  imports: [
    CommonModule,
    // AuthDomainModule,
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
