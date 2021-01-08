import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MondayComponent } from './monday.component';
import { TuesdayComponent } from './tuesday.component';
import { WednesdayComponent } from './wednesday.component';
import { ThursdayComponent } from './thursday.component';
import { FridayComponent } from './friday.component';
import { SaturdayComponent } from './saturday.component';
import { SundayComponent } from './sunday.component';
import { DayDirective } from './day.directive';
import { DayService } from './day.service';
import { SlideshowComponent } from './slideshow.component';

@NgModule({
  declarations: [
    AppComponent,
    MondayComponent,
    TuesdayComponent,
    WednesdayComponent,
    ThursdayComponent,
    FridayComponent,
    SaturdayComponent,
    SundayComponent,
    SlideshowComponent,
    DayDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [DayService],
  entryComponents: [MondayComponent,
  TuesdayComponent,
  WednesdayComponent,
  ThursdayComponent,
  FridayComponent,
  SaturdayComponent,
  SundayComponent ],
  bootstrap: [AppComponent]
})
export class AppModule { }
