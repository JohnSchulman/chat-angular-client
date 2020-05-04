import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SmartComponent } from './smart/smart.component';
import { AvatarComponent } from './avatar/avatar.component';
import { MessageFormComponent } from './message-form/message-form.component';
import { BackToBrPipe } from './back-to-br.pipe';
import { DateToStrPipe } from './date-to-str.pipe';
import { ToBoldPipe } from './to-bold.pipe';
import { SendPipe } from './send.pipe';
import { ReceivePipe } from './receive.pipe';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ChatService} from './chat.service';
import {PseudoGeneratorService} from './pseudo-generator.service';
import { MessageComponent } from './message/message.component';

@NgModule({
  declarations: [
    AppComponent,
    SmartComponent,
    AvatarComponent,
    MessageComponent,
    MessageFormComponent,
    BackToBrPipe,
    DateToStrPipe,
    ToBoldPipe,
    SendPipe,
    ReceivePipe,
    MessageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    ChatService,
    PseudoGeneratorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
