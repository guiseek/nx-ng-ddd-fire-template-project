import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({ providedIn: 'root' })
export class AuthService {

  constructor(
    private afa: AngularFireAuth
  ) { }

  get currentUser() {
    return this.afa.currentUser;
  }
  getUser() {
    return this.afa.user;
  }
  resetPassword(email: string, { url = '', app = false }) {
    return this.afa
      .sendPasswordResetEmail(email, {
        handleCodeInApp: app, url: url
      });
  }
}
