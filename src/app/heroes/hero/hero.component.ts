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
    return `Tu amigable vecino, ${ this.alterego }`;
  }

}
