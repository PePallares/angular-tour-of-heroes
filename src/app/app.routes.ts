import { Routes } from '@angular/router';
import { HeroesComponent } from './shared/components/heroes/heroes.component';
import { DashboardComponent } from './shared/components/dashboard/dashboard.component';
import { HeroDetailComponent } from './shared/components/hero-detail/hero-detail.component';

export const routes: Routes = [
  { path: 'heroes', component: HeroesComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'detail/:id', component: HeroDetailComponent },
];
