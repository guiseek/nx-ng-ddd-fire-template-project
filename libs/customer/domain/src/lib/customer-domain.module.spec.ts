import { async, TestBed } from '@angular/core/testing';
import { CustomerDomainModule } from './customer-domain.module';

describe('CustomerDomainModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CustomerDomainModule],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(CustomerDomainModule).toBeDefined();
  });
});
