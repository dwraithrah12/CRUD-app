import { EventEmitter } from '@angular/core';

import { Creature } from './creatures.model';

export class CreatureService{
    creatureSelected = new EventEmitter<Creature>(); 

    private creatures: Creature[] = [
        new Creature('Hot Elf', 'Elf', 'Sexy as hell elf', 'https://p1.pxfuel.com/preview/492/268/928/woman-magical-mystical-fantasy-female-magic.jpg')
    ];

    getCreatures(){
        return this.creatures.slice();
    }
}