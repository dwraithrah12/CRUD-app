import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CreaturesComponent } from './creatures/creatures.component';
import { CreatureListComponent } from './creatures/creature-list/creature-list.component';
import { CreatureDetailComponent } from './creatures/creature-detail/creature-detail.component';
import { CreatureAttributeComponent } from './creatures/creature-list/creature-attribute/creature-attribute.component';
import { EncounterListComponent } from './encounter-list/encounter-list.component';
import { EncounterEditComponent } from './encounter-list/encounter-edit/encounter-edit.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { EncounterListService } from './encounter-list/encounter-list.service';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CreaturesComponent,
    CreatureListComponent,
    CreatureDetailComponent,
    CreatureAttributeComponent,
    EncounterListComponent,
    EncounterEditComponent,
    DropdownDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ EncounterListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
