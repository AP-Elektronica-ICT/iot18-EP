import { Injectable } from '@angular/core'; 
import { HttpClient, HttpHeaders } from '@angular/common/http'; 
import { ITags, IImage } from '../../map/map.component';

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
  
  getTags(): Promise<ITags[]>  { 
    return new Promise(resolve => { 
      this.http.get<ITags[]>('https://iot-ep.azurewebsites.net/api/user').subscribe(data => { 
        resolve(data); 
      }, err => { 
        console.log(err); 
      }); 
    }); 
  } 

  /*getConcept(): Promise<IConcept> { 
    return new Promise(resolve => { 
      this.http.get<IConcept>('https://iot-ep.azurewebsites.net/api/measurements/TAG03').subscribe(data => { 
        resolve(data); 
      }, err => { 
        console.log(err); 
      }); 
    }); 
  } */

  getTagId(id:any) { 
    return new Promise(resolve => { 
      this.http.get('https://iot-ep.azurewebsites.net/api/tags/id='+id).subscribe(data => { 
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

  getMap(): Promise<IImage> { 
    return new Promise(resolve => { 
      this.http.get<IImage>('https://iot-ep.azurewebsites.net/api/users/2').subscribe(data => { 
        resolve(data); 
        console.log(data); 
      }, err => { 
        console.log(err); 
       
      }); 
    }); 
  } 

  putDescription(data) { 
    return new Promise(resolve => { 
      this.http.put('https://iot-ep.azurewebsites.net/api/tags',JSON.stringify(data)).subscribe(data => { 
        resolve(data); 
      }, err => { 
        console.log(err); 
      }); 
    }); 
  } 
}