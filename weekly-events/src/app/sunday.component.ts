import { Component, Input } from '@angular/core';
import { DayComponent } from './day.component';
@Component({
  selector: 'sunday',
  template: `
              <div class= "sun-style">
              <h3>{{data.event}}</h3>

              {{data.meal}}
              </div>
              `

})
export class SundayComponent implements DayComponent {
  @Input() data: any;
}
