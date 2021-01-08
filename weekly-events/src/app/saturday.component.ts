import { Component, Input } from '@angular/core';
import { DayComponent } from './day.component';
@Component({
  selector: 'saturday',
  template: `<div class= "sat-style">
              <h3> {{data.event}} </h3>
              {{data.meal}}
              </div>
              `,

})
export class SaturdayComponent implements DayComponent {
  @Input() data: any;
}
