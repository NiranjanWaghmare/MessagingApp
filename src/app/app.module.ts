import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModuleModule } from './material-module/material-module.module';
import { ChatListComponent } from './chat-list/chat-list.component';
import { MessageWindowComponent } from './message-window/message-window.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import {  HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { ChatWindowComponent } from './chat-window/chat-window.component';
import { AddContactComponent } from './add-contact/add-contact.component';




@NgModule({
  declarations: [
    AppComponent,
    ChatListComponent,
    MessageWindowComponent,
    RegisterPageComponent,
    LoginPageComponent,
    ChatWindowComponent,
    AddContactComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModuleModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
