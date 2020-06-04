import { Component, Input, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'dekao-option',
  template: `
    <ng-template #label>
      <ng-content></ng-content>
    </ng-template>
  `,
  styleUrls: ['./option.component.scss']
})
export class OptionComponent {
  @ViewChild('label') public templateRef: TemplateRef<any>;
	@Input() public value: any;
}
