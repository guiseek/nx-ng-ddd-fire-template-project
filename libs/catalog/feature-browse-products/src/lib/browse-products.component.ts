import { Component, OnInit } from '@angular/core';
import { BrowseProductsFacade } from '@seek/catalog/domain';
import { Subject } from 'rxjs';

@Component({
  selector: 'catalog-browse-products',
  templateUrl: './browse-products.component.html',
  styleUrls: ['./browse-products.component.scss']
})
export class BrowseProductsComponent implements OnInit {

  productList$ = this.facade.productList$;

  search$ = new Subject<string>();

  constructor(
    private facade: BrowseProductsFacade
  ) { }

  onSearch(query = '') {
    this.search$.next(query);
  }

  ngOnInit() {
    this.load();
  }

  load(): void {
    this.facade.load();
  }

}

