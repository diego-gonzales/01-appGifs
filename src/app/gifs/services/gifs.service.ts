import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { GifsResponse, Datum } from '../interfaces/gifs-response.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private _arrayWords: string[] = [];
  public arrayResults: Datum[] = [];
  private baseURL = 'https://api.giphy.com/v1/gifs';
  private apiKey: string = 'uNc13QKWFN9R6Qs77cqTT20X1h6eM6c5';
  public spinnerIsVisible: boolean = false;
  // Creamos este getter ya que vamos a usar el array en los componentes, y para que
  // dicho array no sea modificado entonces tomamos una copia de él, la cual será retornado por el getter
  get arrayWords() {
    return [...this._arrayWords];
  };


  constructor(private http: HttpClient) {

    if ( localStorage.getItem('historial') ) {
      this._arrayWords = JSON.parse(localStorage.getItem('historial'));
    };

    if ( localStorage.getItem('results') ) {
      this.arrayResults = JSON.parse(localStorage.getItem('results'));
    };

  };


  addWord( word: string ) {
    word = word.trim().toLowerCase();

    const existe = this._arrayWords.includes(word);
    
    if ( !existe ) {
      this._arrayWords.unshift(word);
      this._arrayWords = this._arrayWords.splice(0, 10); // esto para mostrar solo 10 elementos del array

      localStorage.setItem('historial', JSON.stringify(this._arrayWords));
    };

    // Consultamos a la API
    this.consultAPI(word).subscribe( res =>{
      this.arrayResults = res;
      console.log(this.arrayResults);

      localStorage.setItem('results', JSON.stringify(this.arrayResults));
    });
  };


  consultAPI( query: string ): Observable<Datum[]> {

    this.spinnerIsVisible = true;

    const params = new HttpParams()
            .set('api_key', this.apiKey)
            .set('q', query)
            .set('limit', '10');

    return this.http.get<GifsResponse>( `${this.baseURL}/search`, {params} )
              .pipe(
                map( resp => {
                  this.spinnerIsVisible = false;
                  return resp.data;
                  // const arrayImages = resp.data.map( gif => gif.images );
                  // return arrayImages;
                })
              )
  };

}
