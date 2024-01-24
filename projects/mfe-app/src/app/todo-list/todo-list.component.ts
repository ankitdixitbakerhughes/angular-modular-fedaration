import { Component, OnInit } from '@angular/core';
// import { SharedService } from 'host-app/SharedService';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss'
})
export class TodoListComponent implements OnInit {
  // constructor(private sharedservice: SharedService) {
  //   this.sharedservice.messageEvent.subscribe(data => {
  //     console.log(data);
  //   });
  // }

  ngOnInit(): void {
    fromEvent(window, 'message').subscribe((data: any) => {
      if (data?.detail)
        console.log(data)
    })
    // (window as any).parent?.addEventListener('userPreferenceChange', this.setMessage.bind(this));
  }

  setMessage(e: any) {
    debugger;
    console.log(e)
  }
}

