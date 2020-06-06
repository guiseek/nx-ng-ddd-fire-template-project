import { Component, Input, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'seek-time-option',
  template: `
    <ng-template #label>
      <ng-content></ng-content>
    </ng-template>
  `,
  styleUrls: ['./time-option.component.scss']
})
export class TimeOptionComponent {
  @ViewChild('label') public templateRef: TemplateRef<any>;
	@Input() public value: Date | null;
}
