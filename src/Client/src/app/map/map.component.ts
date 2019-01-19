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
   public width;
  public height;
   //public height = this.width;
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
  tags:ITag;
  mapImage:string





  constructor(private router: Router, public TagProvider: TagServiceProvider) {
    this.loadData();
    this.refresh();
  }



  startTimer() {
    this.timer = setTimeout(x => {
      if (this.show == false) {
        
        this.TagProvider.getTags()
        .then(data => {
          //this.tags = data.coordinates
          this.loadtags(data);
        });
      }
      this.startTimer();
    }, this.delay * 1000);
  }

  detailPage(_id) {
    this.router.navigate(['detail',_id])

  }
  loadtags(data){
    if(data[0].x_Pos>3.5 && data[0].y_Pos>3.5 ){
      if(data[0].x_Pos<100 && data[0].y_Pos<100){
      this.tags=null;
       this.tags = data
       //console.log(this.tags.x_Pos + "," + this.tags.y_Pos)
    }
  }
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
    this.width = window.innerWidth * ((this.map.length/ this.map.width)/3);
    this.height = this.width / this.map.length* this.map.width;

    canvasEl.width = this.width;
    canvasEl.height = this.height;
    this.test = canvasEl.offsetTop

    this.cx.lineWidth = 3;
    this.cx.lineCap = 'round';
    this.cx.strokeStyle = '#000';
    image.onload = () => {
      this.cx.drawImage(image, 0, 0, this.width, this.height);
    }
        image.src = this.map.picture
          //image.src = 	"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAzsAAAHcCAYAAADx8bQ8AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAq6SURBVHhe7dyxTStBAEXR8RcR7sErCiCigXUJVEEd7oF6cCVIOEIiJURiP5KXjALsq3OS1ZsOrjSzm+XHAAAAiPm3fgEAAFI2T09Py8fHxzoBAACu2/39/TgcDmMzTdNyOp3WYwAAgOs2z/M4Ho+usQEAAE1iBwAASBI7AABA0p9vdm5ubsZ2u10XAADAZfr8/Bzf39/rOvt9s/Nn7Oz3+/Hy8rIuAACAy3R3dzfe3t7WdeYHBQAAQJrYAQAAksQOAACQJHYAAIAksQMAACSJHQAAIEnsAAAASWIHAABIEjsAAECS2AEAAJLEDgAAkCR2AACAJLEDAAAkiR0AACBJ7AAAAEliBwAASBI7AABAktgBAACSxA4AAJAkdgAAgCSxAwAAJIkdAAAgSewAAABJYgcAAEgSOwAAQJLYAQAAksQOAACQJHYAAIAksQMAACSJHQAAIEnsAAAASWIHAABIEjsAAECS2AEAAJLEDgAAkCR2AACAJLEDAAAkiR0AACBJ7AAAAEliBwAASBI7AABAktgBAACSxA4AAJAkdgAAgCSxAwAAJIkdAAAgSewAAABJYgcAAEgSOwAAQJLYAQAAksQOAACQJHYAAIAksQMAACSJHQAAIEnsAAAASWIHAABIEjsAAECS2AEAAJLEDgAAkCR2AACAJLEDAAAkiR0AACBJ7AAAAEliBwAASBI7AABAktgBAACSxA4AAJAkdgAAgCSxAwAAJIkdAAAgSewAAABJYgcAAEgSOwAAQJLYAQAAksQOAACQJHYAAIAksQMAACSJHQAAIEnsAAAASWIHAABIEjsAAECS2AEAAJLEDgAAkCR2AACAJLEDAAAkiR0AACBJ7AAAAEliBwAASBI7AABAktgBAACSxA4AAJAkdgAAgCSxAwAAJIkdAAAgSewAAABJYgcAAEgSOwAAQJLYAQAAksQOAACQJHYAAIAksQMAACSJHQAAIEnsAAAASWIHAABIEjsAAECS2AEAAJLEDgAAkCR2AACAJLEDAAAkiR0AACBJ7AAAAEliBwAASBI7AABAktgBAACSxA4AAJAkdgAAgCSxAwAAJIkdAAAgSewAAABJYgcAAEgSOwAAQJLYAQAAksQOAACQJHYAAIAksQMAACSJHQAAIEnsAAAASWIHAABIEjsAAECS2AEAAJLEDgAAkCR2AACAJLEDAAAkiR0AACBJ7AAAAEliBwAASBI7AABAktgBAACSxA4AAJAkdgAAgCSxAwAAJIkdAAAgSewAAABJYgcAAEgSOwAAQJLYAQAAksQOAACQJHYAAIAksQMAACSJHQAAIEnsAAAASWIHAABIEjsAAECS2AEAAJLEDgAAkCR2AACAJLEDAAAkiR0AACBJ7AAAAEliBwAASBI7AABAktgBAACSxA4AAJAkdgAAgCSxAwAAJIkdAAAgSewAAABJYgcAAEgSOwAAQJLYAQAAksQOAACQJHYAAIAksQMAACSJHQAAIEnsAAAASWIHAABIEjsAAECS2AEAAJLEDgAAkCR2AACAJLEDAAAkiR0AACBJ7AAAAEliBwAASBI7AABAktgBAACSxA4AAJAkdgAAgCSxAwAAJIkdAAAgSewAAABJYgcAAEgSOwAAQJLYAQAAksQOAACQJHYAAIAksQMAACSJHQAAIEnsAAAASWIHAABIEjsAAECS2AEAAJLEDgAAkCR2AACAJLEDAAAkiR0AACBJ7AAAAEliBwAASBI7AABAktgBAACSxA4AAJAkdgAAgCSxAwAAJIkdAAAgSewAAABJYgcAAEgSOwAAQJLYAQAAksQOAACQJHYAAIAksQMAACSJHQAAIEnsAAAASWIHAABIEjsAAECS2AEAAJLEDgAAkCR2AACAJLEDAAAkiR0AACBJ7AAAAEliBwAASBI7AABAktgBAACSxA4AAJAkdgAAgCSxAwAAJIkdAAAgSewAAABJYgcAAEgSOwAAQJLYAQAAksQOAACQJHYAAIAksQMAACSJHQAAIEnsAAAASWIHAABIEjsAAECS2AEAAJLEDgAAkCR2AACAJLEDAAAkiR0AACBJ7AAAAEliBwAASBI7AABAktgBAACSxA4AAJAkdgAAgCSxAwAAJIkdAAAgSewAAABJYgcAAEgSOwAAQJLYAQAAksQOAACQJHYAAIAksQMAACSJHQAAIEnsAAAASWIHAABIEjsAAECS2AEAAJLEDgAAkCR2AACAJLEDAAAkiR0AACBJ7AAAAEliBwAASBI7AABAktgBAACSxA4AAJAkdgAAgCSxAwAAJIkdAAAgSewAAABJYgcAAEgSOwAAQJLYAQAAksQOAACQJHYAAIAksQMAACSJHQAAIEnsAAAASWIHAABIEjsAAECS2AEAAJLEDgAAkCR2AACAJLEDAAAkiR0AACBJ7AAAAEliBwAASBI7AABAktgBAACSxA4AAJAkdgAAgCSxAwAAJIkdAAAgSewAAABJYgcAAEgSOwAAQJLYAQAAksQOAACQJHYAAIAksQMAACSJHQAAIEnsAAAASWIHAABIEjsAAECS2AEAAJLEDgAAkCR2AACAJLEDAAAkiR0AACBJ7AAAAEliBwAASBI7AABAktgBAACSxA4AAJAkdgAAgCSxAwAAJIkdAAAgSewAAABJYgcAAEgSOwAAQJLYAQAAksQOAACQJHYAAIAksQMAACSJHQAAIEnsAAAASWIHAABIEjsAAECS2AEAAJLEDgAAkCR2AACAJLEDAAAkiR0AACBJ7AAAAEliBwAASBI7AABAktgBAACSxA4AAJAkdgAAgCSxAwAAJIkdAAAgSewAAABJYgcAAEgSOwAAQJLYAQAAksQOAACQJHYAAIAksQMAACSJHQAAIEnsAAAASWIHAABIEjsAAECS2AEAAJLEDgAAkCR2AACAJLEDAAAkiR0AACBJ7AAAAEliBwAASBI7AABAktgBAACSxA4AAJAkdgAAgCSxAwAAJIkdAAAgSewAAABJYgcAAEgSOwAAQJLYAQAAksQOAACQJHYAAIAksQMAACSJHQAAIEnsAAAASWIHAABIEjsAAECS2AEAAJLEDgAAkCR2AACAJLEDAAAkiR0AACBJ7AAAAEliBwAASBI7AABAktgBAACSxA4AAJAkdgAAgCSxAwAAJIkdAAAgSewAAABJYgcAAEgSOwAAQJLYAQAAksQOAACQJHYAAIAksQMAACSJHQAAIEnsAAAASWIHAABIEjsAAECS2AEAAJLEDgAAkCR2AACAJLEDAAAkiR0AACBJ7AAAAEliBwAASBI7AABAktgBAACSxA4AAJAkdgAAgCSxAwAAJIkdAAAgSewAAABJYgcAAEgSOwAAQJLYAQAAksQOAACQJHYAAIAksQMAACSJHQAAIEnsAAAASWIHAABIEjsAAECS2AEAAJLEDgAAkCR2AACAJLEDAAAkiR0AACBJ7AAAAEliBwAASBI7AABAktgBAACSxA4AAJAkdgAAgCSxAwAAJIkdAAAgSewAAABJYgcAAEgSOwAAQJLYAQAAksQOAACQJHYAAICkzTRNy+l0WufZ7e3t2O126wIAALhMr6+v4+vra11n8zyP4/H4d+wAAABcq9/YcY0NAABIEjsAAECS2AEAAJI2j4+Py/v7+zoBAACu28PDw3h+fh6b5cd6BgAAEDHGf0F0TozWQ3aJAAAAAElFTkSuQmCC"
      }

  loadData() {
    this.TagProvider.getTags()
      .then(data => {
        //this.map = data;
        //this.tags = this.map.coordinates;
        this.loadtags(data);
        if (typeof data !== 'undefined' && typeof data !== null) {
          this.startTimer();
        }
        //this.mapImage = this.map.picture
        //this.tags = data

      });
      this.TagProvider.getMap()
      .then(data => {
        this.map = data
        this.draw();
      });
  }

  refresh(){
    this.timer = setTimeout(x => {
      if(this.totalw != window.innerWidth || this.totalh != window.innerHeight){
        this.totalw = window.innerWidth
        this.totalh = window.innerHeight;
        this.width = this.totalw *0.35
        //this.height = this.width / 16 * 9;
        this.height = this.width
        this.draw();
      }
      this.refresh();
    },1000);
   
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
    id: number;
    picture: string;
    length: number;
    width: number;
    user?: any;
    anchors?: any;
    tags?: any;
}
