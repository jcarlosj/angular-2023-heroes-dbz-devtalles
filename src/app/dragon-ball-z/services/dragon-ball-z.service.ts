import { Injectable } from "@angular/core";
import { Character } from "../interfaces/character.interface";

import { v4 as uuid } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class DragonBallZService {

  public characters: Character[] = [
    { id: uuid(), name: 'Krillin', power: 1000 },
    { id: uuid(), name: 'Goku', power: 9500 },
    { id: uuid(), name: 'Vegeta', power: 7500 },
    { id: uuid(), name: 'Roshi', power: 250 },
    { id: uuid(), name: 'Piccolo', power: 6000 }
  ];

  onNewCharacter( character: Character ): void {

    const newCharacter = {
      id: uuid(),
      ...character,
    }

    this.characters.push( newCharacter );
  }

  onDeleteCharacterByIndex( index: number ): void {
    this.characters.splice( index, 1 );
  }

  onDeleteCharacterById( id: string ): void {
    this.characters = this.characters.filter( character => character.id !== id );
  }
}
