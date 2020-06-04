import { Component } from '@angular/core';
import { createHostFactory, SpectatorHost } from '@ngneat/spectator';

import { OptionComponent } from './option.component';

@Component({ template: '' })
class CustomHostComponent {
  title = 'Custom HostComponent';
}

describe('OptionComponent', () => {
  let host: SpectatorHost<OptionComponent, CustomHostComponent>;
  const createHost = createHostFactory({
    component: OptionComponent,
    host: CustomHostComponent
  });

  it('should display the host component title', () => {
    host = createHost(`<zippy [title]="title"></zippy>`);
    expect(host.query('.zippy__title')).toHaveText('Custom HostComponent');
  });
});
