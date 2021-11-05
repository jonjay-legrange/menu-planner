import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appNextElementDropdown]'
})
export class NextElementDropdownDirective {

  @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
    let targetElement = this.getTarget();

    if (targetElement.classList.contains('show')) {
      this.renderer.removeClass(targetElement, 'show');
    } else if (!targetElement.classList.contains('show') && this.elRef.nativeElement.contains(event.target)) {
      this.renderer.addClass(targetElement, 'show');
    }
  }

  private getTarget() {
    return this.elRef.nativeElement.nextSibling
      ? this.elRef.nativeElement.nextSibling
      : this.elRef.nativeElement.parentElement.nextSibling;
  }

  constructor(private elRef: ElementRef, private renderer: Renderer2) {}
}
