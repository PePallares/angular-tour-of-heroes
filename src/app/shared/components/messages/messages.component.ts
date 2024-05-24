import { Component } from '@angular/core';
import { MessageService } from '../../../services/message/message.service';
import { NgFor, NgIf } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatDividerModule} from '@angular/material/divider';

@Component({
  selector: 'app-messages',
  standalone: true,
  imports: [NgIf, NgFor, MatSidenavModule, MatDividerModule],
  templateUrl: './messages.component.html',
  styleUrl: './messages.component.scss'
})
export class MessagesComponent {
  
  constructor(public messageService: MessageService) {}
}
