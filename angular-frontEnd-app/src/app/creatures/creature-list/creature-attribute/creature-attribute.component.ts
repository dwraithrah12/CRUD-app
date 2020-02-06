import { Component, Input } from '@angular/core';

import { Creature } from '../../creatures.model';
import { CreatureService } from '../../creature.service';

@Component({
  selector: 'app-creature-attribute',
  templateUrl: './creature-attribute.component.html',
  styleUrls: ['./creature-attribute.component.css']
})
export class CreatureAttributeComponent{
  @Input() creature: Creature;

  constructor(private creatureService: CreatureService){}

  onSelected(){
   this.creatureService.creatureSelected.emit(this.creature);
  }
}
