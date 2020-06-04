import { async, TestBed } from '@angular/core/testing';
import { SharedUiCurrencyModule } from './shared-ui-currency.module';

describe('SharedUiCurrencyModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedUiCurrencyModule],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(SharedUiCurrencyModule).toBeDefined();
  });
});
