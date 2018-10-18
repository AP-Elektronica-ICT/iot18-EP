import * as core from '@angular/core';
import { TagServiceProvider } from '../providers/tag-service/tag-service';
import { Input, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { TargetLocator } from 'selenium-webdriver';


@core.Component({
  selector: 'app-map',
  templateUrl: './map2.0.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent {

  @ViewChild("canvas") canvas;
  @Input() public width = window.innerWidth * 0.6;
  @Input() public height = this.width / 16 * 9;
  w = window.innerWidth
  h = window.innerHeight


  private cx: CanvasRenderingContext2D;
  tags: ITags[];
  show: boolean;
  info: String;
  top = 0;
  left = 0;


  strokeWidth = 5;





  constructor(public TagProvider: TagServiceProvider) {
    this.loadTags();

    this.tags = [
      { "xPos": 50, "yPos": 50, "tagId": "0", "stroke": 5, "id": 0 },
      { "xPos": 150, "yPos": 150, "tagId": "1", "stroke": 5, "id": 1 },
      { "xPos": 250, "yPos": 250, "tagId": "2", "stroke": 5, "id": 2 },
      { "xPos": 350, "yPos": 350, "tagId": "3", "stroke": 5, "id": 3 },

    ]

  }


  public ngAfterViewInit() {
    const canvasEl: HTMLCanvasElement = this.canvas.nativeElement;
    this.cx = canvasEl.getContext('2d')!;
    let image = new Image();


    canvasEl.width = this.width;
    canvasEl.height = this.height;

    this.cx.lineWidth = 3;
    this.cx.lineCap = 'round';
    this.cx.strokeStyle = '#000';
    image.onload = () => {
      this.cx.drawImage(image, 0, 0, this.width, this.height);
    }
    image.src = "assets/images/map.PNG";

  }
  loadTags() {
    this.TagProvider.getTags()
      .then(data => {
        //this.tags = data;
        console.log(this.tags)
      });
  }

  mouseEnter(x, event: MouseEvent): void {
    this.tags[x].stroke = 10
    //this.left = event.clientX;
    //this.top = event.clientY;
    this.left = this.tags[x].xPos +(this.w-this.width)/2
    this.top = this.tags[x].yPos  -document.body.clientHeight
    console.log(this.left)
    console.log(this.top)
    this.info = String(this.tags[x].id)
    this.show = true;


  }

  mouseLeave(x) {
    this.tags[x].stroke = 5
    this.show = false;

  }



}

export interface ITags {
  xPos: number;
  yPos: number;
  tagId: String;
  stroke: number
  id: number;
}
