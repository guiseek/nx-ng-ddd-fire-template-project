import { NgModule } from '@angular/core';
import { LoginFacade } from './application/login.facade';

@NgModule({
  providers: [LoginFacade]
})
export class AuthDomainModule {}
