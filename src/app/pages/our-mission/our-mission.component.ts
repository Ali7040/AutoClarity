import { Component } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import * as heroIcons from '@ng-icons/heroicons/outline'
@Component({
  selector: 'app-our-mission',
  standalone: true,
  imports: [NgIconComponent],
  providers: [provideIcons(heroIcons)],
  templateUrl: './our-mission.component.html',
  styleUrl: './our-mission.component.scss'
})
export class OurMissionComponent {

}
