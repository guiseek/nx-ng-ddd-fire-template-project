import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../entities/product';
import { ProductCategory } from '../entities/product-category';
import { ProductCategoryDataService } from '../infrastructure/product-category.data.service';
import { ProductDataService } from '../infrastructure/product.data.service';



@Injectable({ providedIn: 'root' })
export class ManageProductsFacade {

  private productCategoryListSubject = new BehaviorSubject<ProductCategory[]>([]);
  productCategoryList$ = this.productCategoryListSubject.asObservable();

  constructor(
    private productCategoryDataService: ProductCategoryDataService,
    private _product: ProductDataService
  ) {
  }

  create(value: Product) {
    return this._product.add(value);
  }

  load(): void {
    this.productCategoryDataService.load().subscribe(
      productCategoryList => {
        this.productCategoryListSubject.next(productCategoryList)
      },
      err => {
        console.error('err', err);
      }
    );
  }

}
