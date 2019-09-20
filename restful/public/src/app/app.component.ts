import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'Tasks';
  tasks = [];

    constructor(private _httpService: HttpService){}
    ngOnInit(){
      console.log('in OnInit of app.component.ts')
      this.getTasksFromService();
    }
    getTasksFromService(){
      console.log('in gettasksfromservice of app.component.ts')
      let observable = this._httpService.getTasks();
      observable.subscribe(data => {
        console.log('Got our tasks!', data);
        this.tasks = data
      });
    }
}
