import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AccountFacade } from '@dekao/auth/domain';
import { Observable } from 'rxjs';
import { map, take, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AccountGuard implements CanActivate {
  constructor(
    private _facade: AccountFacade,
    private _router: Router
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      return this._facade.accountUser$.pipe(
        take(1), map(account => {
          console.log(account);

          return !account
        }),
        tap(hasAccount => {
          if (!hasAccount) {
            this._router.navigate(['auth/login'])
          }
        }))
    // return true;
  }

}
