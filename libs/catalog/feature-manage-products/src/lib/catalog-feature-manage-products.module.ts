import { TextFieldModule } from '@angular/cdk/text-field';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { CatalogDomainModule } from '@dekao/catalog/domain';
import { SharedUiCurrencyModule } from '@dekao/shared/ui-currency';
import { ManageProductsComponent } from './manage-products.component';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    TextFieldModule,
    FlexLayoutModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    SharedUiCurrencyModule,
    CatalogDomainModule,
  ],
  declarations: [ManageProductsComponent],
  exports: [ManageProductsComponent],
})
export class CatalogFeatureManageProductsModule {}