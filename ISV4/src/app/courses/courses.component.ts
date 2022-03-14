import { Component } from '@angular/core';
import { Action } from 'rxjs/internal/scheduler/Action';
import { CoursesService } from '../courses.service';

@Component({
  selector: 'courses',
  templateUrl: './courses.component.html',
})
export class CoursesComponent {
  discount: number = 30.57812312;
  isActive: boolean = true;
  imageUrl: string =
    'https://th.bing.com/th/id/OIP.5xXfqWsSbnL2WSvS9u9gzwHaEo?pid=ImgDet&rs=1';
  // 'https://th.bing.com/th/id/R.48b666d6179cbf4cdd86b80bac7f0df5?rik=xULJFzGntGDtew&riu=http%3a%2f%2fwonderfulengineering.com%2fwp-content%2fuploads%2f2016%2f01%2fnature-wallpapers-38.jpg&ehk=dUtU7hvI%2bIv1ZAogg0%2b%2fznLW5KEYTsPob9LlywpnX1Q%3d&risl=&pid=ImgRaw&r=0';
  firstName: string = 'Safet';
  lastName: string = 'Purkovic';
  courses: string[];
  courseService: CoursesService;

  constructor(courseService: CoursesService) {
    this.courseService = courseService;
    this.courses = this.courseService.getAll();
  }

  onSave($event: any) {
    console.log('Clicked on ', $event);
  }

  getCourses() {
    return this.courses.join(',');
  }

  getFullName() {
    return this.firstName + ' ' + this.lastName;
  }
}
