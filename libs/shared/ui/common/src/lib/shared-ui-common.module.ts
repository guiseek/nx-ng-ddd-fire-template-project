import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  exports: [
    FormsModule,
    CommonModule,
    FlexLayoutModule,
    ReactiveFormsModule
  ]
})
export class SharedUiCommonModule {}
