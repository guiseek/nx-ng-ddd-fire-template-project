import { ChangeDetectionStrategy, Component, Input, ViewChild } from '@angular/core';
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

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  dataSource: MatTableDataSource<Product>;
  columns: TableCols<Product> = ['id', 'name', 'price', 'created'];

  @Input() set items(values: Product[]) {
    this.dataSource = new MatTableDataSource(values);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  @Input() set filter(query: string) {
    if (query) {
      this.dataSource.filter = query
        .toLowerCase().trim();
    }
  }
}
