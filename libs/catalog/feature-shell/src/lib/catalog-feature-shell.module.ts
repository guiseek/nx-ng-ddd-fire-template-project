import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogDomainModule } from '@seek/catalog/domain';
import { ShellComponent } from './shell.component';

export const routes: Routes = [
  { path: '', component: ShellComponent }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    CatalogDomainModule
  ],
  declarations: [
    ShellComponent
  ],
  exports: [
    ShellComponent
  ],
})
export class CatalogFeatureShellModule {}
