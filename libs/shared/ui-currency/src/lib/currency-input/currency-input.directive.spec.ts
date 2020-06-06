import { registerLocaleData } from '@angular/common';
import br from '@angular/common/locales/extra/br';
import pt from '@angular/common/locales/pt';
import { LOCALE_ID } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { createDirectiveFactory, SpectatorDirective } from '@ngneat/spectator';
import { CurrencyInputDirective } from './currency-input.directive';


describe('CurrencyInputDirective', () => {

  registerLocaleData(pt, 'pt-BR', br);

  const createDirective = createDirectiveFactory({
    directive: CurrencyInputDirective,
    declarations: [CurrencyInputDirective],
    imports: [FormsModule, ReactiveFormsModule],
    providers: [{ provide: LOCALE_ID, useValue: 'pt-BR' }]
  });


  let element: string;
  let spectator: SpectatorDirective<CurrencyInputDirective>;
  let currencyControl: FormControl;

  beforeEach(() => {
    currencyControl = new FormControl(0);
    element = `<input type="text" seekCurrencyInput [formControl]="currencyControl">`;
    spectator = createDirective(element, {
      hostProps: { currencyControl }
    });
  });

  it('should ', () => {
    spectator.directive.thousandSeparatorEnabled = false;
    spectator.detectChanges();
    const val = '123456789';
    currencyControl.setValue(val);
    spectator.detectChanges();
    expect(
      (spectator.element as HTMLInputElement).value
    ).toEqual(val);
  });

  it('should ', () => {
    spectator.detectChanges();
    const orgVal = '1234567899';
    currencyControl.setValue(orgVal);
    spectator.detectChanges();

    expect((spectator.element as HTMLInputElement).value).toBe(
      `1.234.567.899`,
    );

    expect(currencyControl.value).toBe(orgVal);
  });

  it('should only allow one "0" in input', () => {
    spectator.detectChanges();
    currencyControl.setValue('00');
    spectator.detectChanges();

    expect((spectator.element as HTMLInputElement).value).toBe(`0`);
  });

  it('should remove leading "0"s in input', () => {
    currencyControl.setValue('001234567899');
    spectator.detectChanges();

    expect((spectator.element as HTMLInputElement).value).toBe(
      `1.234.567.899`,
    );
  });

  it('should NOT add thousand separators for 20 digit number after decimal separator with 10 decimals', () => {
    spectator.detectChanges();
    currencyControl.setValue(
      `1234567899,1234567899`,
    );
    spectator.detectChanges();

    expect((spectator.element as HTMLInputElement).value).toBe(
      `1.234.567.899,1234567899`,
    );
  });

  it('should NOT add thousand separators for 3 digit number', () => {
    spectator.detectChanges();
    currencyControl.setValue(`123`);
    spectator.detectChanges();

    expect((spectator.element as HTMLInputElement).value).toBe(`123`);
  });

  it('should update add thousand separators when going from 3 to 4 digit number', () => {
    spectator.detectChanges();
    currencyControl.setValue(`123`);
    spectator.detectChanges();
    currencyControl.setValue(`1234`);
    spectator.detectChanges();

    expect((spectator.element as HTMLInputElement).value).toBe(
      `1.234`,
    );
  });

  it('should remove thousand separators when going from 4 to 3 digit number', () => {
    spectator.detectChanges();
    const orgVal = `1.234`;
    currencyControl.setValue(orgVal);
    spectator.detectChanges();
    const lastCharRemoved = orgVal.slice(0, -1);
    currencyControl.setValue(lastCharRemoved);
    spectator.detectChanges();

    expect((spectator.element as HTMLInputElement).value).toBe(`123`);
  });

})
