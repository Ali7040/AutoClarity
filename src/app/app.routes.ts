import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './error-pages/page-not-found/page-not-found.component';
import { HomeComponent } from './pages/home/home.component';
import { PublicLayoutComponent } from './layout/public-layout/public-layout.component';
import { AuthLayoutComponent } from './layout/auth-layout/auth-layout.component';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { PricingComponent } from './pages/pricing/pricing.component';
import { FaqsComponent } from './pages/faqs/faqs.component';
import { OurMissionComponent } from './pages/our-mission/our-mission.component';
import { BlogsArticlesComponent } from './pages/blogs-articles/blogs-articles.component';
import { ServicesComponent } from './pages/services/services.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { CheckOutComponent } from './pages/check-out/check-out.component';
import { BusinessComponent } from './pages/business/business.component';
import { CompaniesComponent } from './pages/companies/companies.component';
import { ComparativeComponent } from './pages/comparative/comparative.component';
import { TerminationComponent } from './pages/termination/termination.component';
import { NoticeComponent } from './pages/notice/notice.component';
import { LoadingComponent } from './pages/loading/loading.component';
import { BlogDetailsComponent } from './pages/blog-details/blog-details.component';
import { VehicleHistoryComponent } from './pages/vehicle-history/vehicle-history.component';
import { AdvantagesComponent } from './pages/advantages/advantages.component';

export const routes: Routes = [
    {
        path: '',
        component: PublicLayoutComponent,
        children: [
            { path: '', component: HomeComponent, pathMatch: 'full' },
            { path: 'pricing', component: PricingComponent, pathMatch: 'full' },
            { path: 'faqs', component: FaqsComponent, pathMatch: 'full' },
            { path: 'our-mission', component: OurMissionComponent, pathMatch: 'full' },
            { path: 'blogs-articles', component: BlogsArticlesComponent, pathMatch: 'full' },
            { path: 'services', component: ServicesComponent, pathMatch: 'full' },
            { path: 'contact-us', component: ContactUsComponent, pathMatch: 'full' },
            { path: 'about-us', component: AboutUsComponent, pathMatch: 'full' },
            { path: 'check-out', component: CheckOutComponent, pathMatch: 'full' },
            { path: 'business', component: BusinessComponent, pathMatch: 'full' },
            { path: 'company', component: CompaniesComponent, pathMatch: 'full' },
            { path: 'comparative', component: ComparativeComponent, pathMatch: 'full' },
            { path: 'termination', component: TerminationComponent, pathMatch: 'full' },
            { path: 'notice', component: NoticeComponent, pathMatch: 'full' },
            { path: 'loading', component: LoadingComponent, pathMatch: 'full' },
            { path: 'blog-details', component: BlogDetailsComponent, pathMatch: 'full' },
            { path: 'vehicle-history', component: VehicleHistoryComponent, pathMatch: 'full' },
            { path: 'advantages', component: AdvantagesComponent, pathMatch: 'full' },
          // other public routes
        ]
    },
    {
        path: 'auth',
        component: AuthLayoutComponent,
        children: [
            { path: 'sign-in', component: SignInComponent, pathMatch: 'full' },
            { path: 'sign-up', component: SignUpComponent, pathMatch: 'full' },
          // other public routes
        ]
    },
    { path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page
];
