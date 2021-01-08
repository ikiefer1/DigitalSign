import { Component, OnInit } from '@angular/core';
import { DayService } from './day.service';
import { DayEvent } from './dayEvent';

@Component({
  selector: 'app-root',
  template:`
    <div>
      <app-slideshow [days]="days"></app-slideshow>
    </div>
  `
})
export class AppComponent  implements OnInit{
  days: DayEvent[];

  constructor(private dayService: DayService) {}

  ngOnInit() {
    this.days= this.dayService.getDays();//creates the array of DayEvents
  }
}
