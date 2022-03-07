import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesService } from './courses.service';
import { CoursesComponent } from './courses/courses.component';

@NgModule({
  declarations: [AppComponent, CoursesComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [CoursesService],
  bootstrap: [AppComponent],
})
export class AppModule {}
