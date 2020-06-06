import { Component, OnInit } from '@angular/core';
import { AccountFacade } from '@seek/auth/domain';

@Component({
  selector: 'auth-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {


  accountUserList$ = this.accountFacade.accountUserList$;
  accountUser$ = this.accountFacade.accountUser$;
  user$ = this.accountFacade.user$;

  constructor(private accountFacade: AccountFacade) {
  }


  ngOnInit() {
    this.load();
    this.accountFacade.accountUser$.subscribe(
      account => {
        console.log(account)
      }
    )
  }

  load(): void {
    this.accountFacade.load();
  }

}

