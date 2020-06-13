import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsFacade } from '@seek/catalog/domain';

@Component({
  selector: 'catalog-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products$ = this.products.products$;
  product$ = this.products.product$;
  constructor(
    private router: Router,
    private products: ProductsFacade
  ) { }

  ngOnInit(): void {
    this.products.load();
  }
  onSelect(product) {
    console.log(product);
    this.products.findOne(product.id)
  }
}
