import {NgModule}                   from '@angular/core';
import {BrowserModule}              from '@angular/platform-browser';
import {AppComponent}               from './app.component';
import {MessageComponent}           from "./messages/message.component";
import {MessageListComponent}       from "./messages/message-list.component";
import {MessageInputComponent}      from "./messages/message-input.component";
import {HeaderComponent}            from "./header.component";

import {MessageService}             from "./messages/message.service";

import {Message}                    from "./messages/message";

@NgModule({
    imports: [ BrowserModule ],
    declarations: [
        AppComponent,
        Message,
        MessageComponent,
        MessageListComponent,
        MessageInputComponent,
        HeaderComponent
    ],
    bootstrap: [ AppComponent ],
    providers:     [
        MessageService
    ]
})
export class AppModule { }
