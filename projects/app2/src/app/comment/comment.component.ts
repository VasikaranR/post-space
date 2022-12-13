import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormArray, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommentService } from './comment.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {


  ngOnInit(): void {
  }
  
   commentForm!: FormArray | any;

  constructor(private formbuilder: FormBuilder , private http:HttpClient , private router:Router,private commentService:CommentService) { 

    this.commentForm = this.formbuilder.group({
      id:new FormControl('', [Validators.required]),
      post_id: new FormControl('', [Validators.required]),
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      body:new FormControl('',[Validators.required])

    });    
   
  }

  
  comment(){
    console.log(this.commentForm.value)

    this.commentService.postComment(this.commentForm.value).subscribe({
      next:(response:any)=>{
        console.log("comment posted successfully", response)

      },
      error:(err:any)=>{
        console.log(err)
      }
    })
  }
  
}



