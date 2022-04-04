import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesService } from './courses.service';
import { CoursesComponent } from './courses/courses.component';
import { NewCourseComponent } from './new-course/new-course.component';
import { CustomPipe } from './custom.pipe';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { CustomDirective } from './custom.directive';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    NewCourseComponent,
    CustomPipe,
    CourseDetailsComponent,
    CustomDirective,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [CoursesService],
  bootstrap: [AppComponent],
})
export class AppModule {}
