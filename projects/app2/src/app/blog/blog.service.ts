import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { blog } from './blogDataModel';
import { comment } from '../comment/commentDataModel';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private http:HttpClient) { }



  postBlog(post:blog){
    return this.http.post('https://gorest.co.in/public/v2/posts',post)
  }

  getBlog(){
    return this.http.get(`https://gorest.co.in/public/v2/posts`)
  }

  getComment(){
    return this.http.get(`https://gorest.co.in/public/v2/comments`)
  }
  
  postComment(comment:comment){
    return this.http.post(`https://gorest.co.in/public/v2/comments`,comment)
  }


  
}
