import { Component, OnInit } from '@angular/core';
import{ Creature } from '../creatures.model';
import { CreatureService } from '../creature.service';

@Component({
  selector: 'app-creature-list',
  templateUrl: './creature-list.component.html',
  styleUrls: ['./creature-list.component.css']
})
export class CreatureListComponent implements OnInit{
  creatures: Creature[];
  
  constructor(private creatureService: CreatureService){}

  ngOnInit(){
    this.creatures = this.creatureService.getCreatures();
  }


}
