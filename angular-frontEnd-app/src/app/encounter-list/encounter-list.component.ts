import { Component } from '@angular/core';
import { EncounterList } from './encounter-list.model';

@Component({
  selector: 'app-encounter-list',
  templateUrl: './encounter-list.component.html',
  styleUrls: ['./encounter-list.component.css']
})
export class EncounterListComponent{
  encounterCreature: EncounterList[] = [
    new EncounterList('Hot Elf', 5),
    new EncounterList('Elf Pet', 5)
  ];
  }


