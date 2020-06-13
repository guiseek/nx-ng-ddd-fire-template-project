import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { RegisterFacade } from '@seek/auth/domain';
import { Subject } from 'rxjs';

@Component({
  selector: 'auth-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  @Output()
  authorized = new EventEmitter<string>();

  error$ = new Subject<string>();

  form = this.builder.group({
    displayName: ['', [
      Validators.required
    ]],
    email: ['', [
      Validators.required,
      Validators.email
    ]],
    password: ['', [
      Validators.required,
      Validators.minLength(6)
    ]]
  });
  constructor(
    private builder: FormBuilder,
    private registerFacade: RegisterFacade
  ) { }

  async onSubmit() {
    this.form.markAllAsTouched();

    if (this.form.valid) {
      try {
        await this.registerFacade
          .register(this.form.value);

      } catch ({ message }) {
        this.error$.next(message);
      }
    }
  }
}
