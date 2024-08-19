import { Component } from '@angular/core';
import { ClientsComponent } from '../../components/clients/clients.component';

@Component({
  selector: 'app-business',
  standalone: true,
  imports: [ClientsComponent],
  templateUrl: './business.component.html',
  styleUrl: './business.component.scss'
})
export class BusinessComponent {

}
