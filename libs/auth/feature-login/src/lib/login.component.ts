import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginFacade } from '@seek/auth/domain';
import { Subject } from 'rxjs';

@Component({
  selector: 'auth-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  authUserList$ = this.loginFacade.authUserList$;

  constructor(
    public loginFacade: LoginFacade,
    private builder: FormBuilder
  ) {
    this.form = this.builder.group({
      email: ['',[
        Validators.required,
        Validators.email
      ]],
      password: ['',[
        Validators.required,
        Validators.minLength(6)
      ]]
    });
  }
  error$ = new Subject<string>();

  async onSubmit() {
    this.form.markAllAsTouched();
    if (this.form.valid) {
      try {
        await this.loginFacade.login(
          this.form.value
        );

      } catch ({ message }) {
        this.error$.next(message);
      }
    }

  }



  ngOnInit() {
    this.load();
  }

  load(): void {
    this.loginFacade.load();
  }

}

