import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { AuthService } from './services/auth.service';

@NgModule({
  imports: [
    RouterModule,
  ],
  providers: [
    AuthService,
    AuthGuard
  ]
})
export class AuthApiModule {}
