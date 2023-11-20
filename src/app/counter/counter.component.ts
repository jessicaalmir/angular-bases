import { Component } from "@angular/core";

@Component({
    selector: 'app-counter', //How do I want to use this component in HTML
    template:`
        <h3>
            Counter {{counter}}
        </h3>

        <button (click)="increaseBy(1)">+1</button>
        <br />
        <button (click)="decreaseBy(1)">-1</button>
        <br />
        <button (click)="reset()">Reset</button>

        `,
    standalone: true
})

export class CounterComponent{
    private INITIAL_COUNTER: number = 10;
    public counter: number = this.INITIAL_COUNTER;

    increaseBy(value: number): void{
        this.counter += value;
    }

    decreaseBy(value: number): void{
        this.counter -= value;
    }

    reset(){
        this.counter = this.INITIAL_COUNTER;
    }
}