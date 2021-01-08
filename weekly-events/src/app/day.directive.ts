import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[adHost]',
})
export class DayDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}
