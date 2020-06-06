import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { AuthUser } from '@seek/auth/domain';

@Component({
  selector: 'auth-account-menu',
  templateUrl: './account-menu.component.html',
  styleUrls: ['./account-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccountMenuComponent implements OnInit {
  @Input() user: AuthUser;

  constructor() { }

  ngOnInit(): void {
  }

  signOut() {

  }

}
