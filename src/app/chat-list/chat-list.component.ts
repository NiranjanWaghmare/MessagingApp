import { Component } from '@angular/core';
import { MessagingServiceService } from 'src/services/messaging-service.service';

@Component({
  selector: 'app-chat-list',
  templateUrl: './chat-list.component.html',
  styleUrls: ['./chat-list.component.css']
})
export class ChatListComponent {
  userArray = new Array()

  constructor(private service: MessagingServiceService){
  }

  getUsers(){
    // this.service.getUsers().subscribe((data)=>{
    //   if(data){
    //     this.userArray = data
    //   }else{
    //     console.log("error");
        
    //   }
    // })
  }
  ngOnInit(){
    this.getUsers()
  }
}
