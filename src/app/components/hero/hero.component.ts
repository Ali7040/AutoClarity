import { AfterViewInit, Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  animations: [
    trigger('carDriveIn', [
      transition(':enter', [
        style({ transform: 'translateX(100%)' }),
        animate('2s ease-out', style({ transform: 'translateX(0)' }))
      ]),
      transition('void => *', [
        style({ transform: 'translateX(100%)' }),
        animate('2s ease-out', style({ transform: 'translateX(0)' }))
      ])
    ]),
    trigger('textBounceIn', [
      transition(':enter', [
        query('h1, p, button, span', [
          style({ transform: 'translateY(100%)', opacity: 0 }),
          stagger('100ms', [
            animate('0.8s ease-out', keyframes([
              style({ transform: 'translateY(-20%)', opacity: 1, offset: 0.5 }),
              style({ transform: 'translateY(0)', opacity: 1, offset: 1 })
            ]))
          ])
        ])
      ]),
      transition('void => *', [
        query('h1, p, button, span', [
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
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent implements AfterViewInit, OnInit {
  isVisible = true;

  constructor(private el: ElementRef) {
  }

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    this.checkVisibility();
  }

  ngOnInit(): void {
    this.isVisible = true
    this.checkVisibility()
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
      this.el.nativeElement.classList.add('animate_here');
    } else {
      this.el.nativeElement.classList.remove('animate_hero');
    }
  }
}
