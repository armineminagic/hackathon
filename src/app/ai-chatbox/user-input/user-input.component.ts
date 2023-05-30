import { Component } from '@angular/core';
import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.css'],
  providers: [ ChatService ]
})
export class UserInputComponent {

  constructor(private chatService: ChatService) {}

  message: string = "";
  sentMessage: String = "";
  messageStatus: String = "Hi, how can I help you?";
  answer: string = '';
  sentDate = new Date();
  reciveDate: Date = new Date();

  async sendMessage() {
    this.sentMessage = this.message;
    this.sentDate = new Date();
    this.messageStatus = "Typing...";
    this.answer = "";
    const resp = await this.chatService.sendMessage(this.message);
    resp?.on("output", (output: {text: string; data: string}) => {
      this.reciveDate = new Date();
      this.answer = output.text;
      this.messageStatus = "Do you have any other question?";
      this.message = "";
    })
  }
}
