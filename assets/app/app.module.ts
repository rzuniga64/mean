import {NgModule}                   from '@angular/core';
import {BrowserModule}              from '@angular/platform-browser';
import {FormsModule}                from '@angular/forms';
import {AppComponent}               from './app.component';
import {MessageComponent}           from "./messages/message.component";
import {MessageListComponent}       from "./messages/message-list.component";
import {MessageInputComponent}      from "./messages/message-input.component";
import {MessagesComponent}          from "./messages/messages.component";
import {HeaderComponent}            from "./header.component";
import {AuthenticationComponent}    from "./auth/authentication.component";

import {MessageService}             from "./messages/message.service";
import {AuthService}                from "./auth/auth.service";
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
        MessagesComponent,
        HeaderComponent,
        AuthenticationComponent
    ],
    bootstrap: [ AppComponent ],
    providers:     [
        MessageService,
        AuthService,
        ErrorService
    ]
})
export class AppModule { }
