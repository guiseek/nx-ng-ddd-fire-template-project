import { createAction, props } from '@ngrx/store';
import { Company } from '../entities/company';

export const loadCompanies = createAction('[Companies] Load Companies');

export const loadCompaniesSuccess = createAction(
  '[Companies] Load Companies Success',
  props<{ companies: Company[] }>()
);

export const loadCompaniesFailure = createAction(
  '[Company] Load Company Failure',
  props<{ error: any }>()
);

export const addCompany = createAction(
  '[Company] Add Company',
  props<{ company: Company }>()
);

export const addCompanySuccess = createAction(
  '[Company] Add Company Success'
);

export const addCompanyFailure = createAction(
  '[Company] Add Company Failure',
  props<{ error: any }>()
);

export const updateCompany = createAction(
  '[Company] Update Company',
  props<{ company: Partial<Company> }>()
);

export const updateCompanySuccess = createAction(
  '[Company] Update Company Success'
);

export const updateCompanyFailure = createAction(
  '[Company] Update Company Failure',
  props<{ error: any }>()
);

export const deleteCompany = createAction(
  '[Company] Delete Company',
  props<{ id: Pick<Company, 'id'> }>()
);

export const deleteCompanySuccess = createAction(
  '[Company] Delete Company Success'
);

export const deleteCompanyFailure = createAction(
  '[Company] Delete Company Failure',
  props<{ error: any }>()
);


export const loadCompany = createAction(
  '[Company] Load Company',
  props<{ id: string }>()
);

export const loadCompanySuccess = createAction(
  '[Company] Load Company Success',
  props<{ company: Company }>()
);

export const loadCompanyFailure = createAction(
  '[Company] Load Company Failure',
  props<{ error: any }>()
);
