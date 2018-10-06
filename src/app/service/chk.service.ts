
import {map} from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';


@Injectable()
export class ChkService {

   constructor( private http: Http) { }

   /*
    * Get the content of home page.
    */
   getHomeContent()
   {
      return this.http.get("assets/data/home.json").pipe(map(response => response.json().data));
   }

   /*
    * Get services
    */
   getServices()
   {
     return this.http.get("assets/data/service.json").pipe(map(response => response.json().data));
   }


   /*
    * Get posts
    */
   getPosts()
   {
      return this.http.get("assets/data/posts.json").pipe(map(response => response.json().data));
   }

   /*
    * Get project gallary
    */
   getProjectGallary()
   {
      return this.http.get("assets/data/project-gallary.json").pipe(map(response => response.json().data));
   }


   /*
    * Get blog column2.
    */
   getBlogColumn2()
   {
      return this.http.get("assets/data/blog-column2.json").pipe(map(response => response.json().data));
   }

   /*
    * Get blog column3.
    */
   getBlogColumn3()
   {
      return this.http.get("assets/data/blog-column3.json").pipe(map(response => response.json().data));
   }

   /*
    * Get blog listing sidebar.
    */
   getBlogListingSideBar()
   {
      return this.http.get("assets/data/blog-listing-sidebar.json").pipe(map(response => response.json().data));
   }


   /*
    * Get blog masonary2
    */
   getBlogMasonary2()
   {
      return this.http.get("assets/data/blog-masonary2.json").pipe(map(response => response.json().data));
   }

   /*
    * Get blog masonary3
    */
   getBlogMasonary3()
   {
      return this.http.get("assets/data/blog-masonary3.json").pipe(map(response => response.json().data));
   }

   /*
    * Get blog no sidebar
    */
   getBlogNoSideBar()
   {
      return this.http.get("assets/data/blog-no-sidebar.json").pipe(map(response => response.json().data));
   }

   /*
    * Get blog sidebar
    */
   getBlogSidebar()
   {
      return this.http.get("assets/data/blog-sidebar.json").pipe(map(response => response.json().data));
   }

   /*
    * Get blog sidebar
    */
   getPopularPosts()
   {
      return this.http.get("assets/data/popular-posts.json").pipe(map(response => response.json().data));
   }

   /*
    * Get instagram images
    */
   getInstagramImages()
   {
      return this.http.get("assets/data/instagram.json").pipe(map(response => response.json().data));
   }

   /*
    * Get featured post
    */
   getFeaturedPost()
   {
      return this.http.get("assets/data/featured.json").pipe(map(response => response.json().data));
   }

   /*
    * Get testimonial
    */
   getTestimonial()
   {
      return this.http.get("assets/data/testimonial.json").pipe(map(response => response.json().data));
   }

   /*
    * Get portfolio-v1.
    */
   getPortfolioV1()
   {
    return this.http.get("assets/data/portfolio-v1.json").pipe(map(response => response.json().data));
   }

   /*
    * Get portfolio-v2.
    */
   getPortfolioV2()
   {
      return this.http.get("assets/data/portfolio-v2.json").pipe(map(response => response.json().data));
   }

   /*
    * Get portfolio-v3.
    */
   getPortfolioV3()
   {
      return this.http.get("assets/data/portfolio-v3.json").pipe(map(response => response.json().data));
   }

   /*
   * Get the content of pricing page.
   */
   getPricingPageContent()
   {
    return this.http.get("assets/data/pricing.json").pipe(map(response => response.json().data));
   }


   /*
   * Get the content of features page.
   */
   getFeaturesContent()
   {
    return this.http.get("assets/data/features.json").pipe(map(response => response.json().data));
   }

   /*
   * Get the categories.
   */
   getcategories()
   {
    return this.http.get("assets/data/categories.json").pipe(map(response => response.json().data));
   }

   /*
   * Get the content of contact page.
   */
   getContactContent()
   {
    return this.http.get("assets/data/contact.json").pipe(map(response => response.json().data));
   }

   /*
   * Get the content of search page.
   */
   getSearchContent()
   {
    return this.http.get("assets/data/search.json").pipe(map(response => response.json().data));
   }

   /*
   * Get the team.
   */
   getTeam()
   {
      return this.http.get("assets/data/team.json").pipe(map(response => response.json().data));
   }

   /*
    * Get about.
    */
   getAbout()
   {
      return this.http.get("assets/data/about.json").pipe(map(response => response.json().data));
   }

   /*
   * Get the content of support page.
   */
   getSupportContent()
   {
    return this.http.get("assets/data/support.json").pipe(map(response => response.json().data));
   }

   /*
    * Get home testimonial
    */
   getHomeTestimonial()
   {
      return this.http.get("assets/data/home-testimonial.json").pipe(map(response => response.json().data));
   }

   /*
    * Get footer logo list
    */
   getFooterLogoList()
   {
      return this.http.get("assets/data/footer-logo.json").pipe(map(response => response.json().data));
   }

  /*
   * Get the social share list
   */
   getSocialShare()
   {
    return this.http.get("assets/data/social-share.json").pipe(map(response => response.json().data));
   }

  /*
   * Get the recent comments 
   */
   getRecentComments()
   {
    return this.http.get("assets/data/recent-comments.json").pipe(map(response => response.json().data));
   }

   /*
    * Get contact us widgets
    */
   getContactUsWidgets()
   {
      return this.http.get("assets/data/contact-us-widgets.json").pipe(map(response => response.json().data));
   }

   /*
    * Get cart
    */
   getCart()
   {
      return this.http.get("assets/data/cart.json").pipe(map(response => response.json().data));
   }

   /*
    * Get tweets
    */
   getTweets()
   {
      return this.http.get("assets/data/latest-tweets.json").pipe(map(response => response.json().data));
   }

   /*
    * Get tags
    */
   getTags()
   {
      return this.http.get("assets/data/tags.json").pipe(map(response => response.json().data));
   }

   /*
    * Get archive
    */
   getArchive()
   {
      return this.http.get("assets/data/archive.json").pipe(map(response => response.json().data));
   }

   /*
    * Get about the author
    */
   getAboutAuthor()
   {
      return this.http.get("assets/data/about-author.json").pipe(map(response => response.json().data));
   }

   /*
    * Get about the author
    */
   getTabContent()
   {
      return this.http.get("assets/data/tab-content.json").pipe(map(response => response.json().data));
   }

   /*
    * Get products list
    */
   getProductsList()
   {
      return this.http.get("assets/data/products-list.json").pipe(map(response => response.json().data));
   }

   /*
    * Get related products list
    */
   getRelatedProducts()
   {
      return this.http.get("assets/data/related-products.json").pipe(map(response => response.json().data));
   }

}
