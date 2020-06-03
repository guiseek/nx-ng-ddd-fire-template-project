import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FirestoreDataService } from '@dekao/shared/domain';
import { Observable, of } from 'rxjs';
import { AccountUser } from '../entities/account-user';

@Injectable({ providedIn: 'root' })
export class AccountUserDataService extends FirestoreDataService<AccountUser> {
  private path = 'users';

  constructor(
    protected afs: AngularFirestore
  ) { super(afs); }

  findOneByUid(uid: string) {
    return this.get(`${this.path}/${uid}`);
  }
  add(value: AccountUser) {
    return this.create(this.path, value)
  }
  edit({ id, ...value }: AccountUser) {
    return this.update(`${this.path}/${id}`, { id, ...value });
  }
  // get(path: string): import("@angular/fire/firestore/angular-fire-firestore").AngularFirestoreDocument<AccountUser> {
  //   throw new Error("Method not implemented.");
  // }
  // queryGroup(collection: string, query: import("@angular/fire/firestore/interfaces").QueryGroupFn): import("@angular/fire/firestore/angular-fire-firestore").AngularFirestoreCollectionGroup<AccountUser> {
  //   throw new Error("Method not implemented.");
  // }
  // query(path: string, query?: import("@angular/fire/firestore/interfaces").QueryFn): import("@angular/fire/firestore/angular-fire-firestore").AngularFirestoreCollection<AccountUser> {
  //   throw new Error("Method not implemented.");
  // }
  // delete(path: string) {
  //   // throw new Error("Method not implemented.");
  // }

  load(): Observable<AccountUser[]> {

    // Uncomment if needed
    /*
    const url = '...';
    const params = new HttpParams().set('param', 'value');
    const headers = new HttpHeaders().set('Accept', 'application/json');
    return this.http.get<AccountUser[]>(url, {params, headers});
    */

    return of([
      // {id: 1, name: 'Lorem ipsum', description: 'Lorem ipsum dolor sit amet'},
      // {id: 2, name: 'At vero eos', description: 'At vero eos et accusam et justo duo dolores'},
      // {id: 3, name: 'Duis autem', description: 'Duis autem vel eum iriure dolor in hendrerit'},
    ]);
  }
}