import { Component, Input } from '@angular/core';

@Component({
  selector: 'dekao-time-option',
  template: `
    <span>
      {{ time | date:'hh:mm' }}
    </span>
    <small>
      {{ time | date:'a' }}
    </small>
  `,
  styleUrls: ['./time-option.component.scss']
})
export class TimeOptionComponent {
  @Input() public time: Date | null;
}
