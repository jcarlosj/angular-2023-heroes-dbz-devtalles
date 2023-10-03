import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HeroComponent } from "./components/hero/hero.component";
import { HeroListComponent } from "./components/hero-list/hero-list.component";


@NgModule({
  declarations: [
    HeroComponent,
    HeroListComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeroComponent,
    HeroListComponent
  ]
})
export class HeroesModule {}
