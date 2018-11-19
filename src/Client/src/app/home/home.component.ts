import { Component, OnInit } from '@angular/core';
import { ITags } from '../map/map.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
tags:ITags[];
tag:any
  constructor() {
   this.tags = [
    { "xPos": 50, "yPos": 50, "mac": "1", "stroke": 5, "id": 1, "description": "", "status": false, "lastActive": "153:861::9841" },
    { "xPos": 150, "yPos": 150, "mac": "2", "stroke": 5, "id": 2, "description": "", "status": true, "lastActive": "153:861::9841" },
    { "xPos": 250, "yPos": 250, "mac": "3", "stroke": 5, "id": 3, "description": "", "status": true, "lastActive": "153:861::9841" },
    { "xPos": 350, "yPos": 350, "mac": "4", "stroke": 5, "id": 4, "description": "", "status": false, "lastActive": "153:861::9841" },

    ]
   }

   onKey(event: any) { // without type info
    this.tag = event.target.value
  }

  save(tagid){
    console.log(this.tag,tagid)
  }



}
