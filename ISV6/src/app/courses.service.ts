import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
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
  getAll(): any[] {
    return this.courses;
  }
}
