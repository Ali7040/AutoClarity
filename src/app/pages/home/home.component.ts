import { Component, OnInit } from '@angular/core';
import { HeroComponent } from '../../components/hero/hero.component';
import { ClientsSmallComponent } from '../../components/clients-small/clients-small.component';
import { ClientsComponent } from '../../components/clients/clients.component';
import { FeaturesComponent } from '../../components/features/features.component';
import { ChooseUsComponent } from '../../components/choose-us/choose-us.component';
import { BlogsComponent } from '../../components/blogs/blogs.component';
import { ReviewsComponent } from '../../components/reviews/reviews.component';
import { CustomerSupportComponent } from '../../components/customer-support/customer-support.component';
import { SolutionsComponent } from '../../components/solutions/solutions.component';
import { ServiceComponent } from '../../components/service/service.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroComponent, ClientsSmallComponent, ClientsComponent, 
    FeaturesComponent, ChooseUsComponent, BlogsComponent, ReviewsComponent,
  CustomerSupportComponent, SolutionsComponent, ServiceComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
   
  ngOnInit(): void {
    window.scrollTo(0, 20);
  }
}
