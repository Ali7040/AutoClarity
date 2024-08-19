import { Component, OnInit } from '@angular/core';
import { PaymentCardsComponent } from '../../components/payment-cards/payment-cards.component';
import { PricingComponent } from '../pricing/pricing.component';

@Component({
  selector: 'app-loading',
  standalone: true,
  imports: [PricingComponent],
  templateUrl: './loading.component.html',
  styleUrl: './loading.component.scss'
})
export class LoadingComponent implements OnInit {
  isLoading: boolean = false

  constructor() {}

  ngOnInit(): void {
    this.isLoading = true
    setTimeout(() => {
      this.isLoading = false
    }, 3000);
  }

}
