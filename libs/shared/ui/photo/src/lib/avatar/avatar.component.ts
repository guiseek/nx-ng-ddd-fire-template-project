import { Component, EventEmitter, HostBinding, Input, Output } from '@angular/core';

@Component({
  selector: 'seek-avatar',
  template: `
    <div
      (click)="clicked.emit()"
    >
      <img
        [src]="url"
        [alt]="alt"
        (load)="load = true"
        (error)="url = null"
        *ngIf="!!url"
      />
    </div>
  `,
  styleUrls: ['./avatar.component.scss']
})
export class AvatarComponent {
  @Input() size = '512px';

  @HostBinding('style.width') get width() {
    return this.size;
  }
  @HostBinding('style.height') get height() {
    return this.size;
  }

  load: boolean;
  url: string;

  @Input() set src(src: string) {
    this.load = false;
    this.url = src;
  }

  @Input() alt: string;

  @HostBinding('class.seek-avatar') clazz = true;

  // Avatar color customization
  // @HostBinding('attr.color')
  // @Input() color: ThemePalette;

  // Avatar shape
  @HostBinding('attr.shape')
  @Input() shape: 'rounded' | 'squared' = 'rounded';

  @Output() clicked = new EventEmitter();
}
