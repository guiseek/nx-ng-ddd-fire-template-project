import { createDirectiveFactory, SpectatorDirective } from '@ngneat/spectator';

import { TabContentDirective } from './tab-content.directive';

describe('TabContentDirective ', () => {
  let spectator: SpectatorDirective<TabContentDirective>;
  const createDirective = createDirectiveFactory(TabContentDirective);

  it('should change the background color', () => {
    spectator = createDirective(`<div highlight>Testing TabContentDirective</div>`);

    spectator.dispatchMouseEvent(spectator.element, 'mouseover');

    expect(spectator.element).toHaveStyle({
      backgroundColor: 'rgba(0,0,0, 0.1)'
    });

    spectator.dispatchMouseEvent(spectator.element, 'mouseout');
    expect(spectator.element).toHaveStyle({
      backgroundColor: '#fff'
    });
  });

});
