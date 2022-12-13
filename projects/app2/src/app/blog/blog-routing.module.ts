import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatePostComponent } from '../create-post/create-post.component';
import { BlogComponent } from './blog.component';

const routes: Routes = [
  {path:'',component:BlogComponent},
  {path:'createPost',component:CreatePostComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
