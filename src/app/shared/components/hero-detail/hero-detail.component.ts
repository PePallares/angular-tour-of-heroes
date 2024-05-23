import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location, NgIf, UpperCasePipe } from '@angular/common';

import { Hero } from '../../../model/hero';
import { HeroService } from '../../../services/hero/hero.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-hero-detail',
  standalone: true,
  imports: [FormsModule, NgIf, UpperCasePipe],
  templateUrl: './hero-detail.component.html',
  styleUrls: [ './hero-detail.component.scss' ]
})
export class HeroDetailComponent implements OnInit {
  hero: Hero | undefined;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    if (this.hero) {
      this.heroService.updateHero(this.hero)
        .subscribe(() => this.goBack());
    }
  }
}