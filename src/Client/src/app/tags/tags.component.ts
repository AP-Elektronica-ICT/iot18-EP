import { Component, OnInit } from '@angular/core';
import { TagServiceProvider } from '../providers/tag-service/tag-service';
import { ITag } from '../map/map.component';
@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss']
})
export class TagsComponent {
tags:ITag[];
hide=true;
deleteTag

  constructor(public TagProvider: TagServiceProvider) { 

    this.TagProvider.getTags()
      .then(data => {
        this.tags = data;
        console.log(this.tags)
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
