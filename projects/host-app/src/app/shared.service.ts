import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  public messageEvent: EventEmitter<any> = new EventEmitter();

  sendMessage(data: any) {
    this.messageEvent.emit(data);
  }
  constructor() { }
}
