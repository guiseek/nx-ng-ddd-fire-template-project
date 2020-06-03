import { async, TestBed } from '@angular/core/testing';
import { AuthFeatureAccountModule } from './auth-feature-account.module';

describe('AuthFeatureAccountModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AuthFeatureAccountModule],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(AuthFeatureAccountModule).toBeDefined();
  });
});
