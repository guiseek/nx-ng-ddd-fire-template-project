import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { AuthService } from './../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private service: AuthService,
    private router: Router
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      return this.service.getUser().pipe(
        map(user => (!!user && user.emailVerified)),
        map((user) => {
          console.log(user);
          if (!user) {
            this.router.navigate(['/auth'], {
              queryParamsHandling: 'merge',
              queryParams: { goTo: state.url }
            })
          }
          return user;
        }),
        take(1)
      );

  }

}
