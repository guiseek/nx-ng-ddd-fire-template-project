import { EventEmitter, Input, Output } from '@angular/core';

export abstract class ListItemBaseComponent {
  @Input() item: any;
  @Output() clicked = new EventEmitter();
}