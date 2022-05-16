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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContantFormComponent } from './contant-form/contant-form.component';
import { SingUpComponent } from './sing-up/sing-up.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthorsComponent } from './authors/authors.component';
import { ProfileComponent } from './profile/profile.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { RouterModule } from '@angular/router';
import { NavComponent } from './nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    NewCourseComponent,
    CustomPipe,
    CourseDetailsComponent,
    CustomDirective,
    ContantFormComponent,
    SingUpComponent,
    AuthorsComponent,
    ProfileComponent,
    NotfoundComponent,
    NavComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: SingUpComponent },
      { path: 'authors/:id', component: ProfileComponent },
      { path: 'authors', component: AuthorsComponent },
      { path: 'courses', component: CoursesComponent },
      { path: '**', component: NotfoundComponent },
    ]),
  ],
  providers: [CoursesService],
  bootstrap: [AppComponent],
})
export class AppModule {}
