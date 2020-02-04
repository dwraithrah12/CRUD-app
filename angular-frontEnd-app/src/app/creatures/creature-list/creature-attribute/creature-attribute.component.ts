import { Component, Input, EventEmitter, Output } from '@angular/core';

import { Creature } from '../../creatures.model';

@Component({
  selector: 'app-creature-attribute',
  templateUrl: './creature-attribute.component.html',
  styleUrls: ['./creature-attribute.component.css']
})
export class CreatureAttributeComponent{
  @Input() creature: Creature
  @Output() creatureSelected = new EventEmitter<void>();

  onSelected(){
    this.creatureSelected.emit();
  }
}
