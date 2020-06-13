import { A11yModule } from '@angular/cdk/a11y';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatStepperModule } from '@angular/material/stepper';
import { RouterModule } from '@angular/router';
import { AuthDomainModule } from '@seek/auth/domain';
import { LoginComponent } from './login.component';
import { SocialLoginDirective } from './social-login/social-login.directive';

@NgModule({
  imports: [
    CommonModule,
    A11yModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    AuthDomainModule,
    MatFormFieldModule,
    MatStepperModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatCardModule,
    RouterModule
    // RouterModule.forChild([
    //   {
    //     path: '',
    //     component: LoginComponent
    //   }
    // ])
  ],
  declarations: [LoginComponent, SocialLoginDirective],
  exports: [LoginComponent, SocialLoginDirective],
})
export class AuthFeatureLoginModule { }
