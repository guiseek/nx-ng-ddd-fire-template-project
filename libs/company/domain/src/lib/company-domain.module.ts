import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { NxModule } from '@nrwl/angular';
import { CompanyEffects } from './+state/company.effects';
import * as fromCompany from './+state/company.reducer';
import { BrowseCompaniesFacade } from './application/browse-companies.facade';

@NgModule({
  imports: [
    CommonModule,
    NxModule.forRoot(),
    StoreModule.forFeature(
      fromCompany.COMPANY_FEATURE_KEY,
      fromCompany.reducer
    ),
    EffectsModule.forFeature([CompanyEffects])
  ],
  providers: [
    BrowseCompaniesFacade,
  ],
})
export class CompanyDomainModule {}
