import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
    private router: Router,
    private facade: BrowseProductsFacade
  ) { }

  onSearch(query = '') {
    this.search$.next(query);
  }

  exec(value) {
    console.log(value);
  }

  ngOnInit() {
    this.load();
  }

  load(): void {
    this.facade.load();
  }

}

