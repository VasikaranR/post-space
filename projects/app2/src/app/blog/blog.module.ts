import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BlogComponent } from './blog.component';
import { CommentComponent } from '../comment/comment.component';
import { CreatePostComponent } from '../create-post/create-post.component';


@NgModule({
  declarations: [BlogComponent,CommentComponent,CreatePostComponent],
  imports: [
    CommonModule,
    BlogRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class BlogModule { }
