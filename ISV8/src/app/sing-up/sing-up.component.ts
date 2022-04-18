import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { SignUpValidators } from './sign-up.validators';

@Component({
  selector: 'sign-up',
  templateUrl: './sing-up.component.html',
  styleUrls: ['./sing-up.component.css'],
})
export class SingUpComponent {
  constructor() {}
  form = new FormGroup({
    username: new FormControl(
      '',
      [
        Validators.required,
        Validators.minLength(5),
        SignUpValidators.nemogurazmaci,
      ],
      SignUpValidators.zauzetostkorisnickogimena
    ),
    password: new FormControl('', Validators.minLength(6)),
    subjects: new FormArray([]),
  });

  get Username(): AbstractControl {
    return this.form.get('username') ?? new FormControl();
  }
  get Password(): AbstractControl {
    return this.form.get('password') ?? new FormControl();
  }

  get Subjects() {
    return this.form.get('subjects') as FormArray;
  }

  AddSubject(subject: any) {
    (this.form.get('subjects') as FormArray).push(
      new FormControl(subject.value)
    );
    subject.value = '';
  }

  RemoveSubject(subject: any) {
    const index = this.Subjects.controls.indexOf(subject);
    this.Subjects.controls.splice(index, 1);
  }
}
