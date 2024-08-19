import { Component, ElementRef, HostListener } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import * as heroIcons from '@ng-icons/heroicons/outline'
import { bounceInAnimation } from '../../animations/custom-animations';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-clients-small',
  standalone: true,
  imports: [CommonModule, NgIconComponent],
  providers: [provideIcons(heroIcons)],
  animations: [bounceInAnimation],
  templateUrl: './clients-small.component.html',
  styleUrl: './clients-small.component.scss'
})
export class ClientsSmallComponent {
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
      this.el.nativeElement.classList.add('animate_small_clients');
    } else {
      this.el.nativeElement.classList.remove('animate_small_clients');
    }
  }
}
