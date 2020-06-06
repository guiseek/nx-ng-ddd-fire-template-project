import { Component } from '@angular/core';
import { createHostFactory, SpectatorHost } from '@ngneat/spectator';

import { PortalWindowComponent } from './portal-window.component';

@Component({ template: '' })
class CustomHostComponent {
  title = 'Custom HostComponent';
}

describe('PortalWindowComponent', () => {
  let host: SpectatorHost<PortalWindowComponent, CustomHostComponent>;
  const createHost = createHostFactory({
    component: PortalWindowComponent,
    host: CustomHostComponent
  });

  it('should display the host component title', () => {
    host = createHost(`<zippy [title]="title"></zippy>`);
    expect(host.query('.zippy__title')).toHaveText('Custom HostComponent');
  });
});
