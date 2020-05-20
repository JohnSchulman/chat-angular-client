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

    // broadcast recoit le message à tous
    // reception du message

    // je gere le message de quelqu'un d'autre d'ou le broadcast
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

    // tu recupère les infos de mon user connecté
    let user = JSON.parse(localStorage.getItem('user'));
    this.chatService.sendMessage(
      'discussion',
      JSON.stringify({
        // je recupere deux champs specifiques
        userId: user.id,
        userName: user.first_name + ' ' + user.last_name,
        // pour le formControl
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
      firstName: user.first_name,
      lastName: user.last_name,
      userName: user.first_name + ' ' + user.last_name
    });

    this.message.reset();
  }

}
