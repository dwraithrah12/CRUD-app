import { Component } from '@angular/core';

import { Creature } from './creatures.model';

@Component({
  selector: 'app-creatures',
  templateUrl: './creatures.component.html',
  styleUrls: ['./creatures.component.css']
})
export class CreaturesComponent{
  selectedCreature: Creature;
}
