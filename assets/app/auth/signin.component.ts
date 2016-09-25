import { Component, OnInit } from "@angular/core";
import {FormBuilder, Validators, FormControl, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {User} from "./user";
import {AuthService} from "./auth.service";
import {ErrorService} from "../errors/error.service";

@Component({
    selector: 'my-signin',
    template: `
        <section class="col-md-8 col-md-offset-2">
            <form signinForm="ngForm" (ngSubmit)="onSubmit()">
                <div class="form-group">
                    <label for="email">Mail</label>
                    <input type="email" class="form-control" id="email" name="email" required [ngModel]="email" #email="ngModel" >
                </div>
                <div class="form-group">
                    <label for="password">Password</label>
                    <input type="password" class="form-control" id="password" name="password" required [ngModel]="content" #content="ngModel" >
                </div>
                <button type="submit" class="btn btn-primary" [disabled]="!signinForm.valid">Sign In</button>
            </form>
        </section>
    `
})
export class SigninComponent implements OnInit {

    signinForm: FormGroup;
    email: FormControl;
    password: FormControl;

    constructor(private _fb:FormBuilder, private _authService: AuthService, private _router: Router, private _errorService: ErrorService) {}

    ngOnInit() {

        this.email = new FormControl(['', Validators.compose([
            Validators.required,
            this.isEmail
        ])]);

        this.password = new FormControl('', Validators.required);
        
        this.signinForm = this._fb.group({
            email: this.email,
            password: this.password
        });
    }

    onSubmit() {
        const user = new User(this.signinForm.value.email, this.signinForm.value.password);
        this._authService.signin(user)
            .subscribe(
                data => {
                    localStorage.setItem('token', data.token);
                    localStorage.setItem('userid', data.userId);
                    this._router.navigateByUrl('/');
                },
                error => this._errorService.handleError(error)
            )
    }

    private isEmail(control: FormControl): {[s: string]: boolean} {
        if (!control.value.match("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")) {
            return {invalidMail: true};
        }
    }
}