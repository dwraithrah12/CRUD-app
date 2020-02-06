import { EventEmitter } from '@angular/core';

import { EncounterList } from './encounter-list.model';

export class EncounterListService{
    encounterListChanged = new EventEmitter<EncounterList[]>();
    private encounterList: EncounterList[] = [
        new EncounterList('Hot Elf', 5),
        new EncounterList('Elf Pet', 5)
    ];

    getEncounterList(){
        return this.encounterList.slice();
    }

    addEncounter(encounter: EncounterList){
        this.encounterList.push(encounter);
        this.encounterListChanged.emit(this.encounterList.slice());
    }

    addEncounterCreature(encounterCreature: EncounterList){
        this.encounterList.push(encounterCreature);
        this.encounterListChanged.emit(this.encounterList.slice());
    }
}