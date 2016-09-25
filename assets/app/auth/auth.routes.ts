import {Routes} from "@angular/router";
import {RouterModule} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";
import {AuthenticationComponent} from "./authentication.component";
import { SignupComponent } from "./signup.component";
import { SigninComponent } from "./signin.component";
import { LogoutComponent } from "./logout.component";

const authRoutes: Routes = [
    {
        path: 'auth', component: AuthenticationComponent,
        children: [
        {path: 'signup', component: SignupComponent},
        {path: 'signin', component: SigninComponent},
        {path: 'logout', component: LogoutComponent}
        ]
    }
];
export const authRouting: ModuleWithProviders = RouterModule.forRoot(authRoutes);