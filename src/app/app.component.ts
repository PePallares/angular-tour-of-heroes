import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import { MessagesComponent } from './shared/components/messages/messages.component';
import {MatDividerModule} from '@angular/material/divider';
import { AuthService } from './services/auth/auth.service';
import { LoginComponent } from './pages/login/login.component';
import { Observable } from 'rxjs/internal/Observable';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MessagesComponent, RouterLink, RouterLinkActive, MatSidenavModule, MatToolbarModule, MatListModule, MatDividerModule, LoginComponent, CommonModule, MatButtonModule, MatMenuModule, MatIconModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Tour of Heroes';
  authService = inject(AuthService);
  isLoggedIn$: Observable<boolean>;

  constructor(private router: Router) {
    this.isLoggedIn$ = this.authService.isLoggedIn;
  }

  ngOnInit() {
    this.isLoggedIn$ = this.authService.isLoggedIn;
  }

  logout() {
    this.authService.logout().then(() => {
      this.router.navigate(['login']);
    })
  }
}
