import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { comment } from './commentDataModel';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http:HttpClient) { }


  postComment(comment:comment){
    return this.http.post('https://gorest.co.in/public/v2/comments',comment)

  }
}
