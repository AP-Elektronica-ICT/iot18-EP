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
  tags: ITag[];
  show = false;
  info: String;
  description: String;
  top = 0;
  left = 0;
  test = 0;
  blob: any;
  imageBase64: IImage;
  timer: any;
  value: number = 100;
  delay = 1;
  color: string = "yellow"
  teller: any;
  _distance :any;
  strokeWidth = 5;
  map:any;





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
          this.tags = data
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

  public ngAfterViewInit() {
    //this.loadData();
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
      image.src = "data:image/png;base64,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"

  }

  loadData() {
    this.TagProvider.getMap()
      .then(data => {
        console.log(data);
        this.imageBase64 = data
        this.map = this.imageBase64.map
        console.log(this.map)
      });


    this.TagProvider.getTags()
      .then(data => {
        this.tags = data;
        console.log(this.tags)
      });
  }

  refresh(){
    if(this.totalw != window.innerWidth || this.totalh != window.innerHeight){
      this.totalw = window.innerWidth
      this.totalh = window.innerHeight;
      this.width = this.totalw *0.6
      this.height = this.width / 16 * 9;
      this.ngAfterViewInit();


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
export interface IImage {
  map: string;
  name: number;
  id: number;
}
