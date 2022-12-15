import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommentRoutingModule } from './comment-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HeadersInterceptor } from 'projects/headers.interceptor';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CommentRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers:[{provide:HTTP_INTERCEPTORS,useClass:HeadersInterceptor,multi:true}]
})
export class CommentModule { }
