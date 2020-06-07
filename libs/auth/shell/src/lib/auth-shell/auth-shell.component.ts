import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'seek-auth-shell',
  templateUrl: './auth-shell.component.html',
  styleUrls: ['./auth-shell.component.scss']
})
export class AuthShellComponent implements OnInit {
  form = new FormGroup({
    displayName: new FormControl(''),
    email: new FormControl('', [
      Validators.required,
      Validators.email,
    ]),
    password: new FormControl('', [
      Validators.minLength(6),
      Validators.required,
    ]),
  })
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log('pia');

  }
}
