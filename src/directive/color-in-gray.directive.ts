import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appColorInGray]',
  standalone: true
})
export class ColorInGrayDirective {

  constructor(private el: ElementRef) { 
    el.nativeElement.style.color = 'rgb(168, 181, 181)';
    el.nativeElement.setAttribute('title', 'This teacher has no classes assigned yet');
  }

}
