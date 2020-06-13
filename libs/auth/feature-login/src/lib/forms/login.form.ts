import { FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { Login } from '@seek/auth/domain';
import { Observable } from 'rxjs';
import { passwordStrengthValidator } from './password-strength.validator';

export interface LoginFormValues {
  value: string;
  validators?: Array<ValidatorFn>;
}

export class EmailControl extends FormControl {
  constructor(
    value = '',
    validators = [
      Validators.required,
      Validators.email,
    ]
  ) {
    super(value, validators);
  }
}

export class PasswordControl extends FormControl {
  constructor(
    value = '',
    validators = [
      Validators.required,
      Validators.minLength(6),
      passwordStrengthValidator
    ]
  ) {
    super(value, validators);
  }
}
export class LoginForm extends FormGroup {

  valueChanges: Observable<Login>;

  constructor(
    email: LoginFormValues = { value: '' },
    password: LoginFormValues = { value: '' }
  ) {
    super({
      email: new EmailControl(
        email.value,
        email.validators
      ),
      password: new PasswordControl(
        password.value,
        password.validators
      ),
    })
  }

  control(name: string) {
    return this.get(name);
  }

  getValue(): Login {
    return {
      email: this.control('email').value,
      password: this.control('password').value
    }
  }

}