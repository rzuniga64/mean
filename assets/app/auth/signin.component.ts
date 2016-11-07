import { Component, OnInit } from "@angular/core";
import {FormBuilder, FormGroup, FormControl, Validators, NgForm} from "@angular/forms";
import {Router} from "@angular/router";
import {ErrorService} from "../errors/error.service";
import {User} from "./user.model";
import {AuthService} from "./auth.service";
import {EmailValidator} from '../emailValidator';

@Component({
    selector: 'my-signin',
    template: `
        <section class="col-md-8 col-md-offset-2">
            <form #signinForm="ngForm" (ngSubmit)="onSubmit(signinForm)">
                <div class="form-group">
                    <label for="email">Mail</label>
                    <input type="email" class="form-control" id="email" name="email" required [ngModel]="email" >
                </div>
                <div class="form-group">
                    <label for="password">Password</label>
                    <input type="password" class="form-control" id="password" name="password" required [ngModel]="content">
                </div>
                <button type="submit" class="btn btn-primary" [disabled]="!signinForm.valid">Sign In</button>
            </form>
        </section>
    `
})

export class SigninComponent implements OnInit {
    signinForm: FormGroup;

    constructor(private _fb:FormBuilder, private _authService: AuthService, private _router: Router, private _errorService: ErrorService) { }

    ngOnInit() {

        this.signinForm = this._fb.group({
            email: new FormControl(['', Validators.compose([
                Validators.required,
                EmailValidator.invalidEmail
            ])]),
            password: new FormControl('', Validators.required)
        });
    }


    onSubmit(form: NgForm) {
        const user = new User(form.value.email, form.value.password);
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
}