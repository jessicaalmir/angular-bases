import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-heores-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name: string = 'ironman';
  public age: number = 45;

  get capitalizeName():string{
    return this.name.toUpperCase();
  }

  getHeroDescription(): string{
    return `${this.name} - ${this.age}`
  }

  changeAge(): void{
    this.age = 87;
  }

  changeName(): void{
    this.name = 'Spiderman';
  }

  resetForm(): void{
    this.name ='ironman';
    this.age = 45;
  }
}
