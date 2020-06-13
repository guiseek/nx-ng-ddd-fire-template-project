import { async, TestBed } from '@angular/core/testing';
import { CatalogFeatureShellModule } from './catalog-feature-shell.module';

describe('CatalogFeatureShellModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CatalogFeatureShellModule],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(CatalogFeatureShellModule).toBeDefined();
  });
});
