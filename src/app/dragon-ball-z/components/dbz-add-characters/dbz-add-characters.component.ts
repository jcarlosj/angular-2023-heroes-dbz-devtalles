import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-characters',
  templateUrl: './dbz-add-characters.component.html',
  styleUrls: ['./dbz-add-characters.component.css']
})
export class DbzAddCharactersComponent {

  @Output()
  onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character: Character = {
    name: '',
    power: 0
  };

  emitCharacter(): void {
    // console.group( 'DbzAddCharactersComponent' );
    // console.log( this.character );
    // console.groupEnd();

    if( this.character.name.length === 0 )
      return;

    this.onNewCharacter.emit( this.character );

    this.character = {
      name: '',
      power: 0
    }
  }
}
