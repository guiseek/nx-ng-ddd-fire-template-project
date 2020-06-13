import { Component, OnInit } from '@angular/core';
import { Customer, MainFacade } from '@seek/customer/domain';
import { TableCols } from '@seek/shared/domain';

@Component({
  selector: 'customer-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  columns: TableCols<Customer> = [
    'select', 'id', 'name'
  ];
  selected: Customer[];

  customerList$ = this.mainFacade.customerList$;

  constructor(private mainFacade: MainFacade) {
  }

  ngOnInit(): void {
  }

  onClick(value) {
    console.log(value);
  }
  onSelect(value) {
    console.log(value);
  }
}
