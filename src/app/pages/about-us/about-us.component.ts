import { Component } from '@angular/core';
import { OurMissionComponent } from '../our-mission/our-mission.component';
import { ServiceComponent } from '../../components/service/service.component';
import { ClientsComponent } from '../../components/clients/clients.component';
import { PaymentCardsComponent } from '../../components/payment-cards/payment-cards.component';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [ClientsComponent, ServiceComponent, PaymentCardsComponent],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.scss'
})
export class AboutUsComponent {

}
