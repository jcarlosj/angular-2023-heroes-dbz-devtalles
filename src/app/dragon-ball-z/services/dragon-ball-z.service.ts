import { Injectable } from "@angular/core";
import { Character } from "../interfaces/character.interface";

@Injectable({
  providedIn: 'root'
})
export class DragonBallZService {

  public characters: Character[] = [
    { name: 'Krillin', power: 1000 },
    { name: 'Goku', power: 9500 },
    { name: 'Vegeta', power: 7500 },
    { name: 'Roshi', power: 250 },
    { name: 'Piccolo', power: 6000 }
  ];

  onNewCharacter( character: Character ): void {
    // console.group( 'MainPageComponent' );
    // console.log( character );
    // console.groupEnd();

    this.characters.push( character );
  }

  onDeleteCharacterById( id: number ): void {
    this.characters.splice( id, 1 );
  }
}
