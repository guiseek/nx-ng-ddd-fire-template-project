import { Component, ContentChildren, Input, QueryList } from '@angular/core';
import { OptionComponent } from './../option/option.component';

@Component({
  selector: 'seek-option-group',
  templateUrl: './option-group.component.html',
  styleUrls: ['./option-group.component.scss']
})
export class OptionGroupComponent {
  @ContentChildren(OptionComponent)
  public selectOptions: QueryList<OptionComponent>;

	@Input() public label: string;
}