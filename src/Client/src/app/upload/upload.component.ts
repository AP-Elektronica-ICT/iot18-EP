import { Component, OnInit } from '@angular/core';
import { TagServiceProvider } from '../providers/tag-service/tag-service';


@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent {

  file:any;
  test:any


  constructor(public TagProvider: TagServiceProvider) {
  }



  onUploadChange(event: any) {
    this.file = event.target.files[0]
  var reader = new FileReader();
  reader.readAsDataURL(event.target.files[0]);
  reader.onload = (event) => {
   this.test = (<FileReader>event.target).result;

  }
}
  
  handleReaderLoaded(e) {
    console.log('data:image/png;base64,' + btoa(e.target.result));
    this.TagProvider.uploadMap('data:image/png;base64,' + btoa(e.target.result))
    .then(data => {
      if (data) {
        console.log("succes")
      }
      else {
        console.log("fail")
      }
    });
  }

  upload(){
    if (this.file) {
      const reader = new FileReader();
  
      reader.onload = this.handleReaderLoaded.bind(this);
      reader.readAsBinaryString(this.file);
    }
  }



}
