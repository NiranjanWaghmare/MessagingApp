import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { MessagingServiceService } from 'src/services/messaging-service.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent {
  email: any;
  password: string;
  name: any;
  confirmpassword: string;
  isLoading: boolean;
  errorMessage: string;
  isError: boolean;

  constructor(private service: MessagingServiceService, private router: Router) {
    this.password = '';
    this.confirmpassword = '';
    this.isLoading = false;
    this.errorMessage = '';
    this.isError = false;
  }

  registerUser(rawForm: NgForm) {
    this.isLoading = true;
    let formData = rawForm.value
    // console.log(formData);
    this.service.registerUser(formData).subscribe(
      (res) => {
        // console.log('result in comp' + res);
        this.service.openSnackBar('Registration Successful');
        this.router.navigate(['/login']);
        rawForm.resetForm();
      },
      (error) => {
        rawForm.resetForm();
        this.router.navigate(['/register']);
        this.isLoading = false;
        // console.log('err in comp' + JSON.stringify(error.error.error, null, 2));
        this.service.openSnackBar(error.error.error);
      }
    );
  }

  getErrorMessage(formData: any) {
    if (formData.confirmpassword !== '' && formData.password !== '') {
      if (formData.confirmpassword !== formData.password) {
        this.isError = true;
        this.errorMessage = 'Password and Confirm Password do not match!';
      } else {
        this.errorMessage = '';
        this.isError = false;
      }
    } else if (formData.invalid) {
      this.isError = true;
      this.errorMessage = 'Form is not filled correctly!';
    } else {
      this.isError = false;
    }
  }
}
