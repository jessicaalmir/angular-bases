import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { first } from 'rxjs';

@Component({
  selector: 'app-dbz-add',
  standalone: false,
  templateUrl: './add.component.html',
  styleUrl: './add.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddComponent { 

  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character: Character = {
    name: '',
    power: 0
  };

  emitCharacter(): void{
    if(this.character.name.length===0) 
      return;

    this.onNewCharacter.emit(this.character);
    
    this.character = {name : '', power : 0};
  }
}
