import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { config } from '@env/config';
import { FirestoreDataService } from '@seek/shared/domain';
import { Observable } from 'rxjs';
import { Product } from '../entities/product';

@Injectable({ providedIn: 'root' })
export class ProductDataService extends FirestoreDataService<Product> {
  private path = config.db.catalog.coll;

  constructor(
    protected afs: AngularFirestore
  ) { super(afs) }

  add(value: Product) {
    return this.create(this.path, value);
  }

  load(): Observable<Product[]> {
    return this.query(this.path)
      .valueChanges({ idField: 'id' });
  }
}