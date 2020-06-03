import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { AccountUser } from '../entities/account-user';
import { AccountUserDataService } from '../infrastructure/account-user.data.service';


@Injectable({ providedIn: 'root' })
export class AccountFacade {

    private accountUserListSubject = new BehaviorSubject<AccountUser[]>([]); 
    accountUserList$ = this.accountUserListSubject.asObservable();

    constructor(private accountUserDataService: AccountUserDataService) {
    }

    load(): void {
        this.accountUserDataService.load().subscribe(
            accountUserList => {
                this.accountUserListSubject.next(accountUserList)
            },
            err => {
                console.error('err', err);
            }
        );
    }

}
