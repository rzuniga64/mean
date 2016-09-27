import { Component, OnInit } from "@angular/core";
import {FormBuilder, FormGroup, FormControl, Validators} from "@angular/forms";
import {ErrorService} from "../errors/error.service";
import {User} from "./user";
import {AuthService} from "./auth.service";
import {EmailValidator} from '../emailValidator';

@Component({
    selector: 'my-signup',
    template: `
        <section class="col-md-8 col-md-offset-2">
            <form #signupForm="ngForm" (ngSubmit)="onSubmit(signupForm.value)">
                <div class="form-group">
                    <label for="firstName">First Name</label>
                   <input type="text" class="form-control" id="firstName" name="firstName" required [ngModel]="firstName" #firstName="ngModel" >
                </div>
                <div class="form-group">
                    <label for="lastName">Last Name</label>
                   <input type="text" class="form-control" id="lastName" name="lastName" required [ngModel]="lastName" #lastName="ngModel" >
                </div>
                <div class="form-group">
                    <label for="email">Mail</label>
                    <input type="email" class="form-control" id="email" name="email" required [ngModel]="email" #email="ngModel" >
                </div>
                <div class="form-group">
                    <label for="password">Password</label>
                    <input type="password" class="form-control" id="password" name="password" required [ngModel]="content" #content="ngModel" >
                </div>
                <button type="submit" class="btn btn-primary" [disabled]="!signupForm.valid">Sign Up</button>
            </form>
        </section>
    `
})

export class SignupComponent implements OnInit {
    signupForm: FormGroup;

    constructor(private _fb:FormBuilder, private _authService: AuthService, private _errorService: ErrorService) { }

    ngOnInit() {

        this.signupForm = this._fb.group({
            firstName: new FormControl('', Validators.required),
            lastName: new FormControl('', Validators.required),
            email: new FormControl(['', Validators.compose([
                Validators.required,
                EmailValidator.invalidEmail
            ])]),
            password: new FormControl('', Validators.required)
        });
    }

    onSubmit(form: any) {
        const user = new User (form.email, form.password, form.firstName, form.lastName);
        console.log(user);
        this._authService.signup(user)
            .subscribe(
                data => console.log(data),
                error => this._errorService.handleError(error)
            )
    }
}