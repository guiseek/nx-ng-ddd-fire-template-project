import { createDirectiveFactory, SpectatorDirective } from '@ngneat/spectator';

import { SubmitDirective } from './submit.directive';

describe('SubmitDirective ', () => {
  let spectator: SpectatorDirective<SubmitDirective>;
  const createDirective = createDirectiveFactory(SubmitDirective);

  it('should change the background color', () => {
    spectator = createDirective(`<div highlight>Testing SubmitDirective</div>`);

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
