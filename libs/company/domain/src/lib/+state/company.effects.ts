import { Injectable } from '@angular/core';
import { Actions, createEffect } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/angular';
import { from } from 'rxjs';
import { map } from 'rxjs/operators';
import { CompanyDataService } from '../infrastructure/company.data.service';
import * as CompanyActions from './company.actions';
// import {
//   addCompany, addCompanyFailure, addCompanySuccess,
//   deleteCompany, deleteCompanyFailure, deleteCompanySuccess,
//   loadCompanies, loadCompaniesFailure, loadCompaniesSuccess,
//   loadCompany, loadCompanyFailure, loadCompanySuccess,
//   updateCompany, updateCompanyFailure, updateCompanySuccess
// } from './company.actions';
import * as fromCompany from './company.reducer';


@Injectable()
export class CompanyEffects {
  loadCompanies$ = createEffect(() =>
    this.dataPersistence.fetch(CompanyActions.loadCompanies, {
      run: (
        action: ReturnType<typeof CompanyActions.loadCompanies>,
        state: fromCompany.CompanyPartialState
      ) => {
        return this.companyService.load().pipe(map(
          (companies = []) =>
            CompanyActions.loadCompaniesSuccess({ companies })
        ));
      },
      onError: (
        action: ReturnType<typeof CompanyActions.loadCompanies>,
        error
      ) => CompanyActions.loadCompaniesFailure({ error }),
    })
  );

  loadCompany$ = createEffect(() =>
    this.dataPersistence.fetch(CompanyActions.loadCompany, {
      run: (
        action: ReturnType<typeof CompanyActions.loadCompany>,
        state: fromCompany.CompanyPartialState
      ) => {
        return this.companyService.loadOne(action.id).pipe(map(
          (company) =>
            CompanyActions.loadCompanySuccess({ company })
        ));
      },
      onError: (
        action: ReturnType<typeof CompanyActions.loadCompany>,
        error
      ) => CompanyActions.loadCompanyFailure({ error }),
    })
  );

  addCompany$ = createEffect(() =>
    this.dataPersistence.fetch(CompanyActions.addCompany, {
      run: (
        action: ReturnType<typeof CompanyActions.addCompany>,
        state: fromCompany.CompanyPartialState
      ) => from(this.companyService.add(action.company)).pipe(map(
        () =>
          CompanyActions.addCompanySuccess())
      ),
      onError: (
        action: ReturnType<typeof CompanyActions.addCompany>,
        error
      ) => CompanyActions.addCompanyFailure({ error }),
    })
  );

  updateCompany$ = createEffect(() =>
    this.dataPersistence.fetch(CompanyActions.updateCompany, {
      run: (
        action: ReturnType<typeof CompanyActions.updateCompany>,
        state: fromCompany.CompanyPartialState
      ) => from(this.companyService.edit(action.company)).pipe(map(
        () =>
          CompanyActions.updateCompanySuccess())
      ),
      onError: (
        action: ReturnType<typeof CompanyActions.updateCompany>,
        error
      ) => CompanyActions.updateCompanyFailure({ error })
    })
  );

  deleteCompany$ = createEffect(() =>
    this.dataPersistence.fetch(CompanyActions.deleteCompany, {
      run: (
        action: ReturnType<typeof CompanyActions.deleteCompany>,
        state: fromCompany.CompanyPartialState
      ) => from(this.companyService.edit(action.id)).pipe(map(
        () =>
          CompanyActions.deleteCompanySuccess())
      ),
      onError: (
        action: ReturnType<typeof CompanyActions.deleteCompany>,
        error
      ) =>
        CompanyActions.deleteCompanyFailure({ error })
    })
  );

  constructor(
    private actions$: Actions,
    private companyService: CompanyDataService,
    private dataPersistence: DataPersistence<fromCompany.CompanyPartialState>
  ) { }
}
