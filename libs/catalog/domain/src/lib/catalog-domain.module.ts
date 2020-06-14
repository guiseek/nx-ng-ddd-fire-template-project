import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { environment } from '@env/environment';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { NxModule } from '@nrwl/angular';
import { ProductsEffects } from './+state/products.effects';
import * as fromProducts from './+state/products.reducer';
import { ProductsFacade } from './application/products.facade';

@NgModule({
  imports: [
    CommonModule,
    NxModule.forRoot(),
    // StoreModule.forRoot(
    //   {},
    //   {
    //     metaReducers: !environment.production ? [] : [],
    //     runtimeChecks: {
    //       strictActionImmutability: true,
    //       strictStateImmutability: true,
    //     },
    //   }
    // ),
    EffectsModule.forFeature([ProductsEffects]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    StoreModule.forFeature(
      fromProducts.PRODUCTS_FEATURE_KEY,
      fromProducts.reducer
    ),
  ],
  providers: [ProductsFacade]
})
export class CatalogDomainModule {}
