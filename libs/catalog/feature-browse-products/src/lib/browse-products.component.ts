import { Component, OnInit} from '@angular/core';
import { BrowseProductsFacade } from '@dekao/catalog/domain';

@Component({
  selector: 'catalog-browse-products',
  templateUrl: './browse-products.component.html',
  styleUrls: ['./browse-products.component.scss']
})
export class BrowseProductsComponent implements OnInit {
    
    
    productList$ = this.browseProductsFacade.productList$;


    constructor(private browseProductsFacade: BrowseProductsFacade) {
    }

    
    ngOnInit() {
        this.load();
    }

    load(): void {
        this.browseProductsFacade.load();
    }

}

