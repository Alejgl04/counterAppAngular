import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent {

  @Input()
  public characterList: Character[] = [];

  @Output()
  public onDeleteId: EventEmitter<string> = new EventEmitter();

  OnDeleteCharacter( id?: string ): void {
    if( !id ) return;

    this.onDeleteId.emit( id );

  }

}
