import { Component, Input, OnInit } from '@angular/core';
import { ManageProductsFacade, Product } from '@seek/catalog/domain';

@Component({
  selector: 'catalog-manage-products',
  templateUrl: './manage-products.component.html',
  styleUrls: ['./manage-products.component.scss']
})
export class ManageProductsComponent implements OnInit {
  @Input() minRows = 2;
  @Input() maxRows = 20;

  productCategoryList$ = this._manageProducts.productCategoryList$;

  product: Product;

  constructor(
    private _manageProducts: ManageProductsFacade
  ) {
  }

  ngOnInit() {
    this.load();
  }

  load(): void {
    this._manageProducts.load();
  }

  formChaged(product: Partial<Product>) {
    console.log(product);

  }
  formSubmitted(product: Product) {
    console.log(product);
    this._manageProducts.create(product);
  }
}

