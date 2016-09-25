import { Component, OnInit } from "@angular/core";
import {FormControl} from "@angular/forms";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {User} from "./user";
import {AuthService} from "./auth.service";
import {ErrorService} from "../errors/error.service";

@Component({
    selector: 'my-signup',
    template: `
        <section class="col-md-8 col-md-offset-2">
            <form [formGroup]="myForm" (ngSubmit)="onSubmit()">
                <div class="form-group">
                    <label for="firstName">First Name</label>
                    <input [formControl]="myForm.controls['firstName']" type="text" id="firstName" class="form-control">
                </div>
                <div class="form-group">
                    <label for="lastName">Last Name</label>
                    <input [formControl]="myForm.controls['lastName']" type="text" id="lastName" class="form-control">
                </div>
                <div class="form-group">
                    <label for="email">Mail</label>
                    <input [formControl]="myForm.controls['email']" type="email" id="email" class="form-control">
                </div>
                <div class="form-group">
                    <label for="password">Password</label>
                    <input [formControl]="myForm.controls['password']" type="password" id="password" class="form-control">
                </div>
                <button type="submit" class="btn btn-primary" [disabled]="!myForm.valid">Sign Up</button>
            </form>
        </section>
    `
})

export class SignupComponent implements OnInit {
    myForm: FormGroup;

    constructor(private _fb:FormBuilder, private _authService: AuthService, private _errorService: ErrorService) { }

    ngOnInit() {
        this.myForm = this._fb.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            email: ['', Validators.compose([Validators.required,
                this.isEmail
            ])],
            password: ['', Validators.required]
        });
    }

    onSubmit() {
        //const user = new User(this.myForm.value.email, this.myForm.value.password, this.myForm.value.firstName, this.myForm.value.lastName);
        const user = new User (this.myForm.get('email').value, this.myForm.get('password').value,
                               this.myForm.get('firstName').value, this.myForm.get('lastName').value);
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