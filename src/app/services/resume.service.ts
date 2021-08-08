import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Job, Tag, Resume } from '../interfaces';
import { pluck } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ResumeService {

  jobsDataURL = 'assets/data/jobs.json';

  constructor(private http: HttpClient) { }

  getResume() {
    return this.http.get<Resume>(this.jobsDataURL);
  }


getJobs() {
  let jobs;
  return this.http.get<Resume>(this.jobsDataURL).pipe(
    pluck('jobs')
  );
}
getSection(section:string) {

  return this.http.get<Resume>(this.jobsDataURL).pipe(
    pluck(section)
  );
}
}
