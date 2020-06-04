import { async, TestBed } from '@angular/core/testing';
import { CatalogFeatureManageProductsModule } from './catalog-feature-manage-products.module';

describe('CatalogFeatureManageProductsModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CatalogFeatureManageProductsModule],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(CatalogFeatureManageProductsModule).toBeDefined();
  });
});
