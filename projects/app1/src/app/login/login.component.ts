import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { LoginService } from './login.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
 
  ngOnInit(): void {
  }
  loginForm!: FormGroup | any;

  constructor(private formbuilder: FormBuilder , private http:HttpClient , private router:Router,private loginService:LoginService) { 

    this.loginForm = this.formbuilder.group({
      email: new FormControl('', [Validators.required]),
      name: new FormControl('', [Validators.required]),
    });    

  }
    
get email() {
  return this.loginForm.get('email')
}
get name() {
  return this.loginForm.get('name')
}   


  login(){
    console.log(this.loginForm.value)
    var username=this.loginForm.value.name;
    var userEmail=this.loginForm.value.email;

    this.loginService.getLogin(username).subscribe({
      next:(response:any)=>{
        console.log(response[0].name)
        if(response[0].name==username && response[0].email==userEmail){
          console.log("logged successfully")
          this.router.navigate(['blog'])
        }
        else{
          console.log("either user name or password is incorrect")
        }
      },
      error:(err:any)=>{
        console.log(err)
      }
    });
  }
}


