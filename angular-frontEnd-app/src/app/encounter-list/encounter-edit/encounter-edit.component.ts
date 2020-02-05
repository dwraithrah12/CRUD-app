import { Component, ElementRef, ViewChild, EventEmitter, Output } from '@angular/core';

import { EncounterList } from '../encounter-list.model';

@Component({
  selector: 'app-encounter-edit',
  templateUrl: './encounter-edit.component.html',
  styleUrls: ['./encounter-edit.component.css']
})
export class EncounterEditComponent {
@ViewChild('nameInput', { static: false}) nameInputReference: ElementRef;
@ViewChild('amountInput', { static: false }) amountInputReference: ElementRef;
@Output() encounterAdded = new EventEmitter<EncounterList>();

  onAddItem(){
    const encounterName = this.nameInputReference.nativeElement.value;
    const encounterAmount = this.amountInputReference.nativeElement.value;
    const newEncounterList = new EncounterList(encounterName, encounterAmount);
    this.encounterAdded.emit(newEncounterList);
  }
}
