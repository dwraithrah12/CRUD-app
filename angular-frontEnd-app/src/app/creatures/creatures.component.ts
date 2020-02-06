import { Component, OnInit } from '@angular/core';

import { Creature } from './creatures.model';
import { CreatureService } from './creature.service';

@Component({
  selector: 'app-creatures',
  templateUrl: './creatures.component.html',
  styleUrls: ['./creatures.component.css'],
  providers:[ CreatureService ]
})
export class CreaturesComponent implements OnInit{
  selectedCreature: Creature;

  constructor(private creatureService: CreatureService){}
  
  ngOnInit(){
    this.creatureService.creatureSelected.subscribe((creature: Creature) => {
      this.selectedCreature = creature;
    });
      
  }
}
