import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CredentialFormComponent } from './components/credential-form/credential-form.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CredentialFormComponent],
  exports: [CredentialFormComponent],
})
export class AuthFeatureRegisterModule {}
