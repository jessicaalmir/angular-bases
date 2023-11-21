import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CounterModel } from './counter/components/counter.module';
import { HeroModule } from './heroes/hero.module';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, CounterModel, HeroModule]
})
export class AppComponent {
  public title: string = 'Angular App';

}
