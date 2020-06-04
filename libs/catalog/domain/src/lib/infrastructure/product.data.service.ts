import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FirestoreDataService } from '@dekao/shared/domain';
import { config } from '@env/config';
import { Observable, of } from 'rxjs';
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

    // Uncomment if needed
    /*
    const url = '...';
    const params = new HttpParams().set('param', 'value');
    const headers = new HttpHeaders().set('Accept', 'application/json');
    return this.http.get<Product[]>(url, {params, headers});
    */

    return of([
      // { id: '1', name: 'Lorem ipsum', description: 'Lorem ipsum dolor sit amet' },
      // { id: '2', name: 'At vero eos', description: 'At vero eos et accusam et justo duo dolores' },
      // { id: '3', name: 'Duis autem', description: 'Duis autem vel eum iriure dolor in hendrerit' },
    ]);
  }
}