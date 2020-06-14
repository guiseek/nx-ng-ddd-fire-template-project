import { Component, forwardRef } from '@angular/core';
import { ListItemBaseComponent } from '../list-item-base.component';

@Component({
  selector: 'seek-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss'],
  providers: [
    {
      provide: ListItemBaseComponent,
      useExisting: forwardRef(() => ListItemComponent)
    }
  ]
})
export class ListItemComponent extends ListItemBaseComponent {
  notMenu = false;
}