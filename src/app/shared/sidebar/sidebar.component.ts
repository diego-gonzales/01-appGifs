import { Component, OnInit } from '@angular/core';
import { GifsService } from '../../gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  get array() {
    return this.gifsService.arrayWords;
  };

  constructor(private gifsService: GifsService) { }

  ngOnInit(): void {
  }


  searchWord(word: string) {
    this.gifsService.addWord(word);
  };

}
