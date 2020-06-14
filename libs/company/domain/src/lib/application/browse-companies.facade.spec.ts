import { BrowseCompaniesFacade } from './browse-companies.facade';

describe('BrowseCompaniesFacade', () => {
  it('should create an instance', () => {
    expect(
      new BrowseCompaniesFacade(
        Object.assign({
          dispatch: () => {}
        })
      )
    ).toBeTruthy();
  });
});
