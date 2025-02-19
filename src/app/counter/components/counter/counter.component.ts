import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <h1>Hola desde el componente counter</h1>
    <h3>Counter: {{ counter }}</h3>

    <button (click)="increaseBy(1)">+1</button>
    <button (click)="resetCounter()">Reset</button>
    <button (click)="increaseBy(-1)">-1</button>
  `,
  standalone: false,
})
export class CounterComponent {
  constructor() {}

  public counter : number = 10;

  increaseByOne() : void {
    this.counter++;
  }
  increaseBy(value : number) : void {
    this.counter = this.counter + value;
  }

  resetCounter() : void {
    this.counter = 10;
  }
}
