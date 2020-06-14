import { async, TestBed } from '@angular/core/testing';
import { CompanyFeatureManageModule } from './company-feature-manage.module';

describe('CompanyFeatureManageModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CompanyFeatureManageModule],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(CompanyFeatureManageModule).toBeDefined();
  });
});
