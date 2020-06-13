import { A11yModule } from '@angular/cdk/a11y';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { AuthDomainModule } from '@seek/auth/domain';
import { CredentialFormComponent } from './components/credential-form/credential-form.component';
import { RegisterComponent } from './register.component';

@NgModule({
  imports: [
    A11yModule,
    CommonModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    AuthDomainModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
  ],
  declarations: [CredentialFormComponent, RegisterComponent],
  exports: [CredentialFormComponent, RegisterComponent],
  providers: [
  ]
})
export class AuthFeatureRegisterModule {}
