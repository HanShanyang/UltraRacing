import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CarPartListComponent } from './components/car-part-list/car-part-list.component';



@NgModule({
  declarations: [
    AppComponent,
    CarPartListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
