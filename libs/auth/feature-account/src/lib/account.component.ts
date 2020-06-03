import { Component, OnInit} from '@angular/core';
import { AccountFacade } from '@dekao/auth/domain';

@Component({
  selector: 'auth-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
    
    
    accountUserList$ = this.accountFacade.accountUserList$;


    constructor(private accountFacade: AccountFacade) {
    }

    
    ngOnInit() {
        this.load();
    }

    load(): void {
        this.accountFacade.load();
    }

}

