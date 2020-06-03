import { async, TestBed } from '@angular/core/testing';
import { SharedDomainModule } from './shared-domain.module';

describe('SharedDomainModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedDomainModule],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(SharedDomainModule).toBeDefined();
  });
});
