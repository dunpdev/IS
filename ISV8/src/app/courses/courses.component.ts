import { Component } from '@angular/core';
import { Action } from 'rxjs/internal/scheduler/Action';
import { CoursesService } from '../courses.service';

@Component({
  selector: 'courses',
  templateUrl: './courses.component.html',
})
export class CoursesComponent {
  courses: any[] = [
    {
      id: 5,
      title: 'BP',
      isFavorite: false,
    },
    {
      id: 7,
      title: 'NPB',
      isFavorite: true,
    },
    {
      id: 3,
      title: 'IS',
      isFavorite: false,
    },
  ];
  tekst: string = '';

  constructor() {}

  addCourse() {
    this.courses.push({
      id: 4,
      title: 'HCI',
      isFavorite: true,
    });
  }

  onIdChange(newId: number) {
    console.log('Id je promenjen na ', newId);
  }
}
