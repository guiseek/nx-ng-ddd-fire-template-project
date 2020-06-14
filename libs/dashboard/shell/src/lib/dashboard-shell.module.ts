import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedUiMaterialModule } from '@seek/shared/ui/common';
import { SharedUiPhotoModule } from '@seek/shared/ui/photo';
import { DashboardCardComponent } from './components/dashboard-card/dashboard-card.component';
import { DashboardShellRoutingModule } from './dashboard-shell-routing.module';
import { ShellComponent } from './shell.component';

@NgModule({
  imports: [
    CommonModule,
    SharedUiPhotoModule,
    SharedUiMaterialModule,
    DashboardShellRoutingModule
  ],
  declarations: [
    ShellComponent,
    DashboardCardComponent
  ],
})
export class DashboardShellModule {}
