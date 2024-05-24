import { Component, Input, OnInit } from '@angular/core';

import { Hero } from '../../../model/hero';
import { HeroService } from '../../../services/hero/hero.service';
import { AsyncPipe, NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';
import {MatCardModule} from '@angular/material/card';
import { Observable, Subject, debounceTime, distinctUntilChanged, switchMap } from 'rxjs';

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [NgFor, RouterLink, MatCardModule, AsyncPipe],
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  heroes$!: Observable<Hero[]>;
  private searchTerms = new Subject<string>();

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.heroes$ = this.searchTerms.pipe(
      debounceTime(25),
      distinctUntilChanged(),
      switchMap((term: string) => this.heroService.getFilteredHeroes(term)))
  };

  ngAfterViewInit(){
    this.search('');
  }

  search(term: string): void {
    this.searchTerms.next(term);
  }

  // add(name: string): void {
  //   name = name.trim();
  //   if (!name) { return; }
  //   this.heroService.addHero({ name } as Hero)
  //     .subscribe(hero => {
  //       this.heroes.push(hero);
  //     });
  // }

   delete(hero: Hero): void {
     this.heroService.deleteHero(hero.id).subscribe(
      () =>{      
        this.search('');
      }
     );
   }

}