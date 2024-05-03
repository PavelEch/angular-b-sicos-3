import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';
import { Character } from '../interfaces/character.interface';


@Injectable({providedIn: 'root'})
export class DbzService {
  public characterList: Character [] = [{
    id:uuid(),
    name: 'Krillin',
    power: 1000
  },
  {
    id:uuid(),
    name:'Goku',
    power: 8001
  },
  {
    id:uuid(),
    name:'Vegeta',
    power: 7500
  }];

  onNewCharacter(character:Character):void {

    const newCharacter:Character = {
      id:uuid(), ...character
    }
    this.characterList.push(newCharacter);
  }
/*

  onDelete(index: number):void {
    this.characterList.splice(index,1);
  }
*/
  deleteCharacterById(id:string){
    this.characterList = this.characterList.filter(character => character.id !== id );

  }


}
