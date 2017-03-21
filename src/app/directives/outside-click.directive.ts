import { Directive, ElementRef, Output, EventEmitter, HostListener } from '@angular/core';

@Directive({
  selector: '[appOutsideClick]'
})
export class OutsideClickDirective {

  @Output() clickOutside = new EventEmitter();
  @HostListener('document:click', ['$event.target'])

  public onClick(event: MouseEvent): void {
    const clickedInside = this._elementRef.nativeElement.contains(event);

    if (!clickedInside) {
      this.clickOutside.emit(event);
    }
  }

  constructor(private _elementRef: ElementRef) {}

}
