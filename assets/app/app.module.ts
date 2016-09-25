import {NgModule}                   from '@angular/core';
import {BrowserModule}              from '@angular/platform-browser';
import {RouterModule}               from "@angular/router";
import {FormsModule}                from '@angular/forms';
import {AppComponent}               from './app.component';
import {MessageComponent}           from "./messages/message.component";
import {MessageListComponent}       from "./messages/message-list.component";
import {MessageInputComponent}      from "./messages/message-input.component";
import {MessagesComponent}          from "./messages/messages.component";
import {HeaderComponent}            from "./header.component";
import {AuthenticationComponent}    from "./auth/authentication.component";
import {SigninComponent}          from "./auth/signin.component";

import {routing}                    from "./app.routes";
import { appRoutingProviders }      from './app.routes';

import {MessageService}             from "./messages/message.service";
import {AuthService}                from "./auth/auth.service";
import {ErrorService}               from "./errors/error.service";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule,
        routing
    ],
    declarations: [
        AppComponent,
        MessageComponent,
        MessageListComponent,
        MessageInputComponent,
        MessagesComponent,
        HeaderComponent,
        AuthenticationComponent,
        SigninComponent
    ],
    bootstrap: [ AppComponent ],
    providers:     [
        MessageService,
        AuthService,
        ErrorService,
        appRoutingProviders
    ]
})
export class AppModule { }
