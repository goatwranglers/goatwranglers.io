import { Routes } from '@angular/router';

import { BlogSidebarComponent } from './blogSidebar/blogSidebar.component';

export const BlogsRoutes: Routes = [{
  path: '',
  redirectTo: 'blog',
  pathMatch: 'full',
}, {
     path: 'blog',
    component: BlogSidebarComponent
  }
];
