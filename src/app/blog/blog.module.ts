import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { BlogsRoutes } from './blog.routing';
import { WidgetsModule } from '../widgets/widgets.module';


import { BlogSidebarComponent } from './blogSidebar/blogSidebar.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(BlogsRoutes),
    WidgetsModule
  ],
  declarations: [
    BlogSidebarComponent,
  ]
})

export class BlogModule {}
