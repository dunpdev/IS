import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css'],
})
export class CourseDetailsComponent {
  constructor() {}
  @Input() courseId: number = 0;
  @Output() change = new EventEmitter();

  incrementId() {
    this.courseId++;
    this.change.emit(this.courseId);
  }
}
