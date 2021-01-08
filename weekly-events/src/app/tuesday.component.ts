import { Component, Input } from '@angular/core';
import { DayComponent } from './day.component';
@Component({
  selector: 'tuesday',
  template: `<div class= "tues-style">
              <h1> {{data.event}} </h1>

              {{data.meal}}
              </div>
              `,

})
export class TuesdayComponent implements DayComponent {
  @Input() data: any;
}
