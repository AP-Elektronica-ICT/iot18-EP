import * as core from '@angular/core';
import { $ } from 'protractor';
import { delay } from 'q';

@core.Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements core.OnInit {

  tags: ITags[];

  constructor() { 
    this.tags= [
      {"cx":50,"cy":50},
      {"cx":100,"cy":50}
    ]
    console.log(this.tags)
  }

  ngOnInit() {
   
  }

  drawTag(){

    
  }
}

export interface ITags {
  cx: number;
  cy: number;
}
