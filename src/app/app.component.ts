import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import { MessagesComponent } from './shared/components/messages/messages.component';
import {MatDividerModule} from '@angular/material/divider';
import { AuthService } from './services/auth/auth.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MessagesComponent, RouterLink, RouterLinkActive, MatSidenavModule, MatToolbarModule, MatListModule, MatDividerModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Tour of Heroes';
  authService = inject(AuthService);

  constructor(private router: Router) {

  }

  logout() {
    this.authService.logout().then(() => {
      this.router.navigate(['login']);
    })
  }
}
