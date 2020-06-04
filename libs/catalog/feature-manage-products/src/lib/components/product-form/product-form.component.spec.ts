import { Spectator, createComponentFactory } from '@ngneat/spectator';

import { ProductFormComponent } from './product-form.component';

describe('ProductFormComponent', () => {
  let spectator: Spectator<ProductFormComponent>;
  const createComponent = createComponentFactory(ProductFormComponent);

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
