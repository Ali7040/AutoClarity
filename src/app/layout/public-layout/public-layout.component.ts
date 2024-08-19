import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { TopNavBarComponent } from "../../navigations/top-nav-bar/top-nav-bar.component";
import { FooterComponent } from '../../navigations/footer/footer.component';
import { NewsLetterComponent } from '../../shared/news-letter/news-letter.component';

@Component({
  selector: 'app-public-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, TopNavBarComponent, FooterComponent, NewsLetterComponent],
  templateUrl: './public-layout.component.html',
  styleUrl: './public-layout.component.scss'
})
export class PublicLayoutComponent {

}
