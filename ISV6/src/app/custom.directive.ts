import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[malaSlova]',
})
export class CustomDirective {
  constructor(private el: ElementRef) {}

  @HostListener('keyup') onKeyUp() {
    let value: string = this.el.nativeElement.value;
    this.el.nativeElement.value = value.toLowerCase();
  }
}
