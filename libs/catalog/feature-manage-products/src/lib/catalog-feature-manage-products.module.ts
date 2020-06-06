import { TextFieldModule } from '@angular/cdk/text-field';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { CatalogDomainModule } from '@seek/catalog/domain';
import { CatalogFeatureBrowseProductsModule } from '@seek/catalog/feature-browse-products';
import { SharedUiCurrencyModule } from '@seek/shared/ui-currency';
import { SharedUiCommonModule, SharedUiMaterialModule } from '@seek/shared/ui/common';
import { SharedUiLayoutModule } from '@seek/shared/ui/layout';
// import { SharedUiDateTimeModule } from '@seek/shared/ui/date-time';
import { SharedUiSelectModule } from '@seek/shared/ui/select';
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
    SharedUiLayoutModule,
    SharedUiCurrencyModule,
    // SharedUiDateTimeModule,
    CatalogFeatureBrowseProductsModule,
    CatalogDomainModule,
  ],
  declarations: [ManageProductsComponent, ProductFormComponent],
  exports: [ManageProductsComponent, ProductFormComponent],
})
export class CatalogFeatureManageProductsModule {}
