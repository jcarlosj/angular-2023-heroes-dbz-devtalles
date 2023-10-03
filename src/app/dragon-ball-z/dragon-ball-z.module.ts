import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainPageComponent } from './pages/main-page.component';
import { DbzListComponent } from './pages/dbz-list/dbz-list.component';


@NgModule({
  declarations: [
    MainPageComponent,
    DbzListComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MainPageComponent
  ]
})
export class DragonBallZModule { }
