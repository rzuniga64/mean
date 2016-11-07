import {Routes} from "@angular/router";
import {RouterModule} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";
import {AuthenticationComponent} from "./auth/authentication.component";
import {MessagesComponent} from "./messages/messages.component";

const routes: Routes = [
    {path: '', redirectTo: '/messages', pathMatch: 'full' },
    {path: 'messages', component: MessagesComponent },
    {path: 'auth', component: AuthenticationComponent}
];
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(routes);