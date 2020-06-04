import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { SelectComponent } from './select.component';
import { OptionGroupComponent } from './option-group/option-group.component';
import { OptionComponent } from './option/option.component';
import { TimeOptionComponent } from './option/time-option/time-option.component';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    MatIconModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule,
  ],
  declarations: [SelectComponent, OptionGroupComponent, OptionComponent, TimeOptionComponent],
  exports: [SelectComponent, OptionGroupComponent, OptionComponent, TimeOptionComponent],
})
export class SharedUiSelectModule {}
