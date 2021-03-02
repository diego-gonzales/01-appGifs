import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent {

  @ViewChild('inputSearch') myInput: ElementRef<HTMLInputElement>;

  constructor(private gifsService: GifsService) {}

  search() {
    const word = this.myInput.nativeElement.value;
    if ( !word.trim() ) { return };

    this.gifsService.addWord(word);

    this.myInput.nativeElement.value = '';
  }

}
