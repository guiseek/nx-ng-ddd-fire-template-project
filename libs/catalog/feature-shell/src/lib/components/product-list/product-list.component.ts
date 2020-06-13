import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '@seek/catalog/domain';

@Component({
  selector: 'catalog-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  @Input() products: Product[];

  @Output() clicked = new EventEmitter();
}
