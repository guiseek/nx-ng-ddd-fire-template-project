import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { TimeOptionComponent } from './time-select/time-option/time-option.component';
import { TimeSelectComponent } from './time-select/time-select.component';
import { DatePickerComponent } from './date-picker/date-picker.component';

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
  declarations: [TimeSelectComponent, TimeOptionComponent, DatePickerComponent],
  exports: [TimeSelectComponent, TimeOptionComponent, DatePickerComponent],
})
export class SharedUiDateTimeModule {}
