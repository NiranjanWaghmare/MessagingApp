import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Messaging_App';
  constructor(private router: Router){}
  ngOnInit(): void{
    // this.router.navigate(['/register'])
  }

}
