import { Spectator, createComponentFactory } from '@ngneat/spectator';

import { ToggleThemeComponent } from './toggle-theme.component';

describe('ToggleThemeComponent', () => {
  let spectator: Spectator<ToggleThemeComponent>;
  const createComponent = createComponentFactory(ToggleThemeComponent);

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
