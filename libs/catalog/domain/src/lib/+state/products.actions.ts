import { createAction, props } from '@ngrx/store';
import { ProductsEntity } from './products.models';


export enum ProductsActionTypes {
  LoadProducts = '[Products] Load Products',
  LoadProductsSuccess = '[Products] Load Products Success',
  LoadProductsFailure = '[Products] Load Products Failure',
  LoadProduct = '[Product] Load Product',
  LoadProductSuccess = '[Product] Load Product Success',
  LoadProductFailure = '[Product] Load Product Failure'
}

export const loadProducts = createAction(ProductsActionTypes.LoadProducts);

export const loadProductsSuccess = createAction(
  ProductsActionTypes.LoadProductsSuccess,
  props<{ products: ProductsEntity[] }>()
);

export const loadProductsFailure = createAction(
  ProductsActionTypes.LoadProductsFailure,
  props<{ error: any }>()
);

export const loadProduct = createAction(
  ProductsActionTypes.LoadProduct,
  props<{ id: string }>()
);

export const loadProductSuccess = createAction(
  ProductsActionTypes.LoadProductSuccess,
  props<{ product: ProductsEntity }>()
);

export const loadProductFailure = createAction(
  ProductsActionTypes.LoadProductFailure,
  props<{ error: any }>()
);
