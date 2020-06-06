import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { AuthUser } from '../entities/auth-user';
import { Login } from '../entities/login';
import { AuthUserDataService } from '../infrastructure/auth-user.data.service';
import { AuthProvider } from './../infrastructure/auth-user.data.service';



@Injectable({ providedIn: 'root' })
export class LoginFacade {
  user$: Observable<AuthUser>;
  private authUserListSubject = new BehaviorSubject<AuthUser[]>([]);
  authUserList$ = this.authUserListSubject.asObservable();

  constructor(
    private authUserDataService: AuthUserDataService
  ) {
    this.user$ = this.authUserDataService.user$;
  }

  login(data: Login) {
    return this.authUserDataService.login(data);
  }

  social(provider: AuthProvider) {
    return this.authUserDataService.social(provider);
  }

  logout() {
    this.authUserDataService.logout();
  }
}
