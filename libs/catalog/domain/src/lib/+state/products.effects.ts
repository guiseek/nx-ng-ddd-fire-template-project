import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { fetch } from '@nrwl/angular';
import { map } from 'rxjs/operators';
import { ProductDataService } from '../infrastructure/product.data.service';
import * as ProductsActions from './products.actions';


@Injectable()
export class ProductsEffects {
  loadProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductsActions.loadProducts),
      fetch({
        run: (action) => {
          console.log('opa: ', action);
          return this.productService.load()
            .pipe(
              map(products => {
                return ProductsActions.loadProductsSuccess({ products })
              })
            )
          // Your custom service 'load' logic goes here. For now just return a success action...
          // return ProductsActions.loadProductsSuccess({ products: [] });
        },

        onError: (action, error) => {
          console.error('Error', error);
          return ProductsActions.loadProductsFailure({ error });
        },
      })
    )
  );

  constructor(
    private actions$: Actions,
    private productService: ProductDataService
  ) {}
}
