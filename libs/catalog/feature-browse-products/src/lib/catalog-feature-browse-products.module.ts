import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogDomainModule } from '@dekao/catalog/domain';
import { BrowseProductsComponent } from './browse-products.component';

@NgModule({
  imports: [CommonModule, CatalogDomainModule],
  declarations: [BrowseProductsComponent],
  exports: [BrowseProductsComponent],
})
export class CatalogFeatureBrowseProductsModule {}
