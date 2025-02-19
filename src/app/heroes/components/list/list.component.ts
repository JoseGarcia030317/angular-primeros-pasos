import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  standalone: false,

  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  public heroNames : string[] = ['Spider Man', 'Iron Man', 'Hulk', 'Thor', 'Capitan América', 'Black Widow'];
  public deletedHero? : string;

  deleteLastHero() : void {
    this.deletedHero = this.heroNames.pop();
    console.log({deletedHero : this.deleteLastHero});
  }
}
