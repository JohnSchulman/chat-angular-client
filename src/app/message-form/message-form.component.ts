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
  userWriteMessage = '';

  message: FormControl = new FormControl('');

  constructor(private chatService: ChatService, private storeService: StoreService) {}

  ngOnInit() {
    // broadcast recoit le message à tous
    // je gere la reception d'unmessage de quelqu'un d'autre d'ou le broadcast
    this.chatService.on('broadcast', json => {
      const {message, userName} = JSON.parse(json);
      const tmpMessage = {
        side: 'left',
        avatar: 'assets/avatar.jpg',
        content: message,
        date: new Date(),
        // tu recupère le userName grâce à localStorage
        firstName: userName.split(' ')[0],
        lastName: userName.split(' ')[1],
        userName: userName
      };
      this.storeService.addMessage(tmpMessage);
    });

    this.chatService.on('messages', json => {
      // this.storeService.messages = JSON.parse(json);
      let user = JSON.parse(localStorage.getItem('user'));

      let tmpMessages = [];
      for(let m of JSON.parse(json)) {
        // formatte un nouvelles objet avec le commposaant messages
        tmpMessages.push({
          avatar: 'assets/avatar.jpg',
          userName: m.author.first_name + ' ' + m.author.last_name,
          firstName: m.author.first_name,
          lastName: m.author.last_name,
          content: m.text,
          date: new Date(m.createdAt),
          side: user.id === m.author.id ? 'right' : 'left'
        });
      }
      // tu set la proriété messages du store avec la nouvelles proprété
      // de base StoreService.Messages est vide donc on la remplie une seul foisF
      this.storeService.messages = tmpMessages;
    });

    this.chatService.on('IWrite', userWrite => {
      let {userName} = JSON.parse(userWrite);
      this.userWriteMessage = `L'utilisateur ${userName} est en train d'écrire ...`;
    });

    this.chatService.on('IDontWrite', () => {
      this.userWriteMessage = '';
    });
  }

  // l'envoi le message
  submitForm(event, f: NgForm) {
    event.preventDefault();
    let user = JSON.parse(localStorage.getItem('user'));
    this.chatService.sendMessage(
      'discussion',
      JSON.stringify({
        userId: user.id,
        userName: user.first_name + ' ' + user.last_name,
        message: this.message.value
      })
    );

    // l'ajout
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

    // recupérer la listes des messages
  //    this.chatService.on('connexion', json => {
  //     //const db = require('../models');
  //     //let discussions = await db.Discussion.findAll();
  //     //let messages = JSON.parse(localStorage.getItem('message'));
  //     const {messages} = JSON.parse(json);
  //     if(messages.length > 0) {
  //       for(let message of messages) {
  //         const author =  message.Author;
  //         if (author.id === this.id){
  //           this.storeService.addMessage(message);
  //         }
  //       }
  //     }
  //
  // });
  }

  IWrite(event: Event) {
    let user = JSON.parse(localStorage.getItem('user'));
    if (this.message.value.length >= 2) {
      this.chatService.sendMessage('IWrite', JSON.stringify({
        userId: user.id,
        userName: user.first_name + ' ' + user.last_name
      }));
    } else {
      this.chatService.sendMessage('IDontWrite', JSON.stringify({
        userId: user.id,
        userName: user.first_name + ' ' + user.last_name
      }))
    }
  }
}
