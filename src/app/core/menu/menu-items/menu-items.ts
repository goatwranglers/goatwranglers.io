import { Injectable } from '@angular/core';

/*
 * Menu interface
 */
export interface Menu {
state: string;
name?: string;
type?: string;
icon?: string;
children?: ChildrenItems[];
}

/*
 * Children menu interface
 */
export interface ChildrenItems {
state: string;
name: string;
type?: string;
}

const HEADERMENUITEMS = [
   {
      state: 'home',
      name: 'Home',
      type: 'link'
   },
   {
      state: 'features',
      name: 'Dev Playbook',
      type: 'link',
   },
   { state: 'contact', name: 'Contact', type: 'link'},
   {
    state: 'blog',
    name: 'Blog',
    type: 'link'
 },
   {
      state: 'blog',
      name: 'Blog',
      type: 'link'
   }
   ];

const FOOTERMENU = [
];

const EXPLOREMENU = [
   {
      state: 'home',
      name: 'Dashboard',
      type: 'link'
   },
   {
      state: 'sign-in',
      name: 'Sign In',
      type: 'link'
   },
   {
      state: 'sign-up',
      name: 'Sign Up',
      type: 'link'
   }
];

@Injectable()
export class MenuItems {

   /*
    * Get all header menu
    */
   getMainMenu(): Menu[] {
      return HEADERMENUITEMS;
   }

   /*
    * Get footer menu
    */
   getFooterMenu(): Menu[] {
      return FOOTERMENU;
   }

   /*
    * Get the explore menu
    */
   getExploreMenu(): Menu[] {
      return EXPLOREMENU;
   }
}
