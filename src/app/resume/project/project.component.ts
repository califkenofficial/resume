import { Component, Input, AfterViewInit } from '@angular/core';
import { TagService } from 'src/app/services/tag.service';

import { Job, Tag, Resume, Project } from '../../interfaces';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements AfterViewInit {
  @Input() project: Project;
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
  