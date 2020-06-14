import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  companyAdapter, CompanyPartialState, COMPANY_FEATURE_KEY,
  State
} from './company.reducer';

// Lookup the 'Company' feature state managed by NgRx
export const getCompanyState = createFeatureSelector<
  CompanyPartialState,
  State
>(COMPANY_FEATURE_KEY);

const { selectAll, selectEntities } = companyAdapter.getSelectors();

export const getAllCompanies = createSelector(getCompanyState, (state: State) =>
  selectAll(state)
);

export const getCompaniesLoaded = createSelector(
  getCompanyState,
  (state: State) => state.loaded
);

export const getCompanyError = createSelector(
  getCompanyState,
  (state: State) => state.error
);

export const getCompanyEntities = createSelector(
  getCompanyState,
  (state: State) => selectEntities(state)
);

export const getSelectedId = createSelector(
  getCompanyState,
  (state: State) => state.selectedId
);

export const getSelected = createSelector(
  getCompanyEntities,
  getSelectedId,
  (entities, selectedId) => selectedId && entities[selectedId]
);
