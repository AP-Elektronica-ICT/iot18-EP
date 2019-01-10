import { Component, OnInit } from '@angular/core';
import { ITag, IMap } from '../map/map.component';
import { TagServiceProvider } from '../providers/tag-service/tag-service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
map:IMap;
tags:ITag;
mapImage:string
description: String;
  constructor(public TagProvider: TagServiceProvider) {
    this.TagProvider.getTags()
    .then(data => {
      //this.map = data;
      //this.tags = this.map.coordinates;
      this.tags = data
      //this.mapImage = this.map.picture
    }); 
 }

   onKey(event: any) {
    this.description = event.target.value
  }

  save(tagid){
    //console.log(this.description,tagid)
    this.TagProvider.putDescription(JSON.stringify({
      description :this.description,
      
    }),tagid)
      .then(data => {
          if(data){
            console.log("true")
          }
          else{
            console.log("false")
          }
      });

  }



}
