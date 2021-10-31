import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appMobileMenu]'
})
export class MobileMenuDirective {
  private isShown: boolean = false;
  @HostListener('click') toggleOpen() {
    let targetElement = this.elRef.nativeElement.nextSibling
                          ? this.elRef.nativeElement.nextSibling
                          : this.elRef.nativeElement.parentElement.nextSibling;

    if (this.isShown) {
      this.renderer.removeClass(targetElement, 'show');
    } else {
      this.renderer.addClass(targetElement, 'show');
    }

    this.isShown = !this.isShown;
  }

  constructor(private elRef: ElementRef, private renderer: Renderer2) {}
}
