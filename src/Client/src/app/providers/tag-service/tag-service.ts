import { Injectable } from '@angular/core'; 
import { HttpClient, HttpHeaders } from '@angular/common/http'; 
import { ITag, IMap } from '../../map/map.component';
import { promise } from 'protractor';
import { ITagById } from '../../detail/detail.component';

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
  //apiLink = "https://localhost:5001/api"
  apiLink = "https://iot-ep.azurewebsites.net/api"
  
  getTags(): Promise<ITag>  { 
    return new Promise(resolve => { 
      this.http.get<ITag>(this.apiLink +"/demo").subscribe(data => { 
        resolve(data); 
      }, err => { 
        console.log(err); 
      }); 
    }); 
  } 

  getTagId(id:any): Promise<ITagById>{ 
    return new Promise(resolve => { 
      this.http.get<ITagById>(this.apiLink +'/tags/'+id).subscribe(data => { 
        resolve(data); 
      }, err => { 
        console.log(err); 
      }); 
    }); 
  } 

  getMap(): Promise<IMap>{ 
    return new Promise(resolve => { 
      this.http.get<IMap>(this.apiLink +'/picturemap/1').subscribe(data => { 
        resolve(data); 
      }, err => { 
        console.log(err); 
      }); 
    }); 
  } 

  addTag(data,uesrId,mapId) { 
    return new Promise((resolve) => { 
      console.log(data)
      this.http.post(this.apiLink +'/tags/' + uesrId +'/' + mapId,data,this.httpOptions) 
        .subscribe(res => { 
          resolve(res); 
        }, err => { 
          console.log(err) 
        }); 
    }); 
  }  

  deleteTag(data) { 
    return new Promise((resolve) => { 
      this.http.post(this.apiLink +'/delete', JSON.stringify(data)) 
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
      this.http.put(this.apiLink +'/map/1',data,this.httpOptions)
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
      this.http.put(this.apiLink +'/tags/'+id,data,this.httpOptions).subscribe(data => { 
        resolve(data); 
      }, err => { 
        console.log(err); 
      }); 
    }); 
  } 
}