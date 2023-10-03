import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  public name: string = 'Peter Parker';
  public alterego: string = 'Spiderman';
  public age: number = 27;

  /** Getters and Setters */
  get capilalizeName(): string {
    return this.name.toUpperCase();
  }

  /** Methods */
  getHeroDescription(): string {
    return `${ this.alterego }, ${ this.age }`;
  }

  changeHero(): void {
    this.name = 'Robert Bruce Banner';
    this.alterego = 'Hulk';
  }

  changeAge(): void {
    this.age = 45;
  }

  resetData(): void {
    this.name = 'Peter Parker';
    this.alterego = 'Spiderman';
    this.age = 27;
  }

}
