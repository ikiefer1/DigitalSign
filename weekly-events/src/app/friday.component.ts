import { Component, Input } from '@angular/core';
import { DayComponent } from './day.component';
@Component({
  selector: 'friday',
  template: `<div class= "fri-style">
              <h6> {{data.event}} </h6>

              {{data.meal}}
              </div>
              `,

})
export class FridayComponent implements DayComponent {
  @Input() data: any;
}
