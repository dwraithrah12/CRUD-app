import { Component, Input } from '@angular/core';

import { Creature } from '../creatures.model';
import { CreatureService } from '../creature.service';

@Component({
  selector: 'app-creature-detail',
  templateUrl: './creature-detail.component.html',
  styleUrls: ['./creature-detail.component.css']
})
export class CreatureDetailComponent{
  @Input() creature: Creature;

  constructor(private creatureService: CreatureService){}

  onAddToEncounter(){
      this.creatureService.addCreatureToEncounter(this.creature.name);
  }
}
