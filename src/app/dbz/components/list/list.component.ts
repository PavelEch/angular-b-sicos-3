import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public listaNombre:string = 'Listado de Héroes';

  @Input()
  public characterList:Character [] = [
    {
    name: 'Trunks',
    power: 10
    }
  ];

  @Output()
  public onDeleteCharacterEvent: EventEmitter<string> = new EventEmitter();


  onDelete(id?:string):void{
    console.log("Emitiendo... ", id );

    if(!id) return;

    this.onDeleteCharacterEvent.emit(id);
  }

  onDeleteCharacter(index:number):void {
    //TODO: Emitir el ID del personaje para borrarlo.
    console.log({index});
  }
}
