import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Product } from '../entities/product';
import { ProductDataService } from '../infrastructure/product.data.service';


@Injectable({ providedIn: 'root' })
export class ShellFacade {

    private productListSubject = new BehaviorSubject<Product[]>([]); 
    productList$ = this.productListSubject.asObservable();

    constructor(private productDataService: ProductDataService) {
    }

    load(): void {
        this.productDataService.load().subscribe(
            productList => {
                this.productListSubject.next(productList)
            },
            err => {
                console.error('err', err);
            }
        );
    }

}
