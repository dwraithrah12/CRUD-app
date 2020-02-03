import { Component } from '@angular/core';
import{ Creature } from '../creatures.model';

@Component({
  selector: 'app-creature-list',
  templateUrl: './creature-list.component.html',
  styleUrls: ['./creature-list.component.css']
})
export class CreatureListComponent{
  creatures:Creature[]=[
    new Creature('Hot Elf', 'Elf', 'Sexy as hell elf', 'https://cdn.pixabay.com/photo/2017/12/06/08/39/dragon-3001238_960_720.png')
  ]

}
