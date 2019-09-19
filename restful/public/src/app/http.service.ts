import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) {
    console.log('In constructor')
    this.getTasks();
    this.showTask("5d83b45c271a532398f969dd");

    
  }

  getTasks(){
    console.log('in getTasks!')
    let tempObservable = this._http.get('/tasks');
    tempObservable.subscribe(data => console.log("got tasks!",data));
  }

  showTask(id: string){
    console.log('in showTask!')
    let tempObservable = this._http.get('/tasks/' + id);
    tempObservable.subscribe(data => console.log('showing task: ', data))
  }
}