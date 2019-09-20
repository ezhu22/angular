import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { 
    this.getPokemon();
  }

  getPokemon(){
    let pikachu = this._http.get('https://pokeapi.co/api/v2/pokemon/25/');
    pikachu.subscribe(data => {
      console.log(data);
      console.log(`Found ${data.name}, number: ${data.id} with type: ${data.types[0].type.name}.`);
      let url = data.types[0].type.url
      console.log('Here is the api url: ', url)
      let types = this._http.get(url);
        types.subscribe(data =>{
          console.log(data)
          console.log('Got related pokemon data to type: ',data.name)
          console.log('Other pokemon with this type include: ')
          for (var poke in data.pokemon){
            console.log(data.pokemon[poke].pokemon.name)
          }
        })

    });
  }


}
