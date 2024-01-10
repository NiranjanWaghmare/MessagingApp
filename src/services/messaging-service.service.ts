import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, map, throwError } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
@Injectable({
  providedIn: 'root',
})
export class MessagingServiceService {
  private apiUrl = 'http://localhost:3000/user';
  isLoading = false;

  constructor(private http : HttpClient,private snackBar: MatSnackBar,) {
    
  }

  openSnackBar(message:string) {

    this.snackBar.open(message,'x',{
      duration: 5000,
        horizontalPosition: 'center',
        verticalPosition: 'bottom',
    });
  }

  validateLogin(formData: any){
    const loginUrl = `${this.apiUrl}/login`
    // console.log(formData)
    return this.http.post(loginUrl,formData).pipe(
      map((res) => {
        // console.log("data service", res);
        return res;
      }),
      catchError((err) => {
        // console.log("data-error in service", JSON.stringify(err.message, null, 2));
        throw err;
      })
    );
  }


  registerUser(formData: any) {
    const registerUrl = `${this.apiUrl}/register`;
    // console.log(formData+'before deleting');
    
    delete formData.confirmpassword;
    // console.log(formData+'After deleting');
     return this.http.post(registerUrl, formData).pipe(
      map((res) => {
        // console.log("data service", res);
        return res;
      }),
      catchError((err) => {
        // console.log("data-error in service", JSON.stringify(err.message, null, 2));
        throw err;
      })
    );
  }

  addContact(formData: any){
    return this.http.get(this.apiUrl,formData).pipe(map((res) => {
      // console.log("data service", res);
      return res;
    }),
    catchError((err) => {
      // console.log("data-error in service", JSON.stringify(err.message, null, 2));
      throw err;
    }))
  }
  // private handleError(error: any): Observable<never> {
    // console.error('An error occurred:', error);
  //   return throwError('Something went wrong; please try again later.'+error);
  // }
}