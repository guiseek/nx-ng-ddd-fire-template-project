import { TextFieldModule } from '@angular/cdk/text-field';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { CatalogDomainModule } from '@dekao/catalog/domain';
import { CatalogFeatureBrowseProductsModule } from '@dekao/catalog/feature-browse-products';
import { SharedUiCurrencyModule } from '@dekao/shared/ui-currency';
import { SharedUiCommonModule, SharedUiMaterialModule } from '@dekao/shared/ui/common';
// import { SharedUiDatetimeModule } from '@dekao/shared/ui-datetime';
import { SharedUiSelectModule } from '@dekao/shared/ui/select';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { ManageProductsComponent } from './manage-products.component';


@NgModule({
  imports: [
    SharedUiCommonModule,
    SharedUiMaterialModule,
    TextFieldModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    SharedUiSelectModule,
    SharedUiCurrencyModule,
    // SharedUiDatetimeModule,
    CatalogFeatureBrowseProductsModule,
    CatalogDomainModule,
  ],
  declarations: [ManageProductsComponent, ProductFormComponent],
  exports: [ManageProductsComponent, ProductFormComponent],
})
export class CatalogFeatureManageProductsModule {}
