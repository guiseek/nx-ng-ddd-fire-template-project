import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Register } from '../dtos/register.dto';
import { AuthUser } from '../entities/auth-user';
import { AuthUserDataService } from '../infrastructure/auth-user.data.service';



@Injectable()
export class RegisterFacade {
  user$: Observable<AuthUser>;
  private authUserListSubject = new BehaviorSubject<AuthUser[]>([]);
  authUserList$ = this.authUserListSubject.asObservable();

  constructor(
    private authUserDataService: AuthUserDataService
  ) {
    this.user$ = this.authUserDataService.user$;
  }

  register({ email, password, displayName }: Register) {
    return this.authUserDataService
      .register(email, password, displayName);
  }
}
