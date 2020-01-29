import {Component, OnInit, Output} from '@angular/core';
import {NgForm} from '@angular/forms';
import {ChatService} from '../chat.service';

@Component({
  selector: 'app-message-form',
  templateUrl: './message-form.component.html',
  styleUrls: ['./message-form.component.scss']
})
export class MessageFormComponent implements OnInit {
  @Output() method = 'post';
  @Output() action = '/api/message';
  chatService: ChatService;
  constructor(chatService: ChatService) {
    this.chatService = chatService;
  }

  ngOnInit() {
  }
  submitForm(event, f: NgForm) {
    event.preventDefault();
    // console.log(this.action, this.method);
    // console.log(f.value.message);
    this.chatService.sendMessage('discussion', f.value.message);
    this.chatService.on('discussion', message => {
      console.log('discussion', message);
    });
    this.chatService.on('broadcast', message => {
      console.log('broadcast', message);
    });
  }

}
