import { Directive, HostListener, Input } from '@angular/core';
import { AuthProvider, LoginFacade } from '@dekao/auth/domain';

@Directive({
  selector: '[authSocialLogin],authSocialLogin,[auth-social-login]'
})
export class SocialLoginDirective {
  @Input()
  authSocialLogin: AuthProvider;

  @HostListener('click')
  onClick() {
    if (!this.authSocialLogin) {
      throw new Error('Informe um provider');
    }
    this.facade.social(this.authSocialLogin);
  }

  constructor(private facade: LoginFacade) { }

}
