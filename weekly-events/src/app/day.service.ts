import { Injectable } from '@angular/core';

import { MondayComponent } from './monday.component';
import { TuesdayComponent } from './tuesday.component';
import { WednesdayComponent } from './wednesday.component';
import { ThursdayComponent } from './thursday.component';
import { FridayComponent } from './friday.component';
import { SaturdayComponent } from './saturday.component';
import { SundayComponent } from './sunday.component';
import { DayEvent } from './dayEvent';

@Injectable()
export class DayService {
  getDays() {
    return [
      new DayEvent(MondayComponent, {day: 'Monday', bfTitle: 'Breakfast', breakfast: ['Eggs', 'fruit', 'Orange Juice'],
      lunTitle: 'Lunch', lunch: ['Ham Sandwich', 'Apple Sauce', 'Coke'], dinTitle: 'Dinner',
      dinner: ['Roast & Potatoes', 'Cake', 'Coffee']}),

      new DayEvent(TuesdayComponent, {event: 'Bingo', meal: 'Tacos'}),

      new DayEvent(WednesdayComponent,   {event: 'Knitting',
                                        meal: 'Pizza'}),

      new DayEvent(ThursdayComponent,   {event: 'Water Aerobics',
                                        meal: 'Chicken Noodle Soup'}),
      new DayEvent(FridayComponent,   {event: 'Yoga',
                                        meal: 'Roast and Potatoes'}),
      new DayEvent(SaturdayComponent,   {event: 'Board Games',
                                        meal: 'Burgers and Fries'}),
      new DayEvent(SundayComponent,   {event: 'Piano',
      meal: 'Quesadillas'}),
    ];
  }
}
