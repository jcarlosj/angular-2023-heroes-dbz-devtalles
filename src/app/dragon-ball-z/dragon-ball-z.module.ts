import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainPageComponent } from './pages/main-page.component';
import { DbzListComponent } from './components/dbz-list/dbz-list.component';
import { DbzAddCharactersComponent } from './components/dbz-add-characters/dbz-add-characters.component';

@NgModule({
  declarations: [
    MainPageComponent,
    DbzListComponent,
    DbzAddCharactersComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MainPageComponent
  ]
})
export class DragonBallZModule { }
