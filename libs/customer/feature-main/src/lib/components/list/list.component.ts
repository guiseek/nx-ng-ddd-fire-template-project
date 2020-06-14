import { SelectionModel } from '@angular/cdk/collections';
import { AfterContentInit, Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Customer } from '@seek/customer/domain';
import { RowClicked, TableCols } from '@seek/shared/domain';
import { distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'customer-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements AfterContentInit {
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  selection = new SelectionModel<Customer>(true, []);
  dataSource: MatTableDataSource<Customer>;

  @Output()
  rowClicked = new EventEmitter<RowClicked<Customer>>();

  @Output()
  selectionChange = new EventEmitter<Customer[]>();

  private _selected: Customer[] = this.selection.selected;

  @Input() set selected(values: Customer[]) {
    this.selection.select(...values || []);
  }
  get selected() {
    return this._selected
  }

  @Input() columns: TableCols<Customer> = [
    // 'id',
    'name',
    'description'
  ];
  @Input() set items(values: Customer[]) {
    this.dataSource = new MatTableDataSource(values);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  @Input() set filter(query: string) {
    this.dataSource
      .filter = (query || '')
        .trim().toLowerCase();
  }

  ngAfterContentInit() {
    this.selection.changed.pipe(
      distinctUntilChanged()
    ).subscribe(({ source, }) => {
      console.log(source.selected);
      this.selectionChange.emit(source.selected);
    })
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }
  checkboxLabel(row?: Customer): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.name + 1}`;
  }
}
