import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'seek-auth-shell',
  templateUrl: './auth-shell.component.html',
  styleUrls: ['./auth-shell.component.scss']
})
export class AuthShellComponent {
  redirectLoggedInTo: string;
  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {
    const queryParamMap = this.route.snapshot.queryParamMap;
    if (queryParamMap.has('redirectLoggedInTo')) {
      this.redirectLoggedInTo = queryParamMap.get('redirectLoggedInTo');
    }
    console.log(this.redirectLoggedInTo);
  }

  onAuthorized($event?) {
    console.log($event);
    this.router.navigateByUrl(
      this.redirectLoggedInTo || '/'
    );
  }
}
