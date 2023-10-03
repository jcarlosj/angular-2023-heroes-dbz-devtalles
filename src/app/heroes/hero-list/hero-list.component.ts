import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent {
  public heroNames: string[] = [ 'Spideman', 'Hulk', 'Ironman', 'She Hulk', 'Capitan Marvel' ];
}
