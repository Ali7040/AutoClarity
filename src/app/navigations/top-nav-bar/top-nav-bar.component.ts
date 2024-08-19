import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { LanguageDropdownComponent } from '../../shared/language-dropdown/language-dropdown.component';
import { ButtonComponent } from '../../shared/button/button.component';
import { CommonModule } from '@angular/common';
import { MobileMenuComponent } from '../mobile-menu/mobile-menu.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-top-nav-bar',
  standalone: true,
  imports: [CommonModule, RouterLink, LanguageDropdownComponent, ButtonComponent, MobileMenuComponent],
  templateUrl: './top-nav-bar.component.html',
  styleUrl: './top-nav-bar.component.scss',
  animations: [
    trigger('dropdownAnimation', [
      state('void', style({
        opacity: 0,
        transform: 'translateY(-20px)'
      })),
      transition(':enter', [
        animate('300ms ease-out', style({
          opacity: 1,
          transform: 'translateY(0)'
        }))
      ]),
      transition(':leave', [
        animate('300ms ease-in', style({
          opacity: 0,
          transform: 'translateY(-20px)'
        }))
      ])
    ])
  ]
})
export class TopNavBarComponent {
  isMobileMenuVisible: boolean = false;

  toggleMobileMenu() {
    this.isMobileMenuVisible = !this.isMobileMenuVisible;
  }

  onSignUpClick(event: Event) {
    console.log('Sign Up clicked!', event);
  }

}
