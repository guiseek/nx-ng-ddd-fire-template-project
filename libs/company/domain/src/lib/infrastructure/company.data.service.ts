import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { config } from '@env/config';
import { FirestoreDataService } from '@seek/shared/domain';
import { Company } from './../entities/company';

@Injectable({ providedIn: 'root' })
export class CompanyDataService extends FirestoreDataService<Company> {
  private path = config.db.company.coll;

  constructor(protected afs: AngularFirestore) {
    super(afs)
  }
  load() {
    return this.query(this.path).valueChanges({ idField: 'id' });
  }
  loadOne(id: string) {
    return this.get(`${this.path}/${id}`).valueChanges();
  }
  add(data: Company) {
    return this.create(this.path, data);
  }
  edit({ id, ...data }: Partial<Company>) {
    return this.update(`${this.path}/${id}`, data);
  }

  remove({ id }: Pick<Company, 'id'>) {
    return this.delete(`${this.path}/${id}`);
  }
}