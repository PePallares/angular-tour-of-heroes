import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  messages: string[] = [];

  add(message: string) {
    this.messages.push((this.messages.length+1) + ' - ' + message);
  }

  clear() {
    this.messages = [];
  }
}