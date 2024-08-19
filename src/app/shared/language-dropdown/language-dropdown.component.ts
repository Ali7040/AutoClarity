import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';

interface Language {
  code: string;
  name: string;
  flag: string;
}

@Component({
  selector: 'app-language-dropdown',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './language-dropdown.component.html',
  styleUrl: './language-dropdown.component.scss'
})
export class LanguageDropdownComponent {
  languages: Language[] = [
    { code: 'en', name: 'English', flag: 'fi fi-gb' },
    { code: 'es', name: 'Spanish', flag: 'fi fi-es' },
    { code: 'fr', name: 'French', flag: 'fi fi-fr' },
    { code: 'de', name: 'German', flag: 'fi fi-de' }
  ];

  selectedLanguage: Language = this.languages[0];
  isDropdownOpen = false;

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  changeLanguage(language: Language) {
    this.selectedLanguage = language;
    this.isDropdownOpen = false; // Close dropdown after selection
    // Add additional logic to change the app's language here
  }

  @HostListener('document:click', ['$event'])
  handleOutsideClick(event: MouseEvent) {
    const dropdown = document.getElementById('language-dropdown-menu');
    if (dropdown && !dropdown.contains(event.target as Node)) {
      this.isDropdownOpen = false;
    }
  }
}
