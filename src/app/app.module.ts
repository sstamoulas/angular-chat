import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { FromNowPipe } from './pipes/from-now.pipe';

import { UsersService } from './user/users.service';
import { MessagesService } from './message/messages.service';
import { ThreadsService } from './thread/threads.service';

import { ChatThreadsComponent } from './chat-threads/chat-threads.component';
import { ChatThreadComponent } from './chat-thread/chat-thread.component';
import { ChatPageComponent } from './chat-page/chat-page.component';
import { ChatWindowComponent } from './chat-window/chat-window.component';
import { ChatNavBarComponent } from './chat-nav-bar/chat-nav-bar.component';
import { ChatMessageComponent } from './chat-message/chat-message.component';

@NgModule({
  declarations: [
    AppComponent,
    ChatThreadsComponent,
    ChatThreadComponent,
    ChatPageComponent,
    ChatWindowComponent,
    ChatNavBarComponent,
    ChatMessageComponent,
    FromNowPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    { provide: UsersService, useClass: UsersService },
    { provide: MessagesService, useClass: MessagesService },
    { provide: ThreadsService, useClass: ThreadsService },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
