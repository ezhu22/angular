import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Ninja Gold';
  ninjas = [];
  oneNinja = [];
  randomGold = 0;
  updated_gold = 0;

  constructor(private _httpService: HttpService){}
  ngOnInit(){
    console.log('in OnInit of app.component.ts')
    this.getNinjasFromService();
  }

  getNinjasFromService(){
    console.log('in getNinjasFromService of app.components.ts')
    let observable = this._httpService.getNinjas();
    observable.subscribe(data =>{
      console.log('Got all Ninjas! ', data);
      this.ninjas = data;
    })
  }

  showNinjaFromService(id:string){
    console.log('in showNinjaFromService of app.component.ts');
    console.log('this is tne ninja id ', id)
    this.oneNinja = [];
    let observable = this._httpService.showNinja(id);
    observable.subscribe(data => {
      console.log('found Ninja, ', data);
      this.oneNinja.push(data);
      console.log(this.oneNinja)
      this.updated_gold = this.oneNinja[0].gold;
    })
  }

  calculateGold(location:string, id:string, gold:number){
    console.log('in calculateGold of app.component.ts')
    console.log('this is the location: ', location)
    console.log("this is the playing ninja's id: ", id)
    console.log("this is the playing ninja's gold: ", this.updated_gold)
    this.randomGold = 0;
    if (location == 'farm'){
      this.randomGold = Math.floor(Math.random() * 5) + 1;
      console.log(`You went to the ${location} and generated ${this.randomGold} gold!`);
      this.updated_gold += this.randomGold;
    }
    if (location == 'cave'){
      this.randomGold = Math.floor(Math.random() * 10);
      console.log(`You went to the ${location} and generated ${this.randomGold} gold!`);
      this.updated_gold += this.randomGold;
    }
    if (location == 'house'){
      this.randomGold = Math.floor(Math.random() * 20) - 10;
      if (this.randomGold < 0){
        console.log(`you got caught and lost ${this.randomGold} gold!`)
        this.updated_gold += this.randomGold;
        console.log('this is the updated gold amount', this.updated_gold)
        if(this.updated_gold < 0){
          console.log('Game Over');
          let observable = this._httpService.deleteNinja(id);
          observable.subscribe(success => {
            console.log('Ninja deleted ', success);
          })
        }
      }
      else{
        console.log(`You went to the ${location} and generated ${this.randomGold} gold!`);
        this.updated_gold += this.randomGold;
        console.log('this is the updated gold amount', this.updated_gold)
      }
    }
    if (location == 'casino'){
      this.randomGold = Math.floor(Math.random() * 200) - 100;
      if (this.randomGold < 0){
        console.log(`you got got unlucky and lost ${this.randomGold} gold!`)
        this.updated_gold += this.randomGold;
        console.log('this is the updated gold amount', this.updated_gold)
        if(this.updated_gold < 0){
          console.log('Game Over');
          let observable = this._httpService.deleteNinja(id);
          observable.subscribe(success => {
            console.log('Ninja deleted ', success);
          })
        }
      }
      else{
        console.log(`You went to the ${location} and won ${this.randomGold} gold!`);
        this.updated_gold += this.randomGold;
        console.log('this is the updated gold amount', this.updated_gold)
      }
    }
  }

  saveNinja(id:string, gold:number){
    let observable = this._httpService.updateNinja(id, gold);
    observable.subscribe(response => {
      console.log('Ninja gold saved!', response);
    });
  }
}
