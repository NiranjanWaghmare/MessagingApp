import { Component } from '@angular/core';
import { MessagingServiceService } from 'src/services/messaging-service.service';
// 
@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent {
  isLoading: boolean = false
  name: string = ''
  email: string = ''
  isError: boolean = false
  constructor(private service: MessagingServiceService){

  }
  addContact(formData: any){
    this.service.addContact(formData.value)
    console.log(formData)
    
  }
}
