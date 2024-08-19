import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener } from '@angular/core';
import { bounceInAnimation } from '../../animations/custom-animations';

@Component({
  selector: 'app-clients',
  standalone: true,
  imports: [CommonModule],
  animations: [bounceInAnimation],
  templateUrl: './clients.component.html',
  styleUrl: './clients.component.scss'
})
export class ClientsComponent {
  isVisible = true;

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
      this.el.nativeElement.classList.add('animate_clients');
    } else {
      this.el.nativeElement.classList.remove('animate_clients');
    }
  }
}
