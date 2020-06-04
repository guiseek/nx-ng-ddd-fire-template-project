import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { AccountUser } from '../entities/account-user';
import { AccountUserDataService } from '../infrastructure/account-user.data.service';
import { AuthUserDataService } from './../infrastructure/auth-user.data.service';



@Injectable({ providedIn: 'root' })
export class AccountFacade {

  private accountUserListSubject = new BehaviorSubject<AccountUser[]>([]);
  accountUserList$ = this.accountUserListSubject.asObservable();

  accountUserSubject = new BehaviorSubject<AccountUser>(null);
  accountUser$ = this.accountUserSubject.asObservable();

  constructor(
    private _authUser: AuthUserDataService,
    private _accountUser: AccountUserDataService
  ) {
    this._authUser.user$.pipe(
      switchMap(({ uid }) =>
        this._accountUser.byId(uid).valueChanges()
      ))
      .subscribe(account => {
        this.accountUserSubject.next(account)
      });
  }

  load(): void {
    this._accountUser.load().subscribe(
      accountUserList => {
        this.accountUserListSubject.next(accountUserList)
      },
      err => {
        console.error('err', err);
      }
    );
  }

}
