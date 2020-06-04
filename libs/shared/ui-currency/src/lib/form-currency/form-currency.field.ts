import { Component, forwardRef, HostBinding, Inject, OnDestroy, OnInit } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { CurrencyMaskConfig } from 'ngx-currency';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { CURRENCY_CONFIG } from './../currency-injectors';


const formCurrencyFieldProvider = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => FormCurrencyField),
  multi: true
}

@Component({
  selector: 'dekao-form-currency',
  templateUrl: './form-currency.field.html',
  styleUrls: ['./form-currency.field.scss'],
  providers: [formCurrencyFieldProvider]
})
export class FormCurrencyField implements OnInit, ControlValueAccessor, OnDestroy {
  static nextId = 0;
  private destroy: Subject<void> = new Subject();

  control = new FormControl();

  private _disabled = false;
  private _focused = false;
  private _placeholder = '';
  private _required = false;

  disabled: boolean;

  @HostBinding('class.ng-invalid')
  ngInvalid: boolean;

  onTouched(): void {
    console.log('touched');
    this.control.markAsTouched();
    // console.log(this.parts.value);
  }


  constructor(
    @Inject(CURRENCY_CONFIG)
    public config: CurrencyMaskConfig,
  ) {
    // console.log(this.ctrl);

  }

  writeValue(str: string | null): void {
    console.log(str);

    this.control.setValue(str);
    // throw new Error("Method not implemented.");
  }
  registerOnChange(onChange: any): void {
    this.control.valueChanges.pipe(
      takeUntil(this.destroy)
    ).subscribe(onChange);
    // throw new Error("Method not implemented.");
  }
  registerOnTouched(onTouched: any): void {
    this.onTouched = onTouched;
  }
  setDisabledState?(isDisabled: boolean): void {
    if (isDisabled) {
      this.control.disable();
    } else {
      this.control.enable();
    }

    this.disabled = isDisabled;
    // throw new Error("Method not implemented.");
  }

  ngOnInit(): void {
  }

  ngOnDestroy() { }
}
