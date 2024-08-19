import { Component } from '@angular/core';
import { ServiceComponent } from '../../components/service/service.component';
import { PrecautionsComponent } from '../../components/precautions/precautions.component';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [ServiceComponent, PrecautionsComponent],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {

}
