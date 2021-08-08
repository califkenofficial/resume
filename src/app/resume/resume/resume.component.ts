import { Component, OnInit } from '@angular/core';
import { TagService } from 'src/app/services/tag.service';
import { Observable, merge } from 'rxjs';
import { filter, mapTo, mergeAll, mergeMap, tap } from 'rxjs/operators';
import { Job, Tag, Resume } from '../../interfaces';
import { ResumeService } from 'src/app/services/resume.service';
@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {
  employmentHistory;
  tagRegistryVal;
  tagRegistry$;
  resume;
  jobs;
  skills;
  portfolio;
  constructor(public tagService: TagService, public resumeService: ResumeService) {
    
    this.jobs = this.resumeService.getJobs();
    this.skills = this.resumeService.getSection('skills');
this.portfolio =   this.resumeService.getSection('portfolio');

    // console.log(this.resume.subscribe(d => {
    //   // console.log(d);
    //   this.jobs = d;
    // }));
    this.tagRegistry$ = this.tagService.tagRegistry$;
    this.tagRegistry$.subscribe(tr => {
      console.log(tr);
      this.tagRegistryVal = tr;
      console.log(this.tagRegistryVal);
    });
   }


    ngOnInit() {




    }


  }

