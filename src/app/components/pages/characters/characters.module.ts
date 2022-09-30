import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { CharacterDetailsComponent } from './character-details/character-details.component';
import { CharacterListComponent } from './character-list/character-list.component';
import { MaterialModule } from '@app/material.module';



@NgModule({
  declarations: [
    CharacterDetailsComponent,
    CharacterListComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ],
  exports:[
    CharacterDetailsComponent,
    CharacterListComponent
  ]
})
export class CharactersModule { }
