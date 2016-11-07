import {Routes} from "@angular/router";
import {RouterModule} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";
import {AuthenticationComponent} from "./auth/authentication.component";
import {MessagesComponent} from "./messages/messages.component";
import {AUTH_ROUTES} from "./auth/auth.routes";

const routes: Routes = [
    {path: '', redirectTo: '/messages', pathMatch: 'full' },
    {path: 'messages', component: MessagesComponent },
    {path: 'auth', component: AuthenticationComponent, children: AUTH_ROUTES}
];
export const routing: ModuleWithProviders = RouterModule.forRoot(routes);