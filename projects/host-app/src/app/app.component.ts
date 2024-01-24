import { Component, Inject } from '@angular/core';
import { SharedService } from './shared.service';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'host-app';

  constructor(private sharedservice: SharedService, @Inject(DOCUMENT) private document: Document,) {

  }

  sendMessage() {
    debugger;
    // this.sharedservice.sendMessage('your_data_here');
    const event = new CustomEvent('message', {
      detail: { show: true, message: 'your data is here. ', variant: 'error' },
    });
    dispatchEvent(event);
  }
}
