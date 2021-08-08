import { Component, ElementRef, Input, AfterViewInit, ViewChild } from '@angular/core';
import { TagService } from 'src/app/services/tag.service';

import { Job, Tag } from '../../interfaces';

@Component({
  selector: 'app-tag-item',
  templateUrl: './tag-item.component.html',
  styleUrls: ['./tag-item.component.scss']
})
export class TagItemComponent implements AfterViewInit {
  @Input() tag: Tag;
  @ViewChild('tagElement') ElTag: ElementRef;
  tagkey: string;
  backgroundColor: string;
  active$;
  color: number;
  active: boolean = false;
    constructor(public tagService: TagService) {
  
      this.tagService.activeTagRegistry$.subscribe(atr => {
        let matchlist = [
          'Drupal'
        ];
        if (this.tagkey) {
        let atrkeys = Object.keys(atr);
        let aiarray = [];
        atrkeys.map(key => {
          aiarray.push(atr[key]);
          console.log('pushing: ',atr)
        });
          this.color = aiarray.indexOf(this.tagkey.replace('tagkey_',''));
        }
            })
          
     }
  
    ngAfterViewInit(): void {
      this.tagkey = 'tagkey_'+this.tag;
  
      this.active$ = this.tagService.registerTag(this.tag);
      this.active$.subscribe(active => {
        if (active == true) {
          this.active = true;
          // this.ElTag.nativeElement.style.backgroundColor = "rgba(0,255,255,.5)";
  
        } else {
          this.active = false;
          // this.ElTag.nativeElement.style.backgroundColor = 'transparent';
          
        }
      })
  
      this.tagService.activeTagRegistry$.subscribe(at => {
        // console.log(at);
  
  
  
      })
      // this.backgroundColor = this.tagService.tagRegistry[this.tagkey].color;
  
    }
  toggleActive() {
    this.active = !this.active;
  }
  }
  