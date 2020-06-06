import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { AuthDomainModule } from '@seek/auth/domain';
import { LoginComponent } from './login.component';
import { SocialLoginDirective } from './social-login/social-login.directive';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AuthDomainModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatCardModule,
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
