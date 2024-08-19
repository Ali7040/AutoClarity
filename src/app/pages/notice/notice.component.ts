import { Component } from '@angular/core';
import { ReviewsComponent } from '../../components/reviews/reviews.component';

@Component({
  selector: 'app-notice',
  standalone: true,
  imports: [ReviewsComponent],
  templateUrl: './notice.component.html',
  styleUrl: './notice.component.scss'
})
export class NoticeComponent {

}
