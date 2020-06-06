import { DragDropModule } from '@angular/cdk/drag-drop';
import { LayoutModule } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { NavListComponent } from './nav-list/nav-list.component';
import { NavShell, NAV_SHELL, NAV_SHELL_CONFIG } from './nav-shell/nav-shell-injectors';
import { NavShellComponent } from './nav-shell/nav-shell.component';
import { PortalWindowComponent } from './portal-window/portal-window.component';

const merge = <T, U>(t: T[], u: U[]) => [...t, ...u];

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    LayoutModule,
    MatIconModule,
    MatListModule,
    DragDropModule,
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule,
  ],
  declarations: [
    NavShellComponent,
    PortalWindowComponent,
    NavListComponent
  ],
  exports: [
    NavShellComponent,
    PortalWindowComponent,
    NavListComponent
  ]
})
export class SharedUiLayoutModule {
  static forRoot(
    navShell: Array<NavShell>

    ): ModuleWithProviders<SharedUiLayoutModule> {

    return {
      ngModule: SharedUiLayoutModule,
      providers: [
        {
          provide: NAV_SHELL,
          useValue: merge(NAV_SHELL_CONFIG, navShell)
        }
      ]
    }
  }
}
