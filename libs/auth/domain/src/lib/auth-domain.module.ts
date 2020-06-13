import { NgModule } from '@angular/core';
import { LoginFacade } from './application/login.facade';
import { RegisterFacade } from './application/register.facade';

@NgModule({
  providers: [LoginFacade, RegisterFacade]
})
export class AuthDomainModule { }
