import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  standalone: false,
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
  changeDetection: ChangeDetectionStrategy.Default,
})
export class ListComponent { 

  @Output()
  public onDeleteCharacterEmitter: EventEmitter<number> = new EventEmitter();

  @Output()
  public onDeleteByIdEmmitter: EventEmitter<string> = new EventEmitter();

  @Input('characterList')
  public characterList: Character[] = [
    {
      name:'Truks', 
      power: 10
    },
  ];


  
  onDeleteCharacter(index:number): void{
    this.onDeleteCharacterEmitter.emit(index);
  }

  onDeleteCharacterById(id?: string): void{
    if(id)
      this.onDeleteByIdEmmitter.emit(id);
  }
  
}
