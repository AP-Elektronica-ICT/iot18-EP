import { Component, OnInit } from '@angular/core';
import { TagServiceProvider } from '../providers/tag-service/tag-service';


@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent {

  file: any;
  map: any
  mapHeight: number;
  mapWidth: number;
  imageWidth:number;
  imageHeight:number;


  constructor(public TagProvider: TagServiceProvider) {
        this.imageHeight = window.innerHeight *0.7
  }



  onUploadChange(event: any) {
    this.file = event.target.files[0]
    var reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (event) => {
      this.map = (<FileReader>event.target).result;

    }
  }

  handleReaderLoaded(e) {
    this.TagProvider.uploadMap(JSON.stringify({
      Width: this.mapWidth,
      Length: this.mapHeight,
      Picture: 'data:image/png;base64,' + btoa(e.target.result)
    }))
      .then(data => {
        if (data) {
          console.log("succes")
        }
        else {
          console.log("fail")
        }
      });
  }

  upload(height, width) {
    this.mapHeight = height;
    this.mapWidth = width
    if (this.file) {
      const reader = new FileReader();

      reader.onload = this.handleReaderLoaded.bind(this);
      reader.readAsBinaryString(this.file);
    }
  }



}
