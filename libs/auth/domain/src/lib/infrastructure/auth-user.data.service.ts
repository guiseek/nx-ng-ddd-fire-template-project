import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { Observable, of } from 'rxjs';
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

  login({ email, password }: Login) {
    return this.afa.signInWithEmailAndPassword(
      email, password
    );
  }

  social(provider) {
    return this.afa.signInWithRedirect(
      getProvider(provider)
    );
  }

  logout() {
    return this.afa.signOut();
  }


  load(): Observable<AuthUser[]> {

    // Uncomment if needed
    /*
    const url = '...';
    const params = new HttpParams().set('param', 'value');
    const headers = new HttpHeaders().set('Accept', 'application/json');
    return this.http.get<AuthUser[]>(url, {params, headers});
    */

    return of([
      // { id: 1, name: 'Lorem ipsum', description: 'Lorem ipsum dolor sit amet' },
      // { id: 2, name: 'At vero eos', description: 'At vero eos et accusam et justo duo dolores' },
      // { id: 3, name: 'Duis autem', description: 'Duis autem vel eum iriure dolor in hendrerit' },
    ] as any);
  }
}