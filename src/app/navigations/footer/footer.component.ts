import { Component } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import * as heroIcons from '@ng-icons/heroicons/outline'

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [NgIconComponent],
  providers: [provideIcons(heroIcons)],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  year = new Date().getFullYear();


}
