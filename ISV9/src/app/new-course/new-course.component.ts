import { Component } from '@angular/core';

@Component({
  selector: 'newCourse',
  templateUrl: './new-course.component.html',
  styleUrls: ['./new-course.component.css'],
})
export class NewCourseComponent {
  checked: boolean = false;
  courseArray: any[] = [
    {
      id: '1',
      name: 'BP',
    },
    {
      id: '2',
      name: 'NBP',
    },
  ];
  constructor() {}
  onSave(obj: any) {}
  onCheck(courseId: string) {
    let check = this.courseArray.filter((value) => value.id === courseId);
    console.log(check);
    if (check.length === 0) this.checked = false;
    else this.checked = true;
  }
}
