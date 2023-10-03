import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeroesModule } from './heroes/heroes.module';
import { DragonBallZModule } from './dragon-ball-z/dragon-ball-z.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HeroesModule,
    DragonBallZModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
