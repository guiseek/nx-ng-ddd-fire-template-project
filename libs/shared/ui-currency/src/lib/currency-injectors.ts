import { InjectionToken } from '@angular/core';
import { CurrencyMaskConfig } from 'ngx-currency';

export let CURRENCY_CONFIG = new InjectionToken<CurrencyMaskConfig>('currency.config');

export const CURRENCY_DI_CONFIG: CurrencyMaskConfig = {
  align: 'right',
  allowNegative: true,
  allowZero: true,
  decimal: ',',
  precision: 2,
  prefix: '',
  suffix: '',
  thousands: '.',
  nullable: true
}