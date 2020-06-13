import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { config } from '@env/config';
import { FirestoreDataService } from '@seek/shared/domain';
import { Observable } from 'rxjs';
import { Customer } from '../entities/customer';

@Injectable({ providedIn: 'root' })
export class CustomerDataService extends FirestoreDataService<Customer> {
  private path = config.db.customer.coll;

  constructor(
    protected afs: AngularFirestore
  ) { super(afs) }

  add(value: Customer) {
    return this.create(this.path, value);
  }

  load(): Observable<Customer[]> {
    return this.query(this.path)
      .valueChanges({ idField: 'id' });
  }
}