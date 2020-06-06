import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Product } from '@seek/catalog/domain';
import { TableCols } from '@seek/shared/domain';


@Component({
  selector: 'catalog-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListItemsComponent {
  @Output()
  rowClicked = new EventEmitter<{
    product: Product,
    useCase: string
  }>();

  @ViewChild(MatSort)
  sort: MatSort;

  @ViewChild(MatPaginator)
  paginator: MatPaginator;

  dataSource: MatTableDataSource<Product>;

  @Input() columns: TableCols<Product> = [
    'id', 'name', 'price', 'description'
  ];

  @Input() set items(values: Product[]) {
    this.dataSource = new MatTableDataSource(values);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  @Input() set filter(query: string) {
    this.dataSource
      .filter = (query || '')
        .trim().toLowerCase();
  }
}
