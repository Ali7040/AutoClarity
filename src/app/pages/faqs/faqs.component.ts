import { Component } from '@angular/core';
import { StartTrialComponent } from '../../components/start-trial/start-trial.component';

@Component({
  selector: 'app-faqs',
  standalone: true,
  imports: [StartTrialComponent],
  templateUrl: './faqs.component.html',
  styleUrl: './faqs.component.scss'
})
export class FaqsComponent {

}
