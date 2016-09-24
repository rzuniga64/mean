import {NgModule}                   from '@angular/core';
import {BrowserModule}              from '@angular/platform-browser';
import {FormsModule}                from '@angular/forms';
import {AppComponent}               from './app.component';
import {MessageComponent}           from "./messages/message.component";
import {MessageListComponent}       from "./messages/message-list.component";
import {MessageInputComponent}      from "./messages/message-input.component";
import {HeaderComponent}            from "./header.component";

import {MessageService}             from "./messages/message.service";
import {ErrorService}               from "./errors/error.service";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule
    ],
    declarations: [
        AppComponent,
        MessageComponent,
        MessageListComponent,
        MessageInputComponent,
        HeaderComponent
    ],
    bootstrap: [ AppComponent ],
    providers:     [
        MessageService,
        ErrorService
    ]
})
export class AppModule { }
