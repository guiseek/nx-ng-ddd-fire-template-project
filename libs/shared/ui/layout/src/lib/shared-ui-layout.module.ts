import { DragDropModule } from '@angular/cdk/drag-drop';
import { LayoutModule } from '@angular/cdk/layout';
import { PortalModule } from '@angular/cdk/portal';
import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { CardListComponent } from './card-list/card-list.component';
import { CardsComponent } from './card-list/cards/cards.component';
import { ListComponent } from './card-list/list/list.component';
import { NavListComponent } from './nav-list/nav-list.component';
import { NavShell, NAV_SHELL, NAV_SHELL_CONFIG } from './nav-shell/nav-shell-injectors';
import { NavShellComponent } from './nav-shell/nav-shell.component';
import { NavTabsComponent } from './nav-tabs/nav-tabs.component';
import { TabComponent } from './nav-tabs/tab/tab.component';
import { PortalWindowComponent } from './portal-window/portal-window.component';
import { TabContentDirective } from './nav-tabs/tab/tab-content.directive';

const merge = <T, U>(t: T[], u: U[]) => [...t, ...u];

@NgModule({
  imports: [
    PortalModule,
    CommonModule,
    RouterModule,
    LayoutModule,
    MatIconModule,
    MatListModule,
    MatTabsModule,
    DragDropModule,
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonToggleModule
  ],
  declarations: [
    NavShellComponent,
    PortalWindowComponent,
    NavListComponent,
    CardListComponent,
    CardsComponent,
    ListComponent,
    NavTabsComponent,
    TabComponent,
    TabContentDirective
  ],
  exports: [
    NavShellComponent,
    PortalWindowComponent,
    NavListComponent,
    CardListComponent,
    CardsComponent,
    ListComponent,
    NavTabsComponent,
    TabComponent,
    TabContentDirective
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
