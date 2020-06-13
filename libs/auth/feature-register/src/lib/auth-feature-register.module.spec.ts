import { async, TestBed } from '@angular/core/testing';
import { AuthFeatureRegisterModule } from './auth-feature-register.module';

describe('AuthFeatureRegisterModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AuthFeatureRegisterModule],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(AuthFeatureRegisterModule).toBeDefined();
  });
});
