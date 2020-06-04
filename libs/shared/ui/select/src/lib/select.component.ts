import { AfterContentInit, Component, ContentChildren, EventEmitter, forwardRef, Input, OnChanges, Output, QueryList, SimpleChanges } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { SelectOptionGroup } from './option-group/option-group';
import { OptionGroupComponent } from './option-group/option-group.component';
import { Option } from './option/option';
import { OptionComponent } from './option/option.component';

@Component({
  selector: 'dekao-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectComponent),
      multi: true,
    },
  ],
})
export class SelectComponent implements OnChanges, AfterContentInit, ControlValueAccessor {
  @Input()
  public placeholder: string;

  @ContentChildren(OptionComponent)
  public selectOptions: QueryList<OptionComponent>;

  @ContentChildren(OptionGroupComponent)
  public selectOptionGroups: QueryList<OptionGroupComponent>;

  public optionsGroups: SelectOptionGroup[];

  public options: Option[];

  public selected: any;
  public disabled = false;
  public touched = false;
  private internalValue: Option;

  @Output()
  public valueChange = new EventEmitter();


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
    this.optionsGroups = this.getOptionGroups(this.selectOptionGroups);

    this.selectOptionGroups.changes.subscribe(
      (optionGroups: QueryList<OptionGroupComponent>) =>
        (this.optionsGroups = this.getOptionGroups(optionGroups)),
    );

    this.selectOptions.changes.subscribe(
      (options: QueryList<Option>) =>
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

  private getOptionGroups(list: QueryList<OptionGroupComponent>) {
    return list.length
      ? list.map(group => ({
        label: group.label,
        options: this.getOptions(group.selectOptions),
      }))
      : [];
  }

  private getOptions(list: QueryList<OptionComponent>): Option[] {
    return list.length
      ? list.map((item: OptionComponent) => ({
        value: item.value,
        templateRef: item.templateRef,
      }))
      : [];
  }
}
