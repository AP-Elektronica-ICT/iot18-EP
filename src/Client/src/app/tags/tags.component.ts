import { Component, OnInit } from '@angular/core';
import { TagServiceProvider } from '../providers/tag-service/tag-service';
import { ITags } from '../map/map.component';
@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss']
})
export class TagsComponent {
tags:ITags[]
hide=true;
deleteTag

  constructor(public TagProvider: TagServiceProvider) { 
    /*this.tags = [
      { "xPos": 50, "yPos": 50, "mac": "1", "stroke": 5, "id": 1, "description": "", "status": false, "lastActive": "153:861::9841" },
      { "xPos": 150, "yPos": 150, "mac": "2", "stroke": 5, "id": 2, "description": "", "status": true, "lastActive": "153:861::9841" },
      { "xPos": 250, "yPos": 250, "mac": "3", "stroke": 5, "id": 3, "description": "", "status": true, "lastActive": "153:861::9841" },
      { "xPos": 350, "yPos": 350, "mac": "4", "stroke": 5, "id": 4, "description": "", "status": false, "lastActive": "153:861::9841" },

    ]*/
    this.TagProvider.getTags()
      .then(data => {
        this.tags = data;
        console.log(this.tags)
      });
  }

  addTag(mac:String,description:String) {
    this.TagProvider.addTag(JSON.stringify({
      User:2,
      Mac: mac,
      Description:description
  }))
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
    this.deleteTag =tag
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
