import { Injectable } from '@angular/core'; 
import { HttpClient } from '@angular/common/http'; 
import { ITags } from '../../map/map.component';


@Injectable() 
export class TagServiceProvider { 
 
  constructor(public http: HttpClient) { 
    
  }
  
  getTags(): Promise<ITags[]>  { 
    return new Promise(resolve => { 
      this.http.get<ITags[]>('').subscribe(data => { 
        resolve(data); 
      }, err => { 
        console.log(err); 
      }); 
    }); 
  } 

  UploadMap(data) { 
    return new Promise((resolve, reject) => { 
      this.http.post('', JSON.stringify(data)) 
        .subscribe(res => { 
          resolve(res); 
        }, err => { 
          console.log(err) 
        }); 
    }); 
  } 
}