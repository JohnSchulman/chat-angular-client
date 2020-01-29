import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SmartComponent } from './smart/smart.component';
import { AvatarComponent } from './avatar/avatar.component';
import { RightMessageComponent } from './right-message/right-message.component';
import { LeftMessageComponent } from './left-message/left-message.component';
import { MessageFormComponent } from './message-form/message-form.component';
import { BackToBrPipe } from './back-to-br.pipe';
import { DateToStrPipe } from './date-to-str.pipe';
import { ToBoldPipe } from './to-bold.pipe';
import { SendPipe } from './send.pipe';
import { ReceivePipe } from './receive.pipe';
import {FormsModule} from '@angular/forms';
import {ChatService} from './chat.service';

@NgModule({
  declarations: [
    AppComponent,
    SmartComponent,
    AvatarComponent,
    RightMessageComponent,
    LeftMessageComponent,
    MessageFormComponent,
    BackToBrPipe,
    DateToStrPipe,
    ToBoldPipe,
    SendPipe,
    ReceivePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ChatService],
  bootstrap: [AppComponent]
})
export class AppModule { }
