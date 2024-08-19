import { Directive, ElementRef, Input, NgZone, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appIntersectionObserver]',
  standalone: true
})
export class IntersectionObserverDirective {

  @Input() animationClass: string = 'anime_visible'; // Default animation class

  constructor(private el: ElementRef, private renderer: Renderer2, private ngZone: NgZone) {}

  ngOnInit() {
    this.createIntersectionObserver();
  }

  private createIntersectionObserver() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        this.ngZone.run(() => {
          if (entry.isIntersecting) {
            this.renderer.addClass(this.el.nativeElement, this.animationClass);
          } else {
            this.renderer.removeClass(this.el.nativeElement, this.animationClass);
          }
        });
      });
    }, { threshold: 0.1 });

    observer.observe(this.el.nativeElement);
  }

}
