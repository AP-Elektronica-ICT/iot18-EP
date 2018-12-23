import { Injectable } from '@angular/core'; 
import { HttpClient, HttpHeaders } from '@angular/common/http'; 
import { ITag, IMap } from '../../map/map.component';

@Injectable() 
export class TagServiceProvider { 
  httpOptions:any
  constructor(public http: HttpClient) { 
     this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    };
  }
  
  getTags(): Promise<IMap>  { 
    return new Promise(resolve => { 
      this.http.get<IMap>('https://iot-ep.azurewebsites.net/api/map/1/1').subscribe(data => { 
        resolve(data); 
      }, err => { 
        console.log(err); 
      }); 
    }); 
  } 

  getTagId(id:any) { 
    return new Promise(resolve => { 
      this.http.get('https://iot-ep.azurewebsites.net/api/tags/id='+id).subscribe(data => { 
        resolve(data); 
      }, err => { 
        console.log(err); 
      }); 
    }); 
  } 

  addTag(data,uesrId,mapId) { 
    return new Promise((resolve) => { 
      console.log(data)
      this.http.post('https://iot-ep.azurewebsites.net/api/tags/' + uesrId +'/' + mapId,data,this.httpOptions) 
        .subscribe(res => { 
          resolve(res); 
        }, err => { 
          console.log(err) 
        }); 
    }); 
  }  

  deleteTag(data) { 
    return new Promise((resolve) => { 
      this.http.post('https://iot-ep.azurewebsites.net/api/delete', JSON.stringify(data)) 
        .subscribe(res => { 
          resolve(res); 
        }, err => { 
          console.log(err) 
        }); 
    }); 
  } 

  uploadMap(data) { 
    return new Promise((resolve, reject) => { 
      console.log( data)
      this.http.put('https://iot-ep.azurewebsites.net/api/map',data,this.httpOptions)
        .subscribe(res => { 
          resolve(res); 
        }, err => { 
          console.log(err) 
        }); 
    }); 
  } 

  putDescription(data,id) { 
    return new Promise(resolve => { 
      console.log(data)
      this.http.put('https://iot-ep.azurewebsites.net/api/tags/'+id,data,this.httpOptions).subscribe(data => { 
        resolve(data); 
      }, err => { 
        console.log(err); 
      }); 
    }); 
  } 
}