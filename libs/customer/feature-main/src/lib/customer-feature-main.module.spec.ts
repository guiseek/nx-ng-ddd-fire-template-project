import { async, TestBed } from '@angular/core/testing';
import { CustomerFeatureMainModule } from './customer-feature-main.module';

describe('CustomerFeatureMainModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CustomerFeatureMainModule],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(CustomerFeatureMainModule).toBeDefined();
  });
});
