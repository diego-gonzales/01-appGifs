import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GifsPageComponent } from './gifs-page/gifs-page.component';
import { SearchComponent } from './search/search.component';
import { ResultsComponent } from './results/results.component';
import { HttpClientModule } from '@angular/common/http';
import { SpinnerComponent } from './spinner/spinner.component';


@NgModule({
  declarations: [
    GifsPageComponent,
    SearchComponent,
    ResultsComponent,
    SpinnerComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    GifsPageComponent
  ]
})
export class GifsModule { }
