import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from './register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {


  ngOnInit(): void {
 
  }
  registerForm!: FormGroup | any;

  constructor(private formbuilder: FormBuilder , private http:HttpClient , private router:Router,private registerService:RegisterService) { 

    this.registerForm = this.formbuilder.group({
      id: new FormControl('', [Validators.required,Validators.pattern('^[0-9]')]),
      name: new FormControl('', [Validators.required ,Validators.pattern('')]),
      email:new FormControl('',[Validators.required, Validators.pattern('^[a-z0-9\.]{4,18}@[a-z]+\.[a-z\.]{2,6}$')]),
      gender:new FormControl('',[Validators.required,Validators.pattern('^male$|^female$')]),
      status:new FormControl('',[Validators.required,Validators.pattern('^active|^inactive')]),
    });    

}

  register(){
    this.registerService.postReg(this.registerForm.value).subscribe({
      next:(response:any)=>{
        console.log("registered successfully",response)
        this.router.navigate(['login'])
      },
      error:(err:any)=>{
        console.log(err)
      }
    })
  }
 

}
