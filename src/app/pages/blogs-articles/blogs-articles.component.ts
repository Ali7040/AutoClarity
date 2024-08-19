import { Component } from '@angular/core';
import { PrecautionsComponent } from '../../components/precautions/precautions.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-blogs-articles',
  standalone: true,
  imports: [PrecautionsComponent, RouterLink],
  templateUrl: './blogs-articles.component.html',
  styleUrl: './blogs-articles.component.scss'
})
export class BlogsArticlesComponent {

}
