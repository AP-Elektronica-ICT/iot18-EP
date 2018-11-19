import * as core from '@angular/core';
import { TagServiceProvider } from '../providers/tag-service/tag-service';
import { Input, ViewChild, ElementRef } from '@angular/core';
import { AnonymousSubject } from 'rxjs/Subject';

@core.Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent {

  @ViewChild("canvas") canvas;
  @ViewChild('difke') myDiv: ElementRef;
  @Input() public width = window.innerWidth * 0.6;
  @Input() public height = this.width / 16 * 9;
  totalw = window.innerWidth
  totalh = window.innerHeight


  private cx: CanvasRenderingContext2D;
  tags: ITags[];
  show = false;
  info: String;
  description: String;
  top = 0;
  left = 0;
  test = 0;
  blob: any;
  imageBase64: any;
  timer: any;
  value: number = 100;
  delay = 50;
  color: string = "yellow"
  teller:any;


  strokeWidth = 5;





  constructor(public TagProvider: TagServiceProvider) {
    this.loadData();

    this.tags = [
      { "xPos": 50, "yPos": 50, "mac": "1", "stroke": 5, "id": 1, "description": "", "status": false, "lastActive": "153:861::9841" },
      { "xPos": 150, "yPos": 150, "mac": "2", "stroke": 5, "id": 2, "description": "", "status": true, "lastActive": "153:861::9841" },
      { "xPos": 250, "yPos": 250, "mac": "3", "stroke": 5, "id": 3, "description": "", "status": true, "lastActive": "153:861::9841" },
      { "xPos": 350, "yPos": 350, "mac": "4", "stroke": 5, "id": 4, "description": "", "status": false, "lastActive": "153:861::9841" },

    ]

    this.startTimer();
  }

  startTimer() {

    this.timer = setTimeout(x => {
      if (this.show == false) {
        console.log("timer");
        //this.tags=null;
        this.tags = [
          { "xPos": 50, "yPos": 50, "mac": "1", "stroke": 5, "id": 1, "description": "", "status": true, "lastActive": "153:861::9841" },
          { "xPos": 150, "yPos": 150, "mac": "2", "stroke": 5, "id": 2, "description": "", "status": true, "lastActive": "153:861::9841" },
          { "xPos": 250, "yPos": 250, "mac": "3", "stroke": 5, "id": 3, "description": "", "status": true, "lastActive": "153:861::9841" },
          { "xPos": 350, "yPos": 350, "mac": "4", "stroke": 5, "id": 4, "description": "", "status": true, "lastActive": "153:861::9841" },
        ]

        /*this.TagProvider.getTags()
        .then(data => {
          this.tags = data;
          console.log(this.tags)
        });*/


      }
      this.startTimer();
    }, this.delay * 1000);



  }

   checkStatus(id){
     this.teller++
    // console.log(this.teller)
    if(this.tags[id-1].status == true){
      return "red";
    }
    else if(this.tags[id-1].status == false){
      return "green";
    }
  }

  rangeChanged(interval) {
    this.delay = interval
    console.log(this.delay)
  }

  dataURItoBlob(dataURI) {
    const byteString = atob(dataURI);
    const arrayBuffer = new ArrayBuffer(byteString.length);
    const int8Array = new Uint8Array(arrayBuffer);

    for (let i = 0; i < byteString.length; i++) {
      int8Array[i] = byteString.charCodeAt(i);
    }
    const blob = new Blob([arrayBuffer], { type: 'image/jpeg' });
    return blob;
  }

  public ngAfterViewInit() {
    const canvasEl: HTMLCanvasElement = this.canvas.nativeElement;
    this.cx = canvasEl.getContext('2d')!;
    let image = new Image();


    canvasEl.width = this.width;
    canvasEl.height = this.height;
    this.test = canvasEl.offsetTop

    this.cx.lineWidth = 3;
    this.cx.lineCap = 'round';
    this.cx.strokeStyle = '#000';
    image.onload = () => {
      this.cx.drawImage(image, 0, 0, this.width, this.height);
    }
    image.src = this.imageBase64

  }

  loadData() {
    this.TagProvider.getMap()
      .then(data => {
        this.imageBase64 = data
        console.log(this.imageBase64)
      });

    this.TagProvider.getTags()
      .then(data => {
        this.tags = data;
        console.log(this.tags)
      });
  }

  mouseEnter(x) {
    this.tags[x - 1].stroke = 10
    this.left = this.tags[x - 1].xPos + (this.totalw - this.width) / 2
    this.top = this.tags[x - 1].yPos + (((this.totalh - this.height) / 2) - document.body.clientHeight)
    this.info = String(this.tags[x - 1].id)
    this.description = String(this.tags[x - 1].description)
    this.show = true;



  }

  mouseLeave(x) {
    this.tags[x - 1].stroke = 5
    this.show = false;

  }

}

export interface ITags {
  xPos: number;
  yPos: number;
  mac: String;
  stroke: number
  id: number;
  description: String;
  status: boolean;
  lastActive: String;
}
