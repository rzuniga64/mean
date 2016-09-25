import {Component} from "@angular/core";

@Component ({
    selector: 'my-messages',
    template: `
        <div class="row spacing">
           <my-message-input></my-message-input>
        </div>
        
        <div class="row spacing">
            <my-msessage-list></my-msessage-list>
        </div>   
    `
})

export class MessagesComponent {

}