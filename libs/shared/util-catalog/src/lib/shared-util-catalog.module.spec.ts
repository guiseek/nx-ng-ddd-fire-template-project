import { async, TestBed } from '@angular/core/testing';
import { SharedUtilCatalogModule } from './shared-util-catalog.module';

describe('SharedUtilCatalogModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedUtilCatalogModule],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(SharedUtilCatalogModule).toBeDefined();
  });
});
