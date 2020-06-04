import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FirestoreDataService } from '@dekao/shared/domain';
import { config } from '@env/config';
import { Observable, of } from 'rxjs';
import { AccountUser } from '../entities/account-user';

@Injectable({ providedIn: 'root' })
export class AccountUserDataService extends FirestoreDataService<AccountUser> {
  private path = config.db.auth.coll;

  constructor(
    protected afs: AngularFirestore
  ) { super(afs); }

  byId(uid: string) {
    return this.get(`${this.path}/${uid}`);
  }
  add(value: AccountUser) {
    return this.create(this.path, value)
  }
  edit({ id, ...value }: AccountUser) {
    return this.update(`${this.path}/${id}`, { id, ...value });
  }

  load(): Observable<AccountUser[]> {
    return of([
      // {id: 1, name: 'Lorem ipsum', description: 'Lorem ipsum dolor sit amet'},
      // {id: 2, name: 'At vero eos', description: 'At vero eos et accusam et justo duo dolores'},
      // {id: 3, name: 'Duis autem', description: 'Duis autem vel eum iriure dolor in hendrerit'},
    ]);
  }
}