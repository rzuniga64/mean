import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
        <div class="container">
            <h2>A MongoDB Express Angular NodeJS App</h2>
            <my-header></my-header>
            <router-outlet></router-outlet>
        </div>
        <my-error></my-error>
        
    `
})
export class AppComponent { }
