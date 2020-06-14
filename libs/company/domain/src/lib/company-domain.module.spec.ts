import { async, TestBed } from '@angular/core/testing';
import { CompanyDomainModule } from './company-domain.module';

describe('CompanyDomainModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CompanyDomainModule],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(CompanyDomainModule).toBeDefined();
  });
});
