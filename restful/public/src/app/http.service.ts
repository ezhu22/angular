import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) {
    console.log('In constructor of http.service.ts')

    
  }

  getTasks(){
    console.log('In get Tasks of http.service.ts')
    return this._http.get('/tasks');
  }

  showTask(id){
    console.log('in showTask!')
    return this._http.get('/tasks/' + id)
  }
}