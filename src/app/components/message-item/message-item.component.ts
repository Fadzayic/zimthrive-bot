import { Component, OnInit, Input } from '@angular/core';
import { Message } from '../../models/message';

@Component({
  selector: 'app-message-item',
  templateUrl: './message-item.component.html',
  styleUrls: ['./message-item.component.scss']
})
export class MessageItemComponent implements OnInit {

  // tslint:disable-next-line:no-input-rename
  @Input('message')
  private message: Message;

  constructor() { }

  ngOnInit() {
  }

}
