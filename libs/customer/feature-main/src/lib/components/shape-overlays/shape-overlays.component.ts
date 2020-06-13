import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'customer-shape-overlays',
  template: `
    <p>
      shape-overlays works!
    </p>
  `,
  styleUrls: ['./shape-overlays.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShapeOverlaysComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
