import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SubmitDirective } from './directives/submit.directive';

@NgModule({
  exports: [
    FormsModule,
    CommonModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    SubmitDirective
  ],
  declarations: [SubmitDirective]
})
export class SharedUiCommonModule {}
