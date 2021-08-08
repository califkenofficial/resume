import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Job, Tag, Resume } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class TagService {

  

  tagRegistry = {};

  public tagRegistrySrc = new BehaviorSubject<boolean>(false);
  tagRegistry$ = this.tagRegistrySrc.asObservable();


  
  public activeTagRegistry = {};

  public activeTagRegistrySrc = new BehaviorSubject({});
  activeTagRegistry$ = this.activeTagRegistrySrc.asObservable();

  activeTagRegistryColors;
  
  constructor() { }

  registerTag(tag: Tag) {


    let uuidkey = this.generateUUID();
    let tagkey = 'tagkey_'+tag;

    if (this.tagRegistry.hasOwnProperty(tagkey)) {
      return this.tagRegistry[tagkey].active$;
    }

    let activeSrc = new BehaviorSubject<boolean>(false);

    this.tagRegistry[tagkey] = {
      tag: tag,
      key: tagkey,
      color: this.randomColor(),
      activeSrc: activeSrc,
      active$: activeSrc.asObservable()
    };
    return this.tagRegistry[tagkey].active$;
  }

  activeTagsAddTag(tagkey) {
    // this.activeTagRegistry = [];
    let length = Object.keys(this.activeTagRegistry).length;
    
    console.log(length);
    this.activeTagRegistry[tagkey] = tagkey.slice(7);
    this.activeTagRegistrySrc.next(this.activeTagRegistry);
    // console.log(tagkey);
  }

  activateTag(tagkey: string, activate?: boolean) {
    // console.log('activateTag',tagkey, this.activeTagRegistry);

    if (this.activeTagRegistry.hasOwnProperty(tagkey)) {
      console.log('remove', tagkey, this.activeTagRegistry[tagkey]);
      delete this.activeTagRegistry[tagkey];
      console.log(this.activeTagRegistry[tagkey]);
      this.activeTagRegistrySrc.next(this.activeTagRegistry);
      this.tagRegistry[tagkey].activeSrc.next(false);
    } else {
      console.log('add', tagkey);
      // Object.keys(this.tagRegistry).forEach(tagkey => {
      //   this.tagRegistry[tagkey].activeSrc.next(false);
      // })  
      this.tagRegistry[tagkey].activeSrc.next(true);
      this.activeTagsAddTag(tagkey);
    }
  }
  deactivateTag(tagkey: string, activate?: boolean) {
    console.log('deactivateTag',this.tagRegistry);
    
    this.tagRegistry[tagkey].activeSrc.next(false);
  }

  mouseoverTag(tagkey) {
    console.log('mouseover');
    this.activateTag(tagkey);
  }

  mouseoutTag(tagkey) {
    this.deactivateTag(tagkey);
  }


  searchJobsTagQuery() {

  }

  public generateUUID() {

    var alphaPart = this.timestampToAlpha();

    var firstPart = (Math.random() * 46656) | 0;
    var secondPart = (Math.random() * 46656) | 0;
    var firstPartx = ('000' + firstPart.toString(36)).slice(-3);
    var secondPartx = ('000' + secondPart.toString(36)).slice(-3);
    return alphaPart + firstPartx + secondPartx;
  }

  digitToAlpha(digit) {
    return 'QRSTUVWXYZ'.charAt(digit);
  }
  timestampToAlpha() {
    let ts = Date.now();
    let tsstr = ts.toString();
    let alphaStr = '';
    for (var i = 0; i < tsstr.length; i++) {
      alphaStr += this.digitToAlpha(tsstr.charAt(i));
    }
    return alphaStr;
  }

  randomColor() {

    // let colorslist = [
    //   'rgba(247, 37, 133, .5)', //$flickr-pink:
    //   'rgba(114, 9, 183, .5)', //$purple:
    //   'rgba(58, 12, 163, .5)', //$trypan-blue:
    //   'rgba(67, 97, 238, .5)', //$ultramarine-blue:
    //   'rgba(76, 201, 240, .5)', //$vivid-sky-blue:
    // ];


    return `rgba(${this.randomColorCode()}, ${this.randomColorCode()}, ${this.randomColorCode()}, 1)`
  }
  randomColorCode() {
    return Math.floor(Math.random() * 255).toFixed();
  }
}
