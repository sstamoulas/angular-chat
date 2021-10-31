import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { UsersService } from './user/user.service';
import { MessagesService } from './message/messages.service';
import { ThreadsService } from './thread/threads.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    { provide: UsersService, useClass: UsersService },
    { provide: MessagesService, useClass: MessagesService },
    { provide: ThreadsService, useClass: ThreadsService },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
