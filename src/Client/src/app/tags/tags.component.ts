import { Component, OnInit } from '@angular/core';
import { TagServiceProvider } from '../providers/tag-service/tag-service';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss']
})
export class TagsComponent {


  constructor(public TagProvider: TagServiceProvider) { 
    
  }
  

  addTags(){
    this.TagProvider.addTag(JSON.stringify('16801918698'))
          .then(data => {
            if (data) {
              
            }
            else {
              
            }
          });
      

  }

  
  

  

}
