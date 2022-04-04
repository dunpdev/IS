import { Component } from '@angular/core';

@Component({
  selector: 'contact-form',
  templateUrl: './contant-form.component.html',
  styleUrls: ['./contant-form.component.css'],
})
export class ContantFormComponent {
  constructor() {}
  write(obj: any) {
    console.log(obj);
  }
}
