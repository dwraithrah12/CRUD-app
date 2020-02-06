import { EventEmitter, Injectable } from '@angular/core';

import { Creature } from './creatures.model';
import { Attribute } from '../shared/attribute.model';
import { EncounterListService } from '../encounter-list/encounter-list.service';
import { EncounterList } from '../encounter-list/encounter-list.model';

@Injectable() 
export class CreatureService{
    creatureSelected = new EventEmitter<Creature>(); 

    private creatures: Creature[] = [
        new Creature('Hot Elf', 
                     'Elf', 
                     'Sexy as hell elf', 
                     'https://p1.pxfuel.com/preview/492/268/928/woman-magical-mystical-fantasy-female-magic.jpg',
                     [ new Attribute('Strength', 10),
                       new Attribute('Constitution', 10),
                       new Attribute('Agility', 12),
                       new Attribute('Intelligence', 14),
                       new Attribute('Wisdom', 12),
                       new Attribute('Charm', 12)])
    ];

    constructor(private encounterList: EncounterListService){}

    getCreatures(){
        return this.creatures.slice();
    }

    addCreatureToEncounter(name: string){
        this.encounterList.addEncounterCreature(new EncounterList(name, 0));
    }
}