import { Component, Inject } from '@angular/core';
import { NavShell, NAV_SHELL } from './../nav-shell/nav-shell-injectors';

@Component({
  selector: 'seek-nav-list',
  templateUrl: './nav-list.component.html',
  styleUrls: ['./nav-list.component.scss']
})
export class NavListComponent {
  constructor(
    @Inject(NAV_SHELL)
    public navLinks: NavShell[]
  ) { }
}
