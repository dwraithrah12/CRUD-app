import { Component } from '@angular/core';
import{ Creature } from '../creatures.model';

@Component({
  selector: 'app-creature-list',
  templateUrl: './creature-list.component.html',
  styleUrls: ['./creature-list.component.css']
})
export class CreatureListComponent{
  creatures:Creature[]=[
    new Creature('Hot Elf', 'Elf', 'Sexy as hell elf', 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fpxhere.com%2Fen%2Fphoto%2F956706&psig=AOvVaw3SAtLpiv1XYnQKqGIgUapO&ust=1580836672915000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCJCBvtrxtecCFQAAAAAdAAAAABAE')
  ]

}
