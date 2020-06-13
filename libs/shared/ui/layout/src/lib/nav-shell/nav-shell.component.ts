import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { ChangeDetectionStrategy, Component, ContentChild, Input, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { NavListComponent } from '../nav-list/nav-list.component';

@Component({
  selector: 'seek-nav-shell',
  templateUrl: './nav-shell.component.html',
  styleUrls: ['./nav-shell.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavShellComponent {
  @ViewChild('drawer')
  public sidenav: MatSidenav;

  @Input()
  subtitle = '';

  @ContentChild(NavListComponent) navList: NavListComponent;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver) {
    console.log(this.navList);
    setTimeout(() => {
      console.log(this.navList);

      console.log(this.sidenav);
    }, 2000)

  }

}
