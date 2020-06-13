import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';

@Component({
  selector: 'seek-toggle-theme',
  templateUrl: './toggle-theme.component.html',
  styleUrls: ['./toggle-theme.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToggleThemeComponent {
  private classList = this.document.body.classList;

  constructor(
    @Inject(DOCUMENT)
    private document: Document
  ) { }

  get icon() { return this.classList.contains('dark') ? 'sun' : 'moon'; }

  toggle() { this.classList.toggle('dark'); }
}
