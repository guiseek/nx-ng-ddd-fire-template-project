import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ListItemMenuComponent } from '../list/list-item-menu/list-item-menu.component';
import { SharedUiListModule } from '../shared-ui-list.module';

@NgModule({
  imports: [
    CommonModule,
    SharedUiListModule
  ],
  declarations: [
    ListItemMenuComponent
  ],
  exports: [
    SharedUiListModule,
    ListItemMenuComponent
  ]
})
export class SharedUiListPhoneModule { }
