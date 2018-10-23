import { Injectable } from '@angular/core'; 
import { HttpClient } from '@angular/common/http'; 
import { ITags } from '../../map/map.component';


@Injectable() 
export class TagServiceProvider { 
 
  constructor(public http: HttpClient) { 
    
  }
  
  getTags(): Promise<ITags[]>  { 
    return new Promise(resolve => { 
      this.http.get<ITags[]>('https://iot-ep.azurewebsites.net/api/map').subscribe(data => { 
        resolve(data); 
      }, err => { 
        console.log(err); 
      }); 
    }); 
  } 

  addTag(data) { 
    return new Promise((resolve) => { 
      this.http.post('https://iot-ep.azurewebsites.net/api/add', JSON.stringify(data)) 
        .subscribe(res => { 
          resolve(res); 
        }, err => { 
          console.log(err) 
        }); 
    }); 
  }  

  eleteTag(data) { 
    return new Promise((resolve) => { 
      this.http.post('https://iot-ep.azurewebsites.net/api/delete', JSON.stringify(data)) 
        .subscribe(res => { 
          resolve(res); 
        }, err => { 
          console.log(err) 
        }); 
    }); 
  } 

  UploadMap(data) { 
    return new Promise((resolve, reject) => { 
      this.http.post('https://iot-ep.azurewebsites.net/api/getmap', JSON.stringify(data)) 
        .subscribe(res => { 
          resolve(res); 
        }, err => { 
          console.log(err) 
        }); 
    }); 
  } 
}