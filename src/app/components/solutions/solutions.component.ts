import { Component, ElementRef, HostListener } from '@angular/core';
import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-solutions',
  standalone: true,
  imports: [CommonModule],
  animations: [
    trigger('svgIn', [
      transition('void => *', [
        style({ transform: 'translateX(100%)' }),
        animate('2s ease-out', style({ transform: 'translateX(0)' }))
      ])
    ]),
    trigger('textBounceIn', [
      transition('void => *', [
        query('h1, h2,svg, div, p, button, span', [
          style({ transform: 'translateY(100%)', opacity: 0 }),
          stagger('100ms', [
            animate('0.8s ease-out', keyframes([
              style({ transform: 'translateY(-20%)', opacity: 1, offset: 0.5 }),
              style({ transform: 'translateY(0)', opacity: 1, offset: 1 })
            ]))
          ])
        ])
      ])
    ])
  ],
  templateUrl: './solutions.component.html',
  styleUrl: './solutions.component.scss'
})
export class SolutionsComponent {
  isVisible = false;

  constructor(private el: ElementRef) {}

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    this.checkVisibility();
  }

  ngAfterViewInit() {
    this.checkVisibility();
  }

  checkVisibility() {
    const component = this.el.nativeElement;
    const rect = component.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;

    this.isVisible = !(rect.bottom < 0 || rect.top - windowHeight >= 0);

    if (this.isVisible) {
      this.el.nativeElement.classList.add('animate');
    } else {
      this.el.nativeElement.classList.remove('animate');
    }
  }
}
