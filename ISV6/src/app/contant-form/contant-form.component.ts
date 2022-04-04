import { Component } from '@angular/core';
import { CoursesService } from '../courses.service';

@Component({
  selector: 'contact-form',
  templateUrl: './contant-form.component.html',
  styleUrls: ['./contant-form.component.css'],
})
export class ContantFormComponent {
  courses: any[] = [];
  constructor(private coursesService: CoursesService) {
    this.courses = coursesService.getAll();
  }
  write(obj: any) {
    console.log(obj);
  }

  submit(form: any) {
    console.log(form);
  }
}
