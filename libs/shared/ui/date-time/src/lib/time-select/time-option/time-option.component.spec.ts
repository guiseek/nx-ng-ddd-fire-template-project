import { Component } from '@angular/core';
import { createHostFactory, SpectatorHost } from '@ngneat/spectator';

import { TimeOptionComponent } from './time-option.component';

@Component({ template: '' })
class CustomHostComponent {
  title = 'Custom HostComponent';
}

describe('TimeOptionComponent', () => {
  let host: SpectatorHost<TimeOptionComponent, CustomHostComponent>;
  const createHost = createHostFactory({
    component: TimeOptionComponent,
    host: CustomHostComponent
  });

  it('should display the host component title', () => {
    host = createHost(`<zippy [title]="title"></zippy>`);
    expect(host.query('.zippy__title')).toHaveText('Custom HostComponent');
  });
});
