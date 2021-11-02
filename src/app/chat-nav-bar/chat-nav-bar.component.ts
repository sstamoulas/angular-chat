import {
  Component,
  Inject,
  OnInit
} from '@angular/core';
import * as _ from 'lodash';
import { combineLatest } from 'rxjs';

import { ThreadsService } from './../thread/threads.service';
import { MessagesService } from './../message/messages.service';

import { Thread } from './../thread/thread.model';
import { Message } from './../message/message.model';

@Component({
  selector: 'chat-nav-bar',
  templateUrl: './chat-nav-bar.component.html',
  styleUrls: ['./chat-nav-bar.component.scss']
})
export class ChatNavBarComponent implements OnInit {
  unreadMessagesCount: number = 0;

  constructor(public messagesService: MessagesService,
              public threadsService: ThreadsService) {
  }

  ngOnInit(): void {
    combineLatest(
      this.messagesService.messages,
      this.threadsService.currentThread,
      (messages: Message[], currentThread: Thread) =>
        [currentThread, messages] 
    )
    .subscribe(([currentThread, messages]) => {
      let ct = currentThread as Thread;
      this.unreadMessagesCount =
        _.reduce(
          messages,
          (sum: number, m: Message) => {
            const messageIsInCurrentThread: boolean = m.thread &&
              ct &&
              (ct.id === m.thread.id);
            // note: in a "real" app you should also exclude
            // messages that were authored by the current user b/c they've
            // already been "read"
            if (m && !m.isRead && !messageIsInCurrentThread) {
              sum = sum + 1;
            }
            return sum;
          },
        0);
    });
  }
}
