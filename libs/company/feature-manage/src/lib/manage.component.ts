import { Component, OnInit } from '@angular/core';
import { BrowseCompaniesFacade } from '@seek/company/domain';

@Component({
  selector: 'company-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.scss']
})
export class ManageComponent implements OnInit {
  companies$ = this.facade.companies$;

  constructor(private facade: BrowseCompaniesFacade) { }

  ngOnInit() {
    this.facade.load();
  }
  add() {
  }
}

