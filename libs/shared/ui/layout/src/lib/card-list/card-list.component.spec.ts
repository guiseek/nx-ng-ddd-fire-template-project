import { createHostFactory, SpectatorHost } from '@ngneat/spectator';

import { CardListComponent } from './card-list.component';

describe('CardListComponent', () => {
  let spectator: SpectatorHost<CardListComponent>;

  const createHost = createHostFactory(CardListComponent);

  it('should create', () => {
    spectator = createHost(`<zippy title="Zippy title"></zippy>`);
    expect(spectator.component).toBeTruthy();
  });

  it('should...', () => {
    spectator = createHost(`<zippy title="Zippy title">Zippy content</zippy>`);
    spectator.click('.zippy__title');
    expect(spectator.query('.arrow')).toHaveText('Close');
  });

  it('should...', () => {
    spectator = createHost(`<zippy title="Zippy title"></zippy>`);
    spectator.click('.zippy__title');
    expect(host.query('.zippy__content')).toExist();
    spectator.click('.zippy__title');
    expect('.zippy__content').not.toExist();
  });

});
