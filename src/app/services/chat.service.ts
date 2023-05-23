import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, switchMap, throwError } from 'rxjs';
// import { Root } from '../models/ResponseModel';
import { Root } from '../models/Model';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private httpClient: HttpClient) { }

  // private url = "https://endpoint-cognigy.cafewell.com/7c36930e5923ea0d805a089021c0c7fd461d6b9f0d29db7bd8c292ca959393d1";

  private url = "https://topik.cafewell.com/api/topik/predict_topic";

  private makePayload(message: String) {
    console.log()
    return "{\"question\":\"" + message + "\", \"version\":2}";
  }  

  model: Root = JSON.parse('{"userId":"userId", "sessionId":"","text":"testing", "data": {"key":"12"}}');

  sendMessage(message: String) : Observable<Object> {
    console.log(this.makePayload(message));
    var response: Root | undefined;
    const headers = {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin':'*',
      'Access-Control-Allow-Methods': '*',
      'Access-Control-Allow-Headers': '*'
    }
    return this.httpClient.post(this.url, this.makePayload(message), {headers});
  }
}
