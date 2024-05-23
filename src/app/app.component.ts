import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import { MessagesComponent } from './shared/components/messages/messages.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MessagesComponent, RouterLink, RouterLinkActive, MatSidenavModule, MatToolbarModule, MatListModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Tour of Heroes';
}
