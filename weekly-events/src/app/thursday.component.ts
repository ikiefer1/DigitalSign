import { Component, Input } from '@angular/core';
import { DayComponent } from './day.component';
@Component({
  selector: 'thursday',
  template: `<div class= "thurs-style">
              <h5> {{data.event}} </h5>

              {{data.meal}}
              </div>
              `,

})
export class ThursdayComponent implements DayComponent {
  @Input() data: any;
}
