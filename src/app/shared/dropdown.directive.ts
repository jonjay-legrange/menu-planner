import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.show') isShown = false;

  @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
    this.isShown = this.elRef.nativeElement.contains(event.target) ? !this.isShown : false;
  }

  constructor(private elRef: ElementRef) {}
}
