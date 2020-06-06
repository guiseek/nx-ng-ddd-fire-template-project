import { NgModule } from '@angular/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { CatalogDomainModule } from '@seek/catalog/domain';
import { SharedUiCommonModule, SharedUiMaterialModule } from '@seek/shared/ui/common';
import { BrowseProductsComponent } from './browse-products.component';
import { ListItemsComponent } from './components/list-items/list-items.component';
import { SearchComponent } from './components/search/search.component';

@NgModule({
  imports: [
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    SharedUiCommonModule,
    SharedUiMaterialModule,
    CatalogDomainModule
  ],
  declarations: [BrowseProductsComponent, SearchComponent, ListItemsComponent],
  exports: [BrowseProductsComponent, SearchComponent, ListItemsComponent],
})
export class CatalogFeatureBrowseProductsModule {}
