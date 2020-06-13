import { Component, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'seek-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class TabComponent {
  @Input()
  title: string;

  @Input()
  active = false;

  @Input()
  isCloseable = false;

  @Input()
  template: TemplateRef<any>;

  @Input()
  dataContext: any;
}

