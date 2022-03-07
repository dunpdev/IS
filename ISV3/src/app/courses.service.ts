import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  courses = ['BP', 'OOP1', 'OOP2'];
  getAll(): string[] {
    return this.courses;
  }
}
