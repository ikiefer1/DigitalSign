import { Component, Input } from '@angular/core';
import { DayComponent } from './day.component';
@Component({
  selector: 'monday',
  template: ` <img src="/assets/logo2.jpg" alt="Home">
              <h2> {{data.day}}</h2>

              <div class = "breakfast-style">

              <h1>{{data.bfTitle}}
              </h1>
              <ul  id ="a" *ngFor="let break of data.breakfast">
               <li>{{break}}</li>
              </ul>
              </div>
              <div class = "lunch-style">
              <h1>{{data.lunTitle}}
              </h1>
              <ul  id ="a" *ngFor="let lun of data.lunch">
               <li>{{lun}}</li>
              </ul>
              </div>
              <div class = "dinner-style">
              <h1>{{data.dinTitle}}</h1>
              <ul  id ="a" *ngFor="let din of data.dinner">
               <li>{{din}}</li>
              </ul>
              </div>

            `,

})
export class MondayComponent implements DayComponent {
  @Input() data: any;

}
