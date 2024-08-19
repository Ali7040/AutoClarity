import { Component, ElementRef, HostListener } from '@angular/core';
import { bounceInAnimation } from '../../animations/custom-animations';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reviews',
  standalone: true,
  imports: [CommonModule],
  animations: [bounceInAnimation],
  templateUrl: './reviews.component.html',
  styleUrl: './reviews.component.scss'
})
export class ReviewsComponent {
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
