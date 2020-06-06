import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { AuthDomainModule } from '@seek/auth/domain';
import { AuthFeatureAccountModule } from '@seek/auth/feature-account';
import { CatalogFeatureBrowseProductsModule } from '@seek/catalog/feature-browse-products';
import { CatalogFeatureManageProductsModule } from '@seek/catalog/feature-manage-products';
import { CatalogShellComponent } from './catalog-shell/catalog-shell.component';
import { AccountGuard } from './guards/account.guard';

@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    AuthDomainModule,
    AuthFeatureAccountModule,
    CatalogFeatureManageProductsModule,
    CatalogFeatureBrowseProductsModule,
    RouterModule.forChild([
      {
        path: '',
        component: CatalogShellComponent,
        canActivate: [AccountGuard]
      }
    ]),
  ],
  declarations: [CatalogShellComponent],
})
export class CatalogShellModule { }
