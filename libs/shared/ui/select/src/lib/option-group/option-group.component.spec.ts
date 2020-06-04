import { Component } from '@angular/core';
import { createHostFactory, SpectatorHost } from '@ngneat/spectator';

import { OptionGroupComponent } from './option-group.component';

@Component({ template: '' })
class CustomHostComponent {
  title = 'Custom HostComponent';
}

describe('OptionGroupComponent', () => {
  let host: SpectatorHost<OptionGroupComponent, CustomHostComponent>;
  const createHost = createHostFactory({
    component: OptionGroupComponent,
    host: CustomHostComponent
  });

  it('should display the host component title', () => {
    host = createHost(`<zippy [title]="title"></zippy>`);
    expect(host.query('.zippy__title')).toHaveText('Custom HostComponent');
  });
});
