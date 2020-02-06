import { Component } from '@angular/core';
import { EncounterList } from './encounter-list.model';
import { EncounterListService } from './encounter-list.service';

@Component({
  selector: 'app-encounter-list',
  templateUrl: './encounter-list.component.html',
  styleUrls: ['./encounter-list.component.css']
})
export class EncounterListComponent{
  /*encounterCreature: EncounterList[] = [
    new EncounterList('Hot Elf', 5),
    new EncounterList('Elf Pet', 5)
  ];*/
  encounterCreature: EncounterList[];


  constructor(private encounterListService: EncounterListService) { }

  ngOnInit() {
    this.encounterCreature = this.encounterListService.getEncounterList();
    this.encounterListService.encounterListChanged.subscribe(
      (encounterList: EncounterList[]) => {
        this.encounterCreature = encounterList;
      });
    }
  }
