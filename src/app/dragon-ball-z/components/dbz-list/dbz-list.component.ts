import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './dbz-list.component.html',
  styleUrls: ['./dbz-list.component.css']
})
export class DbzListComponent {

  @Input()
  public characterList: Character[] = [
    // { id: '', name: 'Trunks', power: 10 }
  ];

  @Output()
  public onDeleteId: EventEmitter<string> = new EventEmitter();

  onDeleteCharacter( id?: string ): void {

    if( ! id )  return;

    console.log({ id });

    this.onDeleteId.emit( id );
  }
}
