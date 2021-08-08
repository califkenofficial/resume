import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JobComponent } from './resume/job/job.component';

import { ResumeComponent } from './resume/resume/resume.component';
import { TagsComponent } from './tags/tags/tags.component';

import { TagItemComponent } from './tags/tag-item/tag-item.component';
import { HighlightPipe } from './highlight.pipe';
import { ProjectComponent } from './resume/project/project.component';

@NgModule({
  declarations: [
    AppComponent,
    JobComponent,
    ResumeComponent,
    TagsComponent,
    TagItemComponent,
    HighlightPipe,
    ProjectComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
