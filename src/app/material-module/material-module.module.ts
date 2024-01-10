import { NgModule } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';
import {MatButtonModule} from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import{MatAutocompleteModule} from '@angular/material/autocomplete'
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';



const MaterialComponent = [ 
  MatCardModule,MatButtonModule,MatIconModule,MatFormFieldModule,FormsModule,MatInputModule,MatAutocompleteModule,MatProgressSpinnerModule,MatSnackBarModule
]

@NgModule({

  imports: [
    MaterialComponent
  ],
  exports:[
    MaterialComponent
  ]
})
export class MaterialModuleModule { }
