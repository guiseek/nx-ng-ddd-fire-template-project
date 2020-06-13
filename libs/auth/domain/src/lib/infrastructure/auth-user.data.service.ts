import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthUser } from '../entities/auth-user';
import { Login } from '../entities/login';

export type AuthProvider = 'google' | 'github';
const getProvider = (provider: AuthProvider) => {
  switch (true) {
    case provider.indexOf('google') > -1: return new auth.GoogleAuthProvider();
    case provider.indexOf('github') > -1: return new auth.GithubAuthProvider();
  }
}

@Injectable({ providedIn: 'root' })
export class AuthUserDataService {
  user$: Observable<AuthUser>;

  constructor(
    private afa: AngularFireAuth
  ) {
    this.user$ = this.afa.authState.pipe(
      map(user => !!user ? user : null)
    );
  }

  user() {
    return this.afa.currentUser;
  }

  login({ email, password }: Login) {
    return this.afa.signInWithEmailAndPassword(
      email, password
    );
  }

  async register(email: string, password: string, displayName: string, phone = '') {
    try {
      const { user, additionalUserInfo } = await this.afa
        .createUserWithEmailAndPassword(email, password);

      if (additionalUserInfo.isNewUser) {
        return await user.updateProfile({ displayName });
      }

    } catch (error) {
      console.error(error);
      throw new Error(error);
    }
  }

  social(provider: AuthProvider) {
    return this.afa.signInWithRedirect(
      getProvider(provider)
    );
  }

  logout() {
    return this.afa.signOut();
  }
}