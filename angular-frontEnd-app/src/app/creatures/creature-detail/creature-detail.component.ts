import { Component, Input } from '@angular/core';

import { Creature } from '../creatures.model';

@Component({
  selector: 'app-creature-detail',
  templateUrl: './creature-detail.component.html',
  styleUrls: ['./creature-detail.component.css']
})
export class CreatureDetailComponent{
  @Input() creature: Creature;
}
