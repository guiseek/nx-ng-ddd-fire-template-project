import { Component } from '@angular/core';
import { createHostFactory, SpectatorHost } from '@ngneat/spectator';
import { TimeOptionComponent } from './time-option.component';


@Component({ template: '' })
class CustomHostComponent {
  time: Date;
}

describe('TimeOptionComponent', () => {
  let host: SpectatorHost<TimeOptionComponent, CustomHostComponent>;
  let template: string;

  const createHost = createHostFactory({
    component: TimeOptionComponent,
    host: CustomHostComponent
  });

  beforeEach(() => {
    template = `<seek-time-option [time]="date"></seek-time-option>`;
  })

  it('should display the host component title', () => {
    const time = new Date();
    time.setHours(0,0,0);
    host = createHost(template, {
      hostProps: { time }
    });
    expect(host.query('span').textContent).toBe('12:00');
  });
});
