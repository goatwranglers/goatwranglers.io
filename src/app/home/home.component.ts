import { Component, OnInit } from '@angular/core';
import { ChkService } from '../service/chk.service';

@Component({
  selector: 'angly-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    subscribeFormClasses: any = {rowClass: 'row', fieldClass: 'col-sm-12 col-md-6' };

  /* Variables */
  homeContent: any;
  services: any;
  projectGallary: any;
  posts: any;
  team: any;
  contact: any;
  videoContent: any;
  mobileFeatured: any;

  constructor( private service: ChkService ) {

      this.service.getHomeContent().
         subscribe(response => {this.homeContent = response; },
                   err      => console.log(err),
                   ()       => this.getContent(this.homeContent)
               );

      this.service.getServices().
         subscribe(response => {this.services = response; },
                  err       => console.log(err),
                  ()        => this.services
               );

      this.service.getPosts().
         subscribe(response => {this.posts = response; },
                  err      => console.log(err),
                  ()       => this.posts
               );

      this.service.getTeam().
         subscribe(response => {this.team = response; },
                   err      => console.log(err),
                   ()       => this.team
               );

      this.service.getContactContent().
         subscribe(response => {this.contact = response; },
                   err      => console.log(err),
                   ()       => this.contact
               );
      }

  ngOnInit() {
  }


  /*
   * getContent is used for get the home page content.
   * Used variables is videoContent and mobileFeatured.
   */
   getContent(content) {
      this.videoContent    = content.video_content;
      this.mobileFeatured  = content.mobile_featured;
   }




}
