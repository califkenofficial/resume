import { Component, Input, AfterViewInit } from '@angular/core';
import { TagService } from 'src/app/services/tag.service';

import { Job, Tag, Resume } from '../../interfaces';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.scss']
})
export class JobComponent implements AfterViewInit {
@Input() job:  Job;
activeTags: string[] = [];
  constructor(public tagService: TagService) { 
  }

  ngAfterViewInit(): void {

    
    this.tagService.activeTagRegistry$.subscribe(activeTags => {
      // console.log(activeTags);
      let keys = Object.keys(activeTags);
      this.activeTags = [];
      keys.forEach(tagKey => {
        let tag = activeTags[tagKey];
        this.activeTags.push(tag);
      });
      console.log(this.activeTags);
    });
  }

}
