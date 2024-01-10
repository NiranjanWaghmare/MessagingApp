import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, Router, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { MessageWindowComponent } from './message-window/message-window.component';
import { ChatListComponent } from './chat-list/chat-list.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { ChatWindowComponent } from './chat-window/chat-window.component';
import { AddContactComponent } from './add-contact/add-contact.component';
const routes: Routes = [
  { path: 'chat-list', component: ChatListComponent },
  { path: 'message-window', component: MessageWindowComponent },
  { path: 'register', component: RegisterPageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: '', component: ChatWindowComponent },
  {path: 'add-contact',component: AddContactComponent}
  // Add other routes as needed
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
