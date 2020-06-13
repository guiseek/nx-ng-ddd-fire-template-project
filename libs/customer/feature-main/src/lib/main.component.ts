import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Customer, MainFacade } from '@seek/customer/domain';
import { TableCols } from '@seek/shared/domain';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'customer-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, OnDestroy {

  navLinks = [
    { path: '/', label: 'Clientes' },
    { path: '/new', label: 'Novo' }
  ];

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  dataSource: MatTableDataSource<Customer>;

  columns: TableCols<Customer> = [
    'id', 'name', 'description'
  ];

  destroy$ = new Subject<void>();

  customerList$ = this.mainFacade.customerList$.pipe(
    takeUntil(this.destroy$))

    .subscribe(values => {
      this.dataSource = new MatTableDataSource(values);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })

  constructor(private mainFacade: MainFacade) {
  }

  filter(query: string) {
    this.dataSource
      .filter = (query || '')
        .trim().toLowerCase();
  }

  ngOnInit() {
    this.load();
  }

  load(): void {
    this.mainFacade.load();
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}

