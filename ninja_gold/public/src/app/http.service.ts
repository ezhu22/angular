import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { 
    console.log('In constructor of http.service.ts')
  }

  getNinjas(){
    console.log('in getNinjas of http.service.ts');
    return this._http.get('/ninjas')
  }

  showNinja(id:string){
    console.log('in showNinja of http.service.ts')
    return this._http.get(`/ninjas/${id}`);
  }

  updateNinja(id:string, gold:number){
    console.log('in updateNinja of http.service.ts');
    const data = JSON.stringify(`"gold": ${gold}`)
    return this._http.put(`/ninjas/${id}`, data);
  }
  deleteNinja(id:string){
      console.log('in deleteNinja of http.service.ts');
      return this._http.delete(`/ninjas/${id}`);
  }
}
