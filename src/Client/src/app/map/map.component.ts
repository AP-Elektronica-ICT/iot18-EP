import * as core from '@angular/core';
import { TagServiceProvider } from '../providers/tag-service/tag-service';
import { Input, ViewChild, ElementRef } from '@angular/core';
import { AnonymousSubject } from 'rxjs/Subject';
import { Router, ActivatedRoute } from '@angular/router';

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
  map: IMap;
  show = false;
  info: String;
  description: String;
  top = 0;
  left = 0;
  test = 0;
  blob: any;
  timer: any;
  value: number = 100;
  delay = 1;
  color: string = "yellow"
  teller: any;
  _distance :any;
  strokeWidth = 5;
  tags:ITag[]
  mapImage:string





  constructor(private router: Router, public TagProvider: TagServiceProvider) {
    this.loadData();
    this.startTimer();
  }



  startTimer() {
    this.timer = setTimeout(x => {
      if (this.show == false) {
        
        this.TagProvider.getTags()
        .then(data => {
          this.tags=null;
          this.tags = data.coordinates
        });
        this.refresh();

      }
      this.startTimer();
    }, this.delay * 1000);
  }

  detailPage(_id) {
    this.router.navigate(['detail',_id])

  }

  checkStatus(id) {
    this.teller++
    // console.log(this.teller)
    if (this.tags[id].status == true) {
      return "yellow";
    }
    else if (this.tags[id].status == false) {
      return "red";
    }
  }

  rangeChanged(interval) {
    this.delay = interval
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

   draw() {
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
        image.src = this.mapImage
  }

  loadData() {
    this.TagProvider.getTags()
      .then(data => {
        this.map = data;
        this.tags = this.map.coordinates;
        this.mapImage = this.map.picture
        this.draw();
      });
  }

  refresh(){
    if(this.totalw != window.innerWidth || this.totalh != window.innerHeight){
      this.totalw = window.innerWidth
      this.totalh = window.innerHeight;
      this.width = this.totalw *0.6
      this.height = this.width / 16 * 9;
      this.draw();


    }
  }

  mouseEnter(x) {
    this.tags[x].stroke = 10;
    this.left = ((this.width/100)*this.tags[x].x_Pos) + (this.totalw - this.width) / 2
    this.top = ((this.height/100)*this.tags[x].y_Pos) + (((this.totalh - this.height) / 2) - document.body.clientHeight)
    this.info = String(this.tags[x].tag.id)
    this.description = String(this.tags[x].tag.description)
    this.show = true;



  }

  mouseLeave(x) {
    this.tags[x].stroke = 5
    this.show = false;

  }

}


export interface IUser {
  id: number;
  mac: string;
  description: string;
  user: any;
  map: any;
}

export interface ITag{
  tag: IUser;
  x_Pos: number;
  y_Pos: number;
  status: boolean;
  stroke: number;
}
export interface IMap{
  picture: string;
  coordinates: ITag[];
}
