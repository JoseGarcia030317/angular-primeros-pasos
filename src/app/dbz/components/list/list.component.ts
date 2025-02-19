import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  standalone: false,

  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  // Pasar datos del componente hijo al padre
  @Output()
  public onDeleteCharacter : EventEmitter<string> = new EventEmitter();
  //public onDeleteCharacter : EventEmitter<number> = new EventEmitter();

  // Recibir datos del componente padre al hijo
  @Input()
  public characterList : Character[] = [
    {
      name : 'Trunks',
      power : 10
    }
  ]

  //emitIndexCharacter(index : number) : void {
    //console.log(index);
    //this.onDeleteCharacter.emit(index);
  //}

  emitIdCharacter(id? : string) : void {
    if ( !id ) return;
    this.onDeleteCharacter.emit(id);
  }
}
