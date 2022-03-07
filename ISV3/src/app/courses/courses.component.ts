import { Component } from '@angular/core';
import { CoursesService } from '../courses.service';

@Component({
  selector: 'courses',
  templateUrl: './courses.component.html',
})
export class CoursesComponent {
  firstName: string = 'Safet';
  lastName: string = 'Purkovic';
  courses: string[];
  courseService: CoursesService;

  constructor(courseService: CoursesService) {
    this.courseService = courseService;
    this.courses = this.courseService.getAll();
  }

  getCourses() {
    return this.courses.join(',');
  }

  getFullName() {
    return this.firstName + ' ' + this.lastName;
  }
}
