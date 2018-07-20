import { Injectable } from '@angular/core';
import {Message} from "../models/message.model";
import {Subject} from "rxjs/index";

@Injectable({
  providedIn: 'root'
})
export class LogsService {
    public stringOfMessages: string = '';
    stringOfMessagesSubject = new Subject<string>(); // We use a Subject to set the variable DrlCode Private

    public messages: Message[]= [] ;
    messagesSubject = new Subject<object>(); // We use a Subject to set the variable DrlCode Private

    public message: Message = new Message(-1, new Date().toLocaleTimeString(),"test", {}, "black");

    private idMesssage: number = 0;


  constructor() { }

    emitMessagesSubject() {
        this.messagesSubject.next(this.messages);
    }

    emitStringOfMessagesSubject() {
        this.stringOfMessagesSubject.next(this.stringOfMessages);
    }



  addMessage(type:string, messageSent:object, color:string) {
      let  message: Message = new Message(-1,new Date().toLocaleTimeString(),type, {}, "black");
      message.id = this.messages.length;
    message.date = new Date().toLocaleTimeString();
    message.message = messageSent;
    message.color =color;
    message.type = type;
    this.messages.unshift(message);
    console.log(this.messages);
      this.emitMessagesSubject();
  }

}
