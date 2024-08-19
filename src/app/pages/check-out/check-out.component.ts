import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentCardsComponent } from '../../components/payment-cards/payment-cards.component';
import { PaymentSuccessModelComponent } from '../../components/payment-success-model/payment-success-model.component';

@Component({
  selector: 'app-check-out',
  standalone: true,
  imports: [CommonModule, PaymentCardsComponent, PaymentSuccessModelComponent],
  templateUrl: './check-out.component.html',
  styleUrl: './check-out.component.scss'
})
export class CheckOutComponent {
  cardIcons = {
    visa: 'https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg',
    mastercard: 'https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg',
    paypal: 'https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg',
    wise: 'assets/images/payment/wise.svg'
  };

  cardIcon = '';

  onCardNumberChange(event: any) {
    const cardNumber = event.target.value.replace(/\s/g, '');
    this.updateCardIcon(cardNumber);
    event.target.value = this.formatCardNumber(cardNumber);
  }

  updateCardIcon(cardNumber: string) {
    // Determine which card icon to show based on input
    if (/^4[0-9]{6,}$/.test(cardNumber)) {
      this.cardIcon = this.cardIcons.visa;
    } else if (/^5[1-5][0-9]{5,}$/.test(cardNumber)) {
      this.cardIcon = this.cardIcons.mastercard;
    } else {
      this.cardIcon = '';
    }
  }

  formatCardNumber(cardNumber: string): string {
    return cardNumber.replace(/(\d{4})(?=\d)/g, '$1 ');
  }
}
