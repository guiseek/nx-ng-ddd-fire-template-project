import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';
import { Customer } from '@seek/customer/domain';

class SeekFormGroup extends FormGroup {
  // controls: {
  //   [P in keyof Customer]: AbstractControl & { value: Customer };
  // };
  constructor(
    public controls: {
      [P in keyof Customer]?: AbstractControl & { value: Customer[P] };
    } = {}) {
    super(controls)
  }
}

@Component({
  selector: 'customer-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  form = new SeekFormGroup({
    name: new FormControl(''),
    description: new FormControl(''),
    id: new FormControl('')
  });

  @Output() seekSubmit = new EventEmitter();

  constructor() {}

  ngOnInit(): void {
  }

  onSubmit() {

  }

}
