import {Component, OnInit} from "@angular/core";
import {Message} from "./message";
import {MessageService} from "./message.service";
import {ErrorService} from "../errors/error.service";

@Component({
    selector: 'my-msessage-list',
    template: `
        <section class="col-md-8 col-md-offset-2">
            <my-message *ngFor="let message of messages" [message]="message" (editClicked)="message.content=$event"></my-message>
        </section>
    `
})

export class MessageListComponent implements OnInit {

    messages: Message[];

    constructor(private _messageService: MessageService, private _errorService: ErrorService) {}

    // We set up the map method to return an array of messages in the messages service.
    ngOnInit() {
        this._messageService.getMessages()
            .subscribe(
                messages => {
                    this.messages = messages;
                    this._messageService.messages = messages;
                },
                error => this._errorService.handleError(error)
            );
    }
}