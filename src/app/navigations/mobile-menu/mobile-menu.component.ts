import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { ButtonComponent } from '../../shared/button/button.component';
import * as heroIcons from '@ng-icons/heroicons/outline'
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-mobile-menu',
  standalone: true,
  imports: [CommonModule, NgIconComponent, ButtonComponent, RouterLink],
  providers: [provideIcons(heroIcons)],
  templateUrl: './mobile-menu.component.html',
  styleUrl: './mobile-menu.component.scss'
})
export class MobileMenuComponent {
  @Input() isMobileMenuVisible: boolean = false;

  @Output() menuToggle = new EventEmitter<Event>();
  
  // State to track open/close status of each menu item
  childMenuState: { [key: string]: boolean } = {};

  toggleChildMenu(menu: string): void {
    // Toggle the state of the specified child menu
    this.childMenuState[menu] = !this.childMenuState[menu];
  }

  isChildMenuOpen(menu: string): boolean {
    // Check if the specified child menu is open
    return this.childMenuState[menu] || false;
  }
  onSignUpClick(event: Event) {
    console.log('Sign Up clicked!', event);
  }
  toggleMobileMenu() {
    this.menuToggle.emit()
  }
  
}
