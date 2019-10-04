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
  editTask = [];
  newTask: any;
  updateTask: any;

  constructor(private _httpService: HttpService){}
  ngOnInit(){
    console.log('in OnInit of app.component.ts')
    this.newTask = {title: "", description: "" };
    this.updateTask = {title: "", description: "", status: false};
    this.getTasksFromService();
  }
  getTasksFromService(){
    console.log('in gettasksfromservice of app.component.ts')
    let observable = this._httpService.getTasks();
    observable.subscribe(data => {
      console.log('Got our tasks!', data);
      this.tasks = data;
    });
  }

  showTaskFromService(id:string){
    console.log('in showTasksFromService of app.component.ts');
    console.log('this is the id ',id)
    this.oneTask = [];
    let tempObservable = this._httpService.showTask(id)
    tempObservable.subscribe(data => {
      console.log('Got the one task', data);
      this.oneTask.push(data);
    });
  }

  deleteTaskFromService(id:string){
    console.log('in deleteTaskFromService of app.component.ts')
    let observable = this._httpService.deleteTask(id)
    observable.subscribe( data => {
      console.log(data)
      this.getTasksFromService();
    })
  }

  updateTaskFromService(id:string){
    console.log('in updatedTaskFromService of app.component.ts')
    this.editTask = [];
    let observable = this._httpService.showTask(id)
    observable.subscribe(data =>{
      console.log('Got the task info: ', data);
      this.updateTask.id = data._id.toString();
      this.updateTask.title = data.title;
      this.updateTask.description = data.description;
      this.updateTask.status = true;
      console.log(this.updateTask)
    })
  }
  onSubmit(){
    console.log('submitting data', this.newTask)
    let observable = this._httpService.addTask(this.newTask);
    observable.subscribe(data =>
      {
        console.log('result', data)
        this.getTasksFromService();
      })
    this.newTask = { title: "", description: "" };
  }

  onUpdate(){
    console.log('updating data', this.updateTask);
    let observable = this._httpService.updateTask(this.updateTask.id, this.updateTask)
    observable.subscribe(data =>{
      console.log('result', data)
      this.getTasksFromService();
    })
    this.updateTask = {title: "", description: ""};
  }
}
