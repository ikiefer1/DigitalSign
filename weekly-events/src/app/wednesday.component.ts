import { Component, Input } from '@angular/core';
import { DayComponent } from './day.component';
@Component({
  selector: 'wednesday',
  template: `<div class= "wed-style">
              <h4> {{data.event}} </h4>

              {{data.meal}}
              </div>
              `,

})
export class WednesdayComponent implements DayComponent {
  @Input() data: any;
}
