import { NgModule }                 from '@angular/core';
import { BrowserModule }            from '@angular/platform-browser';
import {AppComponent}               from './app.component';
import {MessageComponent}           from "./messages/message.component";
import {HeaderComponent}            from "./header.component";

@NgModule({
  imports: [ BrowserModule ],
  declarations: [
      AppComponent,
      MessageComponent,
      HeaderComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
