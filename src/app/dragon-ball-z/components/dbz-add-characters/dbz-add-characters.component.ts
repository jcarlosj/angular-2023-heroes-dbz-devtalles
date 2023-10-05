import { Component } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-characters',
  templateUrl: './dbz-add-characters.component.html',
  styleUrls: ['./dbz-add-characters.component.css']
})
export class DbzAddCharactersComponent {
  public character: Character = {
    name: '',
    power: 0
  };

  emitCharacter(): void {
    console.log( this.character );
  }
}
