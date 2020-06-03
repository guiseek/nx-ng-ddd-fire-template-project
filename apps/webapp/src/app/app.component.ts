import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { LoginFacade } from '@dekao/auth/domain';

@Component({
  selector: 'dekao-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  // hello$ = this.http.get<Message>('/api/hello');
  constructor(
    private http: HttpClient,
    public loginFacade: LoginFacade
  ) { }
}
