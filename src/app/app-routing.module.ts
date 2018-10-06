import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent }   from './main/main.component';
import { HomeComponent } from './home/home.component';
import { PricingComponent } from './pricing/pricing.component';
import { ContactComponent } from './contact/contact.component';
import { FeaturesComponent } from './features/features.component';
import { AboutComponent } from './about/about.component';
import { SearchComponent } from './search/search.component';
import { SupportComponent } from './support/support.component';
import { sidebarWidgetsComponent } from './sidebarWidgets/sidebarWidgets.component';

export const AppRoutes: Routes = [{
   path: '',
   redirectTo: 'home',
   pathMatch: 'full',
   },{
      path: '',
      component: MainComponent,
      children: [
         {
            path: 'home',
            component: HomeComponent
         },{
            path: '',
            loadChildren: './blog/blog.module#BlogModule'
         },{
            path: 'pricing',
            component: PricingComponent
         },{
            path: 'contact',
            component: ContactComponent
         },{
            path:'features',
            component:FeaturesComponent
         },{
            path:'about',
            component:AboutComponent
         },{
            path:'search',
            component:SearchComponent
         },{
            path:'support',
            component:SupportComponent
         },{
            path: '',
            loadChildren: './portfolio/portfolio.module#PortfolioModule'
         }, {
            path: '',
            loadChildren: './testimonial/testimonial.module#TestimonialModule'
         }, {
            path: 'sidebar-widgets',
            component:sidebarWidgetsComponent
         },{
            path: '',
            loadChildren: './session/session.module#SessionModule'
         },{
            path: '',
            loadChildren: './shop/shop.module#ShopModule'
         },{ 
				path: 'about/:keyword',component: AboutComponent 
			}
      ]
}];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(AppRoutes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
