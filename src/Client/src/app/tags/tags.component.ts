import { Component, OnInit } from '@angular/core';
import { TagServiceProvider } from '../providers/tag-service/tag-service';
import { ITag, IMap } from '../map/map.component';
@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss']
})
export class TagsComponent {
tags:ITag[];
map:IMap;

hide=true;
deleteTag

  constructor(public TagProvider: TagServiceProvider) { 

    this.TagProvider.getTags()
    .then(data => {
      this.map = data;
      this.tags = this.map.coordinates;
    });
  }

  addTag(mac:String,description:String) {
    this.TagProvider.addTag(JSON.stringify({
      mac: mac,
      description:description,
  }),2,1)
    .then(data => {
      if (data) {
        console.log("succes")
      }
      else {
        console.log("fail")
      }
    });
  }

  selectedTag(tag:string) {
    this.deleteTag = tag
    this.hide = !this.hide
  }

  deleteTagId(tag){
    this.TagProvider.deleteTag(tag)
    .then(data => {
      if (data) {
        console.log("succes")
      }
      else {
        console.log("fail")
      }
    });
  }

}
