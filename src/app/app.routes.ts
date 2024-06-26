import { Routes } from '@angular/router';
import { HeroesComponent } from './shared/components/heroes/heroes.component';
import { DashboardComponent } from './shared/components/dashboard/dashboard.component';
import { HeroDetailComponent } from './shared/components/hero-detail/hero-detail.component';
import { LoginComponent } from './pages/login/login.component';
import { redirectUnauthorizedTo, redirectLoggedInTo, canActivate } from '@angular/fire/auth-guard';
import { HomeComponent } from './pages/home/home.component';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);
const redirectLoggedInToHome = () => redirectLoggedInTo(['private/home']);

export const routes: Routes = [
  { path: 'login', component: LoginComponent, ...canActivate(redirectLoggedInToHome) },
    { path: 'private', ...canActivate(redirectUnauthorizedToLogin), children: [
      { path: 'home', component: HomeComponent },
      { path: 'heroes', component: HeroesComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      { path: 'detail/:id', component: HeroDetailComponent },   
    ]},
    { path: '**', redirectTo: 'login' }
];
