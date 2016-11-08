import {Component, OnInit} from "@angular/core";
import {MessageService} from "./message.service";
import {FormGroup, FormControl, Validators} from "@angular/forms";
import {Message} from "./message";
import {ErrorService} from "../errors/error.service";

@Component({
    selector: 'my-message-input',
    template: `
        <section class="col-md-8 col-md-offset-2">
            <form #messageForm="ngForm" (ngSubmit)="onSubmit(messageForm.value)">
                <div class="form-group">
                    <label for="content">Content</label>
                    <input type="text" class="form-control" id="content" name="content" required [ngModel]="content">
                </div>
                <button type="submit" class="btn btn-primary">{{ !message ? 'Send Message' : 'Save Message' }}</button>
                <button type="button" class="btn btn-danger" (click)="onCancel()" *ngIf="message"> Cancel </button>
             </form>
        </section>
    `
})

 export class MessageInputComponent implements OnInit {

    messageForm: FormGroup;
    message: Message = null;

    constructor(private _messageService: MessageService, private _errorService: ErrorService) {}

    ngOnInit() {

        this.messageForm = new FormGroup({
            content: new FormControl('', Validators.required)
        });

        this._messageService.messageIsEdit.subscribe(
            (message:Message) => {
                this.message = message;
            }
        );
    }

    onCancel() {
        this.message = null;
    }

    onSubmit(messageForm: any) {
        if (this.message) {
            // Edit
            this.message.content = messageForm.content;
            this._messageService.updateMessage(this.message)
                .subscribe(
                    data => console.log(data),
                    error => this._errorService.handleError(error)
                );
            this.message = null;
        } else {
            const message:Message = new Message(messageForm.content, null, 'Dummy', null);
            this._messageService.addMessage(message)
                .subscribe(
                    data => {
                        console.log(data);
                        this._messageService.messages.push(data);
                    },
                    error => this._errorService.handleError(error)
                );
        }
    }
}