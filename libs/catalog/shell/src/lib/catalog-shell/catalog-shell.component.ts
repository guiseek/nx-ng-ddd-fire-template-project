import { Component, OnInit, ViewChild } from '@angular/core';
import { NavTabsComponent } from '@seek/shared/ui/layout';

@Component({
  selector: 'seek-catalog-shell',
  templateUrl: './catalog-shell.component.html',
  styleUrls: ['./catalog-shell.component.scss']
})
export class CatalogShellComponent implements OnInit {

  @ViewChild(NavTabsComponent) tabsComponent: NavTabsComponent;

  constructor() { }

  ngOnInit(): void {
  }

  openAdress() {

  }

  // tabLoadTimes: Date[] = [];

  // getTimeLoaded(index: number) {
  //   if (!this.tabLoadTimes[index]) {
  //     this.tabLoadTimes[index] = new Date();
  //   }

  //   console.log(index, this.tabLoadTimes[index]);

  //   return this.tabLoadTimes[index];
  // }

}
