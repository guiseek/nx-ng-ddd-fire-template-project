import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginFacade } from '@seek/auth/domain';
import { Subject } from 'rxjs';

@Component({
  selector: 'auth-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  @Output()
  authorized = new EventEmitter<string>();

  authUserList$ = this.loginFacade.authUserList$;

  constructor(
    private router: Router,
    private builder: FormBuilder,
    public loginFacade: LoginFacade,
    private route: ActivatedRoute
  ) {
    console.log(route.queryParams);

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
  }
}

