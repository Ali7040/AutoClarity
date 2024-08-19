import { Component } from '@angular/core';
import { PaymentCardsComponent } from '../../components/payment-cards/payment-cards.component';
import { PrecautionsComponent } from '../../components/precautions/precautions.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [RouterLink, PaymentCardsComponent, PrecautionsComponent],
  templateUrl: './pricing.component.html',
  styleUrl: './pricing.component.scss'
})
export class PricingComponent {

}
