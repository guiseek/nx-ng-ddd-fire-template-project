import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';
import { Company } from '../entities/company';
import * as CompanyActions from './company.actions';


export const COMPANY_FEATURE_KEY = 'company';

export interface State extends EntityState<Company> {
  selectedId?: string | number; // which Company record has been selected
  loaded: boolean; // has the Company list been loaded
  error?: string | null; // last none error (if any)
}

export interface CompanyPartialState {
  readonly [COMPANY_FEATURE_KEY]: State;
}

export const companyAdapter: EntityAdapter<Company> = createEntityAdapter<
  Company
>();

export const initialState: State = companyAdapter.getInitialState({
  // set initial required properties
  loaded: false,
});

const companyReducer = createReducer(
  initialState,
  // on(CompanyActions.loadCompanies, (state) => ({
  //   ...state,
  //   loaded: false,
  //   error: null,
  // })),
  on(CompanyActions.loadCompanies, (state) => {
    console.log(state);

    return {
      ...state,
    loaded: false,
    error: null,
    }
  }),
  on(
    CompanyActions.loadCompaniesSuccess,
    (state, { companies }) => {
      console.log(state, companies);

      return companyAdapter.setAll(companies, { ...state, loaded: true })
    }
  ),
  on(CompanyActions.loadCompaniesFailure, (state, { error }) => ({
    ...state,
    error,
  })),
  on(CompanyActions.loadCompany, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(CompanyActions.loadCompanySuccess, (state, { company }) =>
    companyAdapter.addOne(company, { ...state, loaded: true })
  ),
  on(CompanyActions.loadCompanyFailure, (state, { error }) => ({
    ...state,
    error,
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return companyReducer(state, action);
}
