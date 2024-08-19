import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import * as heroIcons from '@ng-icons/heroicons/outline';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule, NgIconComponent],
  providers: [provideIcons(heroIcons)],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Input() buttonText: string = 'Button';
  @Input() buttonType: string = 'button';
  @Input() buttonColor: string = 'bg-primary';
  @Input() hoverColor: string = 'hover:bg-green-800';
  @Input() ringColor: string = 'focus:ring-green-300';

  @Input() width: string = 'auto';  // Default width
  @Input() height: string = 'auto'; // Default height
  @Input() borderRadius: string = '0.25rem'; // Default border radius

  @Input() iconName: string = ''; // Name for the icon
  @Input() iconClass: string = ''; // Class for the icon
  @Input() iconPosition: 'left' | 'right' = 'left'; // Position of the icon

  @Output() buttonClick = new EventEmitter<Event>();

  handleClick(event: Event) {
    this.buttonClick.emit(event);
  }

}
