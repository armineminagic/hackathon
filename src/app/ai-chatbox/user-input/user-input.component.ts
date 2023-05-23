import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ChatService } from 'src/app/services/chat.service';
import { DatePipe } from '@angular/common';
import { Root } from 'src/app/models/ResponseModel';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.css']
})
export class UserInputComponent {

  constructor(private chatService: ChatService) {}

  message: String = "";
  sentMessage: String = "";
  res: Root | undefined;
  date = new Date();

  async sendMessage() : Promise<void> {
    this.date = new Date();
    this.res = undefined;
    this.sentMessage = this.message;
    var param: any;
    if (this.message) {
      this.chatService.sendMessage(this.message).subscribe(data => {
        const tmp: any = data;
        this.res = JSON.parse(JSON.stringify(tmp));
        console.log(this.res);
      });
      console.log(this.res);
      this.date = new Date();
    } else {
      console.log("Message doesn't contain any text.");
    }
    // console.log(response)
  }

}
