import {Component, OnInit, Output} from '@angular/core';
import {FormControl, NgForm} from '@angular/forms';
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

  message: FormControl = new FormControl('');

  constructor(private chatService: ChatService, private storeService: StoreService) {}

  ngOnInit() {
    // on appelle du chatService la fonction "on"  avec les paramètres
    // il recoit le message
    // transform string json en objet json
    // puis chaque variable contient l'objet
    this.chatService.on('discussion', json => {
      const {message, userName} = JSON.parse(json);
      console.log('discussion', userName, message);
    });
    // broadcasr recoit le message à tous

    // reception du message
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
        // tu recupère le userName grâce à localStorage
        firstName: localStorage.getItem('userName'),
        lastName: localStorage.getItem('userName'),
        userName: localStorage.getItem('userName')
      };

      // si le username est un pseudo different je bascule sur l'autre message form
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
  submitForm(event, f: NgForm) {
    // intercept l'evenement
    event.preventDefault();

    // on appelle du chatService la fonction sendMessage  avec les paramètres
    // il envoi le message

    // l'envoie sur les sockets
    // permet aux autres de savoir si on à envoyer une message
    this.chatService.sendMessage(
      'discussion',
      JSON.stringify({
        userName: localStorage.getItem('userName'),
        message: this.message.value
      })
    );

    // l'envoie
    // rempli ton tableau avec les bons elements
    this.storeService.addMessage({
      side: 'right',
      avatar: 'assets/avatar.jpg',
      content: this.message.value,
      date: new Date(),
      // tu recupère le userName grâce à localStorage
      firstName: localStorage.getItem('userName'),
      lastName: localStorage.getItem('userName'),
      userName: localStorage.getItem('userName')
    });

    this.message.reset();
  }

}
