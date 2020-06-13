import { CdkAccordion } from '@angular/cdk/accordion';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'seek-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent extends CdkAccordion implements OnInit {

  ngOnInit(): void {
  }

}
