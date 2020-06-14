import { Component, forwardRef } from '@angular/core';
import { ListItemBaseComponent } from '../list-item-base.component';

@Component({
  selector: 'seek-list-item',
  templateUrl: './list-item-menu.component.html',
  styleUrls: ['./list-item-menu.component.scss'],
  providers: [
    {
      provide: ListItemBaseComponent,
      useExisting: forwardRef(() => ListItemMenuComponent)
    }
  ]
})
export class ListItemMenuComponent extends ListItemBaseComponent {
  isMenu = false;
}
