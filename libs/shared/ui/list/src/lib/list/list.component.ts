import { AfterContentInit, Component, ContentChildren, QueryList } from '@angular/core';
import { ListItemBaseComponent } from './list-item-base.component';

@Component({
  selector: 'seek-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent extends ListItemBaseComponent  implements AfterContentInit {

  // @Input() items: Array<ListItem>;

  @ContentChildren(ListItemBaseComponent) listBaseComponent: QueryList<ListItemBaseComponent>;


  ngAfterContentInit() {
    console.log(this.listBaseComponent);
    setTimeout(() => {
      console.log(this.listBaseComponent);
    }, 3000)

  }
}
