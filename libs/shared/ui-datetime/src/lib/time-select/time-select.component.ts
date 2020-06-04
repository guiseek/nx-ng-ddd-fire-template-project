import { AfterContentInit, Component, ContentChildren, EventEmitter, forwardRef, Input, OnChanges, Output, QueryList, SimpleChanges } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { TimeOption } from './time-option/time-option';
import { TimeOptionComponent } from './time-option/time-option.component';

@Component({
  selector: 'dekao-time-select',
  templateUrl: './time-select.component.html',
  styleUrls: ['./time-select.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TimeSelectComponent),
      multi: true,
    },
  ],
})
export class TimeSelectComponent implements OnChanges, AfterContentInit, ControlValueAccessor {
  @Input() public placeholder: string;
  @ContentChildren(TimeOptionComponent) public selectOptions: QueryList<
    TimeOptionComponent
  >;

  @Output() public valueChange = new EventEmitter();

  public options: TimeOption[];

  public selected: Date;
  public disabled = false;
  public touched = false;
  private internalValue: TimeOption;

  public onChange: any = _ => {
    /*Empty*/
  };
  public onTouched: any = _ => { };

  public onSelected($event) {
    this.selected = $event.value;
    this.onChange($event.value);
    this.valueChange.emit($event.value);
  }

  public ngOnChanges(change: SimpleChanges) {
    if (change.options) {
      if (change.options.isFirstChange()) {
        return;
      }
      if (change.options.currentValue !== change.options.previousValue) {
        this.selected = null; // Resetting the model to show placeholder
        this.onChange(null);
      }
    }
  }

  public ngAfterContentInit() {
    this.options = this.getOptions(this.selectOptions);
    // this.optionsGroups = this.getOptionGroups(this.selectOptionGroups);

    // this.selectOptionGroups.changes.subscribe(
    // 	(optionGroups: QueryList<SelectOptionGroupComponent>) =>
    // 		(this.optionsGroups = this.getOptionGroups(optionGroups)),
    // );

    this.selectOptions.changes.subscribe(
      (options: QueryList<TimeOption>) =>
        (this.options = options.length ? this.getOptions(options) : []),
    );
  }

  public writeValue(value: any): void {
    this.internalValue = value;
    this.onChange(this.internalValue);
    this.valueChange.emit(value);
    this.selected = value;
  }

  public registerOnChange(onChange: any): void {
    this.onChange = onChange;
  }

  public registerOnTouched(onTouched: any): void {
    const self = this;
    this.onTouched = (arg: any) => {
      self.touched = true;
      onTouched(arg);
    };
  }

  public setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  private getOptions(list: QueryList<TimeOptionComponent>): TimeOption[] {
    return list.length
      ? list.map((item: TimeOptionComponent) => ({
        value: item.value,
        templateRef: item.templateRef,
      }))
      : [];
  }
}
