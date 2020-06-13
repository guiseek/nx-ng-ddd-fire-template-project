import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogDomainModule } from '@seek/catalog/domain';
import { SharedUiMaterialModule } from '@seek/shared/ui/common';
import { SharedUiLayoutModule } from '@seek/shared/ui/layout';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductsComponent } from './containers/products/products.component';
import { ShellComponent } from './shell.component';

export const routes: Routes = [
  { path: '', component: ShellComponent }
]

@NgModule({
  imports: [
    CommonModule,
    SharedUiMaterialModule,
    SharedUiLayoutModule.forRoot([]),
    RouterModule.forChild(routes),
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
