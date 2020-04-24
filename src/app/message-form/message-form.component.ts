import {Component, OnInit, Output} from '@angular/core';
import {NgForm} from '@angular/forms';
import {ChatService} from '../chat.service';
import {StoreService} from '../store.service';

@Component({
  selector: 'app-message-form',
  templateUrl: './message-form.component.html',
  styleUrls: ['./message-form.component.scss']
})
export class MessageFormComponent implements OnInit {
  @Output() method = 'post';
  @Output() action = '/api/message';

  constructor(private chatService: ChatService, private storeService: StoreService) {}

  ngOnInit() {
  }
  submitForm(event, f: NgForm) {
    // intercept l'evenement
    event.preventDefault();
    // console.log(this.action, this.method);
    // console.log(f.value.message);

    // on appelle du chatService la fonction sendMessage  avec les paramètres
    // il envoi le message
    this.chatService.sendMessage(
      localStorage.getItem('socket_id'),
      'discussion',
      JSON.stringify({
        userName: localStorage.getItem('userName'),
        message: f.value.message
      }));

    this.chatService.on('client_id', id => {
      localStorage.setItem('socket_id', id);
    });
    // on appelle du chatService la fonction "on"  avec les paramètres
    // il recoit le message
    this.chatService.on('discussion', json => {
      const {message, userName} = JSON.parse(json);
      console.log('discussion', userName, message);
    });
    // broadcasr recoit le message à tous
    this.chatService.on('broadcast', json => {
      // je transform  mon string json une seul objet grace a parse(jsopn)
      // puis je recupere mes deux string dans la variable message et username
      // pour pouvoir le traiter après
      const {message, userName} = JSON.parse(json);
      const tmpMessage = {
        side: 'right',
        avatar: 'assets/avatar.jpg',
        content: message,
        date: new Date(),
        firstName: localStorage.getItem('userName'),
        lastName: localStorage.getItem('userName'),
        userName: localStorage.getItem('userName')
      };

      if (userName !== localStorage.getItem('userName')) {
        tmpMessage.side = 'left';
        tmpMessage.lastName = userName;
        tmpMessage.firstName = userName;
        tmpMessage.userName = userName;

        console.log('broadcast', userName, message);
      }
      this.storeService.addMessage(tmpMessage);
    });
  }

}
