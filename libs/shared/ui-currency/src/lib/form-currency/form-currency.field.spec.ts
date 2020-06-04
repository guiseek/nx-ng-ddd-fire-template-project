import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCurrencyField } from './form-currency.field';

describe('FormCurrencyField', () => {
  let component: FormCurrencyField;
  let fixture: ComponentFixture<FormCurrencyField>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormCurrencyField ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormCurrencyField);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
