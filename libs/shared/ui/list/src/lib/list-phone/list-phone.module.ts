import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ListComponent } from "../list/list.component";

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    ListComponent
  ],
  exports: [
    ListComponent
  ]
})
export class ListPhoneModule { }
