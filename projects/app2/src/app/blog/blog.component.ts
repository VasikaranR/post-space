import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { BlogService } from './blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  postList:any=[]
  commentList:any=[]
  ngOnInit(): void {
    this.getPost()
    // this.getComments()
  }
  
  blogForm!: FormGroup | any;
  createPost!:FormGroup | any;
  commentForm!:FormGroup | any;
  addPostList:any=[]
  constructor(private formbuilder: FormBuilder , private http:HttpClient , private router:Router,private blogService:BlogService,private config:NgbModalConfig,private modalService:NgbModal) { 
    config.backdrop = 'static';
    config.keyboard = false;

    this.blogForm = this.formbuilder.group({
      title: new FormControl('', [Validators.required]),
      body: new FormControl('', [Validators.required]),
    }); 
    
    this.createPost = this.formbuilder.group({
      id: new FormControl('7631'),
      user_id:new FormControl('4579'),
      title : new FormControl('',[Validators.required]),
      body: new FormControl('',[Validators.required])
    })

    this.commentForm=this.formbuilder.group({
      id:new FormControl(6631),
      post_id: new FormControl(9864),
      name: new FormControl('basset'),
      email: new FormControl('base@gmail.com'),
      body:new FormControl('',[Validators.required])
    })

  

}
  details(content:any){
    this.modalService.open(content)
  }
  
  addPost(){
    this.blogService.getBlog().subscribe({
      next:(response:any)=>{
        console.log("this is response",response)
      }
    })

    this.blogService.postBlog(this.createPost.value).subscribe({
    
      next:(response:any)=>{
        console.log("posted successfully",response)
        this.router.navigate(['blog'])
        window.location.reload();


      },
      error:(err:any)=>{
        console.log(err)
      }
    })
    console.log(this.createPost.value)
  }

  getPost(){
    this.blogService.getBlog().subscribe({
      next:(response:any)=>{
        console.log("ithaan",response)
        this.postList=response

      }
    })
  }

  getComments(){
    this.blogService.getComment().subscribe({
      next:(response:any)=>{
        console.log("comments are loaded ",response)
        this.commentList=response
      }
    })
  }

  postComment(){
    
    console.log("ththht",this.commentForm.value)
    this.blogService.postComment(this.commentForm.value).subscribe({
      next:(response:any)=>{
        console.log("comment added successfully",response)

      }
    })
  }

  logout(){
    this.router.navigate(['login'])
  }

}
