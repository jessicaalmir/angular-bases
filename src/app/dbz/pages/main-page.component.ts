import { Component, OnInit } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Component({
    selector: 'app-dbz-main-page',
    templateUrl: './main-page.component.html'
})

export class MainPageComponent {
   
    constructor() { }

    public characters: Character[]= [{
        name: 'Krillin',
        power: 1000
    },
{
    name: 'Goku',
    power: 10000
}];

    onNewCharacter(character: Character): void{
        console.log('Mainpage: ', character);
    }
}