import { Component } from '@angular/core';
import { ListItemBaseComponent } from '../list/list-item-base.component';

@Component({
  selector: 'seek-list-item-common',
  templateUrl: './list-item-common.component.html',
  styleUrls: ['./list-item-common.component.scss'],
  // providers: [
  //   {
  //     provide: ListItemBaseComponent,
  //     useExisting: forwardRef(() => ListItemCommonComponent)
  //   }
  // ]
})
export class ListItemCommonComponent extends ListItemBaseComponent {
}
