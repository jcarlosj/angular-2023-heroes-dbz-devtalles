import { Component } from '@angular/core';
import { DragonBallZService } from '../services/dragon-ball-z.service';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {

  constructor( private dbzService: DragonBallZService ) {}

  /** Getters & Setters */
  get characters(): Character[] {

    return [ ...this.dbzService.characters ];
  }

  /** Methods */
  onDeleteCharacter( id: string ): void {
    this.dbzService.deleteCharacterById( id );
  }

  onCreateCharacter( character: Character ) {
    this.dbzService.addCharacter( character );
  }

}
