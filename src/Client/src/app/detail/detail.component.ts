import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {   ITag } from '../map/map.component';
import { TagServiceProvider } from '../providers/tag-service/tag-service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent {
  sub: any;
  id: any;
  tag: ITagById;

  @ViewChild("canvas") canvas;
  @ViewChild('difke') myDiv: ElementRef;
  @Input() public width = window.innerWidth * 0.6;
  //@Input() public height = this.width / 16 * 9;
  @Input() public height = this.width;

  totalw = window.innerWidth
  totalh = window.innerHeight


  private cx: CanvasRenderingContext2D;
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
  _distance: any;


  strokeWidth = 5;
  map: any;


  constructor(public TagProvider: TagServiceProvider, private route: ActivatedRoute) { }
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      console.log(params.get('id'));
      this.id = params.get('id');
    });

    this.TagProvider.getTagId(this.id)
      .then(data => {
        console.log(data)
      })

    /*this.tag = [
      { "xPos": this._distance, "yPos": 50, "mac": "1", "stroke": 5, "id": 1, "description": "", "status": true, "lastActive": "153:861::9841" },
      { "xPos": 150, "yPos": 150, "mac": "2", "stroke": 5, "id": 2, "description": "", "status": true, "lastActive": "153:861::9841" },
      { "xPos": 250, "yPos": 250, "mac": "3", "stroke": 5, "id": 3, "description": "", "status": true, "lastActive": "153:861::9841" },
      { "xPos": 350, "yPos": 350, "mac": "4", "stroke": 5, "id": 4, "description": "", "status": true, "lastActive": "153:861::9841" },
    ];*/
  }


  checkStatus(id) {
    this.teller++
    // console.log(this.teller)
    if (this.tag[id - 1].status == true) {
      return "red";
    }
    else if (this.tag[id - 1].status == false) {
      return "green";
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
    image.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAzsAAAHcCAYAAADx8bQ8AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAAA8OSURBVHhe7dcvjmZ1HsXhDgFDQtgACYgSjQPBH1ECHLYNW0CwAAQJgg2QFh0sCEJqBcUWUAgSDAGHQOBx76RmKmOqQjKV07fOnHqe5FzzU9d9P49OAAAAg8QOAAAw6dEnn3xyevLkiZmZmZmZ2cS++OKL/8TO66+/fnr06JGZmZmZmdnEPvjgA7FjZmZmZmZ7EztmZmZmZjY5sWNmZmZmZpP7x9h58cUXT6+++qqZmZmZmVn1XnjhhRs984+x8+GHH/77EQAAoNkbb7xxo2fEDgAA8H9P7AAAAJPEDgAAMEnsAAAAk8QOAAAwSewAAACTxA4AADBJ7AAAAJPEDgAAMEnsAAAAk8QOAAAwSewAAACTxA4AADBJ7AAAAJPEDgAAMEnsAAAAk8QOAAAwSewAAACTxA4AADBJ7AAAAJPEDgAAMEnsAAAAk8QOAAAwSewAAACTxA4AADBJ7AAAAJPEDgAAMEnsAAAAk8QOAAAwSewAAACTxA4AADBJ7AAAAJPEDgAAMEnsAAAAk8QOAAAwSewAAACTxA4AADBJ7AAAAJPEDgAAMEnsAAAAk8QOAAAwSewAAACTxA4AADBJ7AAAAJPEDgAAMEnsAAAAk8QOAAAwSewAAACTxA4AADBJ7AAAAJMeROz89ddfpz///NPMzMzMzA7Y33//fX2J368HETtnZ2c3/sPMzMzMzJ7PLi4uri/x+yV2zMzMzMwsOrFzILFjZmZmZnbcxM6BxI6ZmZmZ2XETOwcSO2ZmZmZmx03sHOi22HnttddOn332mZmZmZmZ3XEff/zxjTv7amLnQLfFzvn5+fUrAABwF5eXlzfu7KuJnQOJHQAAyBM7BcQOAADkiZ0CYgcAAPLETgGxAwAAeWKngNgBAIA8sVNA7AAAQJ7YKSB2AAAgT+wUEDsAAJAndgqIHQAAyBM7BcQOAADkiZ0CYgcAAPLETgGxAwAAeWKngNgBAIA8sVNA7AAAQJ7YKSB2AAAgT+wUEDsAAJAndgqIHQAAyBM7BcQOAADkiZ0CYgcAAPLETgGxAwAAeWKngNgBAIA8sVNA7AAAQJ7YKSB2AAAgT+wUEDsAAJAndgqIHQAAyBM7BcQOAADkiZ0CYgcAAPLETgGxAwAAeWKngNgBAIA8sVNA7AAAQJ7YKSB2AAAgT+wUEDsAAJAndgqIHQAAyBM7BcQOAADkiZ0CYgcAAPLETgGxAwAAeWKngNgBAIA8sVNA7AAAQJ7YKSB2AAAgT+wUEDsAAJAndgqIHQAAyBM7BcQOAADkiZ0CYgcAAPLETgGxAwAAeWKngNgBAIA8sVNA7AAAQJ7YKSB2AAAgT+wUEDsAAJAndgqIHQAAyBM7BcQOAADkiZ0CYgcAAPLETgGxAwAAeWKngNgBAIA8sVNA7AAAQJ7YKSB2AAAgT+wUEDsAAJAndgqIHQAAyBM7BcQOAADkiZ0CYgcAAPLETgGxAwAAeWKngNgBAIA8sVNA7AAAQJ7YKSB2AAAgT+wUEDsAAJAndgqIHQAAyBM7BcQOAADkiZ0CYgcAAPLETgGxAwAAeWKngNgBAIA8sVNA7AAAQJ7YKXBb7Lzyyiun9957z8zMzMzM7rjHjx/fuLOvJnYOdFvsmJmZmZnZ85nYOZDYMTMzMzM7bmLnQGLHzMzMzOy4iZ0DiR0zMzMzs+Mmdg700Ucfnd58800zMzMzMztgP/zww/Ulfr8eROwAAAAPj9gBAAAmiR0AAGCS2AEAACaJHQAAYJLYAQAAJokdAABgktgBAAAmiR0AAGCS2AEAACaJHQAAYJLYAQAAJokdAABgktgBAAAmiR0AAGCS2AEAACaJHQAAYJLYAQAAJokdAABgktgBAAAmiR0AAGCS2AEAACaJHQAAYJLYAQAAJokdAABgktgBAAAmiR0AAGCS2AEAACaJHQAAYJLYAQAAJokdAABgktgBAAAmiR0AAGCS2AEAACaJHQAAYJLYAQAAJokdAABgktgBAAAmiR0AAGCS2AEAACaJHQAAYJLYAQAAJokdAABgktgBAAAmiR0AAGCS2AEAACaJHQAAYJLYAQAAJokdAABgktgBAAAmiR0AAGDSg4idZ8+enb788kszMzMzMztgv/zyy/Ulfr8eROycnZ3d+A8zMzMzM3s+u7i4uL7E75fYMTMzMzOz6MTOgcSOmZmZmdlxEzsHEjtmZmZmZsdN7BxI7JiZmZmZHTexc6DbYuedd945/f7772ZmZmZmdsd98803N+7sq4mdA90WO+fn59evAADAXVxeXt64s68mdg4kdgAAIE/sFBA7AACQJ3YKiB0AAMgTOwXEDgAA5ImdAmIHAADyxE4BsQMAAHlip4DYAQCAPLFTQOwAAECe2CkgdgAAIE/sFBA7AACQJ3YKiB0AAMgTOwXEDgAA5ImdAmIHAADyxE4BsQMAAHlip4DYAQCAPLFTQOwAAECe2CkgdgAAIE/sFBA7AACQJ3YKiB0AAMgTOwXEDgAA5ImdAmIHAADyxE4BsQMAAHlip4DYAQCAPLFTQOwAAECe2CkgdgAAIE/sFBA7AACQJ3YKiB0AAMgTOwXEDgAA5ImdAmIHAADyxE4BsQMAAHlip4DYAQCAPLFTQOwAAECe2CkgdgAAIE/sFBA7AACQJ3YKiB0AAMgTOwXEDgAA5ImdAmIHAADyxE4BsQMAAHlip4DYAQCAPLFTQOwAAECe2CkgdgAAIE/sFBA7AACQJ3YKiB0AAMgTOwXEDgAA5ImdAmIHAADyxE4BsQMAAHlip4DYAQCAPLFTQOwAAECe2CkgdgAAIE/sFBA7AACQJ3YKiB0AAMgTOwXEDgAA5ImdAmIHAADyxE4BsQMAAHlip4DYAQCAPLFTQOwAAECe2CkgdgAAIE/sFBA7AACQJ3YKiB0AAMgTOwXEDgAA5ImdAmIHAADyxE4BsQMAAHlip4DYAQCAPLFTQOwAAECe2CkgdgAAIE/sFBA7AACQJ3YKiB0AAMgTOwXEDgAA5ImdAmIHAADyxE6B22Ln7bffPv30009mZmZmZnbHPXv27MadfTWxc6DbYsfMzMzMzJ7PxM6BxI6ZmZmZ2XETOwcSO2ZmZmZmx03sHEjsmJmZmZkdN7FzILFjZmZmZnbcxM6Bvv3229PTp0/NzMzMzOyA/frrr9eX+P16ELEDAAA8PGIHAACYJHYAAIBJYgcAAJgkdgAAgEliBwAAmCR2AACASWIHAACYJHYAAIBJYgcAAJgkdgAAgEliBwAAmCR2AACASWIHAACYJHYAAIBJYgcAAJgkdgAAgEliBwAAmCR2AACASWIHAACYJHYAAIBJYgcAAJgkdgAAgEliBwAAmCR2AACASWIHAACYJHYAAIBJYgcAAJgkdgAAgEliBwAAmCR2AACASWIHAACYJHYAAIBJYgcAAJgkdgAAgEliBwAAmCR2AACASWIHAACYJHYAAIBJYgcAAJgkdgAAgEliBwAAmCR2AACASWIHAACYJHYAAIBJYgcAAJgkdgAAgEliBwAAmCR2AACASWIHAACYJHYAAIBJYgcAAJgkdgAAgEliBwAAmCR2AACASWIHAACYJHYAAIBJYgcAAJgkdgAAgEkPIna+//7709dff21mZmZmZgfst99+u77E79eDiJ2zs7Mb/2FmZmZmZs9nFxcX15f4/RI7ZmZmZmYWndg5kNgxMzMzMztuYudAYsfMzMzM7LiJnQOJHTMzMzOz4yZ2DnRb7Lz11lunH3/80czMzMzM7rinT5/euLOvJnYOdFvsnJ+fX78CAAB3cXl5eePOvprYOZDYAQCAPLFTQOwAAECe2CkgdgAAIE/sFBA7AACQJ3YKiB0AAMgTOwXEDgAA5ImdAmIHAADyxE4BsQMAAHlip4DYAQCAPLFTQOwAAECe2CkgdgAAIE/sFBA7AACQJ3YKiB0AAMgTOwXEDgAA5ImdAmIHAADyxE4BsQMAAHlip4DYAQCAPLFTQOwAAECe2CkgdgAAIE/sFBA7AACQJ3YKiB0AAMgTOwXEDgAA5ImdAmIHAADyxE4BsQMAAHlip4DYAQCAPLFTQOwAAECe2CkgdgAAIE/sFBA7AACQJ3YKiB0AAMgTOwXEDgAA5ImdAmIHAADyxE4BsQMAAHlip4DYAQCAPLFTQOwAAECe2CkgdgAAIE/sFBA7AACQJ3YKiB0AAMgTOwXEDgAA5ImdAmIHAADyxE4BsQMAAHlip4DYAQCAPLFTQOwAAECe2CkgdgAAIE/sFBA7AACQJ3YKiB0AAMgTOwXEDgAA5ImdAmIHAADyxE4BsQMAAHlip4DYAQCAPLFTQOwAAECe2CkgdgAAIE/sFBA7AACQJ3YKiB0AAMgTOwXEDgAA5ImdAmIHAADyxE4BsQMAAHlip4DYAQCAPLFTQOwAAECe2CkgdgAAIE/sFBA7AACQJ3YKiB0AAMgTOwXEDgAA5ImdAmIHAADyxE4BsQMAAHlip4DYAQCAPLFTQOwAAECe2CkgdgAAIE/sFBA7AACQJ3YKiB0AAMgTOwVui51333339Mcff5iZmZmZ2R333Xff3bizryZ2DnRb7JiZmZmZ2fOZ2DmQ2DEzMzMzO25i50Bix8zMzMzsuImdA4kdMzMzM7PjJnYOJHbMzMzMzI6b2DnQV199dfr888/NzMzMzOyA/fzzz9eX+P16ELEDAAA8PGIHAACYJHYAAIBJYgcAAJgkdgAAgEliBwAAmCR2AACASWIHAACYJHYAAIBJYgcAAJgkdgAAgEliBwAAmCR2AACASWIHAACYJHYAAIBJYgcAAJgkdgAAgEliBwAAmCR2AACASWIHAACYJHYAAIBJYgcAAJgkdgAAgEliBwAAmCR2AACASWIHAACYJHYAAIBJYgcAAJgkdgAAgEliBwAAmCR2AACASWIHAACYJHYAAIBJYgcAAJgkdgAAgEliBwAAmCR2AACASWIHAACYJHYAAIBJYgcAAJgkdgAAgEliBwAAmCR2AACASWIHAACYJHYAAIBJYgcAAJgkdgAAgEliBwAAmPQ/x87LL798evz4sZmZmZmZWfVeeumlGz3zj7FjZmZmZmb2/zqxY2ZmZmZmkxM7ZmZmZmY2ObFjZmZmZmaT+2/sPHny5PT++++bmZmZmZlN7NNPP/1P7Pz7CwAAMOV0+hfkcx6iIjJf+gAAAABJRU5ErkJggg==";

  }

  mouseEnter(x) {
    this.tag[x - 1].stroke = 10
    this.left = this.tag[x - 1].xPos + (this.totalw - this.width) / 2
    this.top = this.tag[x - 1].yPos + (((this.totalh - this.height) / 2) - document.body.clientHeight)
    this.info = String(this.tag[x - 1].id)
    this.description = String(this.tag[x - 1].description)
    this.show = true;



  }

  mouseLeave(x) {
    this.tag[x - 1].stroke = 5
    this.show = false;

  }


}

export interface IPos{
  id: number;
  x_Pos: number;
  y_Pos: number;
  stroke: number;
  status: boolean;
}

export interface ITagById{
  tagId:number;
  description: string;
  pos: IPos[];
  mac: string;
  user: any;
  map: any;
}