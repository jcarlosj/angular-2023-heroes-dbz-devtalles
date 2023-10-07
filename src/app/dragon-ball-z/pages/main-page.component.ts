import { Component } from '@angular/core';
import { DragonBallZService } from '../services/dragon-ball-z.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {

  constructor( public dbzService: DragonBallZService ) {}

}
