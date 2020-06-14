import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CatalogDomainModule } from '@seek/catalog/domain';
import { SharedUiMaterialModule } from '@seek/shared/ui/common';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductsComponent } from './containers/products/products.component';
import { ShellComponent } from './shell.component';

@NgModule({
  imports: [
    CommonModule,
    SharedUiMaterialModule,
    RouterModule.forChild([
      {
        path: '',
        component: ShellComponent
      }
    ]),
    CatalogDomainModule
  ],
  declarations: [
    ShellComponent,
    ProductsComponent,
    ProductListComponent
  ],
  exports: [
    ShellComponent
  ],
})
export class CatalogFeatureShellModule {}
