// import { CompanyEntity } from './company.models';
// import { companyAdapter, initialState } from './company.reducer';
// import * as CompanySelectors from './company.selectors';

// describe('Company Selectors', () => {
//   const ERROR_MSG = 'No Error Available';
//   const getCompanyId = (it) => it['id'];
//   const createCompanyEntity = (id: string, name = '') =>
//     ({
//       id,
//       name: name || `name-${id}`,
//     } as CompanyEntity);

//   let state;

//   beforeEach(() => {
//     state = {
//       company: companyAdapter.addAll(
//         [
//           createCompanyEntity('PRODUCT-AAA'),
//           createCompanyEntity('PRODUCT-BBB'),
//           createCompanyEntity('PRODUCT-CCC'),
//         ],
//         {
//           ...initialState,
//           selectedId: 'PRODUCT-BBB',
//           error: ERROR_MSG,
//           loaded: true,
//         }
//       ),
//     };
//   });

//   describe('Company Selectors', () => {
//     it('getAllCompanies() should return the list of Company', () => {
//       const results = CompanySelectors.getAllCompanies(state);
//       const selId = getCompanyId(results[1]);

//       expect(results.length).toBe(3);
//       expect(selId).toBe('PRODUCT-BBB');
//     });

//     it('getSelected() should return the selected Entity', () => {
//       const result = CompanySelectors.getSelected(state);
//       const selId = getCompanyId(result);

//       expect(selId).toBe('PRODUCT-BBB');
//     });

//     it("getCompaniesLoaded() should return the current 'loaded' status", () => {
//       const result = CompanySelectors.getCompaniesLoaded(state);

//       expect(result).toBe(true);
//     });

//     it("getCompanyError() should return the current 'error' state", () => {
//       const result = CompanySelectors.getCompanyError(state);

//       expect(result).toBe(ERROR_MSG);
//     });
//   });
// });
