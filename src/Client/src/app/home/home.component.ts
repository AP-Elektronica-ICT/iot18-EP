import { Component, OnInit } from '@angular/core';
import { ITag } from '../map/map.component';
import { TagServiceProvider } from '../providers/tag-service/tag-service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
tags:ITag[];
description: String;
  constructor(public TagProvider: TagServiceProvider) {
    this.TagProvider.getTags()
    .then(data => {
      this.tags = data;
      console.log(this.tags)
    });  
 }

   onKey(event: any) {
    this.description = event.target.value
  }

  save(tagid){
    //console.log(this.description,tagid)
    this.TagProvider.putDescription(JSON.stringify({
      description :this.description,
      id: tagid
    }))
      .then(data => {

      });

  }



}
