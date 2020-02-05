import { Component, ElementRef, ViewChild } from '@angular/core';

import { EncounterList } from '../encounter-list.model';
import { EncounterListService } from '../encounter-list.service';

@Component({
  selector: 'app-encounter-edit',
  templateUrl: './encounter-edit.component.html',
  styleUrls: ['./encounter-edit.component.css']
})
export class EncounterEditComponent {
@ViewChild('nameInput', { static: false}) nameInputReference: ElementRef;
@ViewChild('amountInput', { static: false }) amountInputReference: ElementRef;

constructor(private encounterListService: EncounterListService){

}

  onAddItem(){
    const encounterName = this.nameInputReference.nativeElement.value;
    const encounterAmount = this.amountInputReference.nativeElement.value;
    const newEncounterList = new EncounterList(encounterName, encounterAmount);
    this.encounterListService.addEncounter(newEncounterList);
  }
}
