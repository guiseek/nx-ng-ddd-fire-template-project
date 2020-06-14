import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { loadCompanies } from '../+state/company.actions';
import { CompanyPartialState } from '../+state/company.reducer';
import { Company } from '../entities/company';
import { addCompany, deleteCompany, updateCompany } from './../+state/company.actions';
import { getAllCompanies, getCompaniesLoaded } from './../+state/company.selectors';

@Injectable()
export class BrowseCompaniesFacade {

  loaded$ = this.store.pipe(select(getCompaniesLoaded));
  companies$ = this.store.pipe(select(getAllCompanies));

  constructor(private store: Store<CompanyPartialState>) {
  }

  load(): void {
    this.store.dispatch(loadCompanies());
  }

  add(company: Company) {
    this.store.dispatch(addCompany({ company }));
  }

  update(company: Company) {
    this.store.dispatch(updateCompany({ company }));
  }

  delete(id: Pick<Company, 'id'>) {
    this.store.dispatch(deleteCompany({ id }));
  }
}
