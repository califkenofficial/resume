import { Component, Input, OnInit } from '@angular/core';
import { TagService } from 'src/app/services/tag.service';

import { Job, Tag, Resume } from '../../interfaces';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss']
})
export class TagsComponent implements OnInit {
@Input() tags: [];
activeTags;
  constructor(public tagService: TagService) { }

  ngOnInit(): void {
  }

}
