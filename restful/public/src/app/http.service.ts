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

  showTask(id:string){
    console.log('in showTask!')
    return this._http.get(`/tasks/${id}`)
  }

  addTask(newtask) {
    return this._http.post('/tasks', newtask)
  }

  updateTask(id:string, updateTask){
    return this._http.put(`/tasks/${id}`, updateTask)
  }

  deleteTask(id:string){
    console.log(' in deletetask of http.service.ts')
    return this._http.delete(`/tasks/${id}`)
  }

}