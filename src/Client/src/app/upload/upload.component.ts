import { Component, OnInit } from '@angular/core';
import { TagServiceProvider } from '../providers/tag-service/tag-service';


@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent {

  selectedFile: File = null;
  url = '';


  constructor(public TagProvider: TagServiceProvider) {

  }


  onFileSelected(event) {
    this.selectedFile = <File>event.target.files[0];
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.onload = (event: any) => {
        this.url = event.target.result;
      }
      reader.readAsDataURL(event.target.files[0]);
    }

  }

  onUpload() {
    console.log(this.selectedFile)
    const fd = new FormData();
    fd.append('image', this.selectedFile, this.selectedFile.name);
    this.TagProvider.UploadMap(fd)
      .then(data => {
        if (data) {
          console.log("succes")
        }
        else {
          console.log("mislukt")
        }
      });
  }


}
