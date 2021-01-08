import { Component, Input, OnInit, ViewChild, ComponentFactoryResolver, OnDestroy } from '@angular/core';

import { DayDirective } from './day.directive';
import { DayEvent } from './dayEvent';
import { DayComponent } from './day.component';

@Component({
  selector: 'app-slideshow',
  template: `
              <div class="slide-style">

                <ng-template adHost></ng-template>
              </div>
            `
})
export class SlideshowComponent implements OnInit, OnDestroy {
  @Input() days: DayEvent[];
  index = 0;//was index=-1;
  @ViewChild(DayDirective, {static: true}) adHost: DayDirective;
  interval: any;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
    this.loadComponent();//without this it does whats happening and then starts the badminton and picture
    this.getDays();
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

  loadComponent() {
    this.index = (this.index) % this.days.length;//was this.index +1
    const dayEvent = this.days[this.index];

    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(dayEvent.component);

    const viewContainerRef = this.adHost.viewContainerRef;
    viewContainerRef.clear();//i think this is used to clear the current banner to get reaady to creat a new one
//viewContainerRef represents a container where one or more views can be attached to a component.
    const componentRef = viewContainerRef.createComponent<DayComponent>(componentFactory);//the createComponent adds the component to the template
    componentRef.instance.data = dayEvent.data;//makes the data for the component have values so the template shows data.event and data.meal
    this.index++;
  }

  getDays() {
    this.interval = setInterval(() => {
      this.loadComponent();
    }, 100000);
  }
}
