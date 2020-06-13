import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ProductsEntity } from '../+state/products.models';
import { ProductsPartialState } from '../+state/products.reducer';
import { loadProduct, loadProducts } from './../+state/products.actions';
import { getAllProducts, getSelected } from './../+state/products.selectors';

@Injectable({ providedIn: 'root' })
export class ProductsFacade {

  products$ = this.store.select(getAllProducts);
  product$: Observable<ProductsEntity>;

  constructor(private store: Store<ProductsPartialState>) { }

  load(): void {
    console.log('load');

    this.store.dispatch(loadProducts());
  }

  findOne(id: string) {
    this.product$ = this.store.select(getSelected)
    return this.store.dispatch(loadProduct({ id }));
  }
}