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
  oneTask = [];

  constructor(private _httpService: HttpService){}
  ngOnInit(){
    console.log('in OnInit of app.component.ts')
  }
  getTasksFromService(){
    console.log('in gettasksfromservice of app.component.ts')
    let observable = this._httpService.getTasks();
    observable.subscribe(data => {
      console.log('Got our tasks!', data);
      this.tasks = data;
    });
  }

  showTaskFromService(event, id:string){
    console.log('in showTasksFromService of app.component.ts');
    console.log('this is the event ', event)
    console.log('this is the id ',id)
    this.oneTask = [];
    let tempObservable = this._httpService.showTask(id)
    tempObservable.subscribe(data => {
      console.log('Got the one task', data);
      this.oneTask.push(data);
    });
}
}
