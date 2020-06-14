import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ListItemComponent } from '../list/list-item/list-item.component';
import { SharedUiListModule } from '../shared-ui-list.module';

@NgModule({
  imports: [
    CommonModule,
    SharedUiListModule
  ],
  declarations: [
    // ListComponent,
    ListItemComponent
  ],
  exports: [
    SharedUiListModule,
    ListItemComponent
  ]
})
export class SharedUiListDesktopModule { }
