import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthDomainModule } from '@dekao/auth/domain';
import { AccountComponent } from './account.component';

@NgModule({
  imports: [CommonModule, AuthDomainModule],
  declarations: [AccountComponent],
  exports: [AccountComponent],
})
export class AuthFeatureAccountModule {}
