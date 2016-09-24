import {NgModule}                   from '@angular/core';
import {BrowserModule}              from '@angular/platform-browser';
import {AppComponent}               from './app.component';
import {MessageComponent}           from "./messages/message.component";
import {MessageListComponent}       from "./messages/message-list.component";
import {HeaderComponent}            from "./header.component";

import {Message}                    from "./messages/message";

@NgModule({
  imports: [ BrowserModule ],
  declarations: [
      AppComponent,
      Message,
      MessageComponent,
      MessageListComponent,
      HeaderComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
