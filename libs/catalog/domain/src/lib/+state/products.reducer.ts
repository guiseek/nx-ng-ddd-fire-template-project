import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';
import * as ProductsActions from './products.actions';
import { ProductsEntity } from './products.models';


export const PRODUCTS_FEATURE_KEY = 'products';

// export interface State extends EntityState<ProductsEntity> {
export interface State extends EntityState<ProductsEntity> {
  selectedId?: string | number; // which Products record has been selected
  loaded: boolean; // has the Products list been loaded
  error?: string | null; // last none error (if any)
}

export interface ProductsPartialState {
  readonly [PRODUCTS_FEATURE_KEY]: State;
}

export const productsAdapter: EntityAdapter<ProductsEntity> = createEntityAdapter<
  ProductsEntity
>();

export const initialState: State = productsAdapter.getInitialState({
  // set initial required properties
  loaded: false,
});

const productsReducer = createReducer(
  initialState,
  on(ProductsActions.loadProducts, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(ProductsActions.loadProductsSuccess, (state, { products }) =>
    // productsAdapter.addAll(products, { ...state, loaded: true })
    productsAdapter.setAll(products, { ...state, loaded: true })
  ),
  on(ProductsActions.loadProductsFailure, (state, { error }) => ({
    ...state,
    error,
  })),
  on(ProductsActions.loadProduct, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(ProductsActions.loadProductSuccess, (state, { product }) =>
    // productsAdapter.addAll(products, { ...state, loaded: true })
    productsAdapter.addOne(product, { ...state, loaded: true })
  ),
  on(ProductsActions.loadProductFailure, (state, { error }) => ({
    ...state,
    error,
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return productsReducer(state, action);
}
