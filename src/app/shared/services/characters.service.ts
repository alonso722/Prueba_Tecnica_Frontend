import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Character } from '../interface/character.interface';
import { environment } from 'src/environments/environment';
import { map,take } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  constructor(private http: HttpClient) { }
  pelicula:any=[];
  buscar(){
    const filtro=`${environment.baseURLAPI}`;

    return this.http.get(filtro).pipe(
      map((res: any)=>{
        console.log(res);
        
        res?.results?.map((element: any)=>{
          this.pelicula.push(
            {
            title: element.title,
            director: element.director,
            episode_id: element.episode_id,
            release_date: element.release_date,
            }
            );
                                          }
                        )


                        return this.pelicula;
                      }
          )
                                      ); 
  }



}
