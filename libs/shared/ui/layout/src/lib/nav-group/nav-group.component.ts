import { CdkAccordionItem } from '@angular/cdk/accordion';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'seek-nav-group',
  templateUrl: './nav-group.component.html',
  styleUrls: ['./nav-group.component.scss']
})
export class NavGroupComponent extends CdkAccordionItem implements OnInit {
  @Input() label: string;
  @Input() expanded = false;
  @Input() children;
  ngOnInit(): void {
  }

}
