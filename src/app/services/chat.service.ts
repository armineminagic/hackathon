import { Injectable } from '@angular/core';
import { SocketClient } from '@cognigy/socket-client';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor() { }
 
  async sendMessage(message: string) : Promise<SocketClient | undefined> {
    const ENDPOINT_URL = 'https://endpoint-cognigy.cafewell.com/';
    const URL_TOKEN = '7c36930e5923ea0d805a089021c0c7fd461d6b9f0d29db7bd8c292ca959393d1';
    const socketClient = new SocketClient(ENDPOINT_URL, URL_TOKEN, {
      forceWebsockets: true,
    });
    console.log("Send message: ", message);
    await socketClient.connect()
      const response = socketClient.sendMessage(message);
      return response;
  }
}
