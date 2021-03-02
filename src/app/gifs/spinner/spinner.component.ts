import { Component, OnInit } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent implements OnInit {

  get isVisible() {
    return this.gifsService.spinnerIsVisible;
  };

  constructor(private gifsService: GifsService) {
  }

  ngOnInit(): void {
  }

}
