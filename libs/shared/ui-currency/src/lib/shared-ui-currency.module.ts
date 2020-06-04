import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { CurrencyMaskConfig, NgxCurrencyModule } from 'ngx-currency';
import { CURRENCY_CONFIG, CURRENCY_DI_CONFIG } from './currency-injectors';
import { CurrencyInputDirective } from './currency-input/currency-input.directive';
import { FormCurrencyField } from './form-currency/form-currency.field';


@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    NgxCurrencyModule,
    ReactiveFormsModule
  ],
  declarations: [
    FormCurrencyField,
    CurrencyInputDirective
  ],
  exports: [
    FormCurrencyField,
    CurrencyInputDirective
  ],
  providers: [
    {
      provide: CURRENCY_CONFIG,
      useValue: CURRENCY_DI_CONFIG
    }
  ]
})
export class SharedUiCurrencyModule {
  static forRoot(
    currencyMaskConfig: CurrencyMaskConfig
  ): ModuleWithProviders<SharedUiCurrencyModule> {
    return {
      ngModule: SharedUiCurrencyModule,
      providers: [
        {
          provide: CURRENCY_CONFIG,
          useValue: {
            ...CURRENCY_DI_CONFIG,
            ...currencyMaskConfig
          }
        }
      ]
    }
  }
}
