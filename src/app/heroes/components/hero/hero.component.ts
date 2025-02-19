import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  standalone: false,

  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name : string = 'Iron Man';
  public age : number = 43;

  get capitalizeName() : string {
    return this.name.toUpperCase();
  }

  protected getHeroDescription() : string {
    return `${this.name} is ${this.age} years old`
  }

  protected changeHeroName() : void {
    this.name = 'Capitan América';
  }

  protected changeHeroAge() : void {
    this.age = 100;
  }

  protected resetForm () : void {
    this.name = 'Iron Man';
    this.age = 43;
  }
}
