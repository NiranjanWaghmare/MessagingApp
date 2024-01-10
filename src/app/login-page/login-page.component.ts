import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { MessagingServiceService } from 'src/services/messaging-service.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
password: string;
email: string;
isLoading: boolean

constructor(private service: MessagingServiceService,private snackBar : MatSnackBar,private router: Router){
  this.email = '';
  this.password='';
  this.isLoading = false
}


loginRequest(formData:any){
  // console.log(formData)
this.service.validateLogin(formData).subscribe((result)=>{
  // console.log('success'+result)
  this.service.openSnackBar('Login SuccessFul')
  this.router.navigate(['../chat-window'])
},(error)=>{
  // console.log('error'+JSON.stringify(error))
  this.service.openSnackBar('Login Failed: '+error.error.error)
})
}
}
