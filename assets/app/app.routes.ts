import {Routes} from "@angular/router";
import {RouterModule} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";
import {AuthenticationComponent} from "./auth/authentication.component";
import {MessagesComponent} from "./messages/messages.component";
import { SignupComponent } from "./auth/signup.component";
import { SigninComponent } from "./auth/signin.component";
import { LogoutComponent } from "./auth/logout.component";

const routes: Routes = [
    {path: '', component: MessagesComponent },
    {path: 'auth', component: AuthenticationComponent},
    {path: 'auth/signup', component: SignupComponent},
    {path: 'auth/signin', component: SigninComponent},
    {path: 'auth/logout', component: LogoutComponent}
];
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(routes);