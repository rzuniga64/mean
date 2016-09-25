import { Component, OnInit } from "@angular/core";
import {FormBuilder, FormGroup, FormControl, Validators} from "@angular/forms";
import {User} from "./user";
import {AuthService} from "./auth.service";
import {ErrorService} from "../errors/error.service";

@Component({
    selector: 'my-signup',
    template: `
        <section class="col-md-8 col-md-offset-2">
            <form #signupForm="ngForm" (ngSubmit)="onSubmit()">
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
    firstName: FormControl;
    lastName: FormControl;
    email: FormControl;
    password: FormControl;

    constructor(private _fb:FormBuilder, private _authService: AuthService, private _errorService: ErrorService) { }

    ngOnInit() {

        this.firstName = new FormControl('', Validators.required);
        this.lastName = new FormControl('', Validators.required);
        this.email = new FormControl(['', Validators.compose([
            Validators.required,
            this.isEmail
        ])]);
        this.password = new FormControl('', Validators.required);

        this.signupForm = this._fb.group({
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.email,
            password: this.password
        });
    }

    onSubmit() {
        //const user = new User(this.signupForm.value.email, this.signupForm.value.password, this.signupForm.value.firstName, this.signupForm.value.lastName);
        const user = new User (this.signupForm.get('email').value, this.signupForm.get('password').value,
                               this.signupForm.get('firstName').value, this.signupForm.get('lastName').value);
        console.log(user);
        this._authService.signup(user)
            .subscribe(
                data => console.log(data),
                error => this._errorService.handleError(error)
            )
    }


     private isEmail(control: FormControl): {[s: string]: boolean} {
        if (!control.value.match("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")) {
            return {invalidMail: true};
        }
    }
}