/*
 * Team grid structure.
 * Used in another components.
 */
import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';

@Component({
  selector: '[angly-teamGrid]',
  templateUrl: './teamGrid.component.html',
  styleUrls: ['./teamGrid.component.scss']
})
export class TeamGridComponent implements OnInit {

    /*
   * Social links
   */
  socialDetails: any = [
    { icon : 'fa-twitter text-info'}
  ]

  /*
   * Classes of social ul, li
   */
  socialsClasses : any = {ulClass:"", liClass:"", linkClass:""}

  /*
   * teamGridContent is a attribute.
   */
  @Input() teamGridContent:any;

  constructor() { }

  ngOnInit() {
  }


}
