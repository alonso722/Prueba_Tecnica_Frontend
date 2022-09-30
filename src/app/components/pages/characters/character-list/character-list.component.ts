import { Component, OnInit } from '@angular/core';
import { Character } from '../../../../shared/interface/character.interface';
import { CharactersService } from '../../../../shared/services/characters.service';
import {take} from 'rxjs/operators'
type Requestinfo={
next: string;
};
@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent implements OnInit {
characters:Character[]=[];
private query:string='films';
private pageNum=1;


info: Requestinfo={
  next:'NULL',
};
  constructor(private character_service:CharactersService) { }

  ngOnInit(): void {
    this.getdata();
  }
private getdata():void{
this.character_service.buscar()
.pipe(
  take(1)
).subscribe((res:any)=>{
  this.characters=res;
});
}
}
