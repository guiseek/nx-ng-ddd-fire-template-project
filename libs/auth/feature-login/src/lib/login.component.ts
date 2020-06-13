import { Component, EventEmitter, OnDestroy, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginFacade } from '@seek/auth/domain';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'auth-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnDestroy {
  destroy$ = new Subject<void>();

  @Output()
  authorized = new EventEmitter<firebase.auth.UserCredential>();

  user$ = this.loginFacade.user$.pipe(
    takeUntil(this.destroy$)
  ).subscribe(user => {
    if (!!user) {
      this.snackBar.open(
        `Conectado como ${user.email}`,
        'Continuar', { duration: 5000 }
      ).onAction().pipe(
        takeUntil(this.destroy$)
      ).subscribe(() => {
        this.router.navigateByUrl('/');
      })
    }
  });

  emailForm = this.builder.group({
    email: ['', [
      Validators.required,
      Validators.email
    ]]
  });
  passwordForm = this.builder.group({
    password: ['', [
      Validators.required,
      Validators.minLength(6)
    ]]
  });
  constructor(
    private builder: FormBuilder,
    private loginFacade: LoginFacade,
    private snackBar: MatSnackBar,
    private router: Router
  ) {
  }
  async onSubmit() {
    this.emailForm.markAllAsTouched();
    this.passwordForm.markAllAsTouched();
    if (
      this.passwordForm.valid
      && this.emailForm.valid
    ) {
      try {

        const user = await this.loginFacade.login({
          email: this.emailForm.get('email').value,
          password: this.passwordForm.get('password').value
        });

        this.authorized.emit(user);

      } catch ({ message }) {
        this.snackBar.open(message);
      }
    }
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  onDone(step: number, el?: HTMLInputElement) {
    if (step === 1) {
      setTimeout(() => el.focus(), 500);
    }
  }
}

