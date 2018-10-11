import * as core from '@angular/core';
import { TagServiceProvider } from '../providers/tag-service/tag-service';
import { Input, ViewChild } from '@angular/core';



@core.Component({
  selector: 'app-map',
  templateUrl: './map2.0.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements core.OnInit {

  @ViewChild("canvas") canvas;
  @Input() public width = 800;
  @Input() public height = 445;
  private cx: CanvasRenderingContext2D;
  tags: ITags[];



  constructor(public TagProvider: TagServiceProvider) {
    this.loadTags();
    this.drawCircle();

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
      var i = 10;
      this.cx.drawImage(image, 0, 0, this.width, this.height);
      //draw a circle
      for (var i = 0; i < this.tags.length; i++) {
        this.cx.beginPath();
        this.cx.arc(this.tags[i].XPos,this.tags[i].YPos, 10, 0, Math.PI * 2, true);
        this.cx.stroke();
      }
    }
    image.src = "assets/images/map.PNG";

  }
  loadTags() {
    this.TagProvider.getTags()
      .then(data => {
        this.tags = data;
        console.log(data);
      });
  }

  drawCircle() {

  }




  ngOnInit() {

  }

}

export interface ITags {
  XPos: number;
  YPos: number;
  TagId: number;
}
