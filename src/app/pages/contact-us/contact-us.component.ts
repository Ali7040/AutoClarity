import { Component } from '@angular/core';
import { PrecautionsComponent } from '../../components/precautions/precautions.component';
import { PaymentCardsComponent } from '../../components/payment-cards/payment-cards.component';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [PrecautionsComponent, PaymentCardsComponent],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss'
})
export class ContactUsComponent {

}
