import { Component } from '@angular/core';
import { VehicalHistoryReportIncludesComponent } from '../../components/vehical-history-report-includes/vehical-history-report-includes.component';

@Component({
  selector: 'app-companies',
  standalone: true,
  imports: [VehicalHistoryReportIncludesComponent],
  templateUrl: './companies.component.html',
  styleUrl: './companies.component.scss'
})
export class CompaniesComponent {

}
