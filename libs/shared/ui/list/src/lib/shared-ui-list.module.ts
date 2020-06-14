import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { ListItemCommonComponent } from './list-item-common/list-item-common.component';
import { ListComponent } from "./list/list.component";

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
  ],
  declarations: [
    ListComponent,
    ListItemCommonComponent
  ],
  exports: [
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    ListComponent,
    ListItemCommonComponent
  ]
})
export class SharedUiListModule { }
