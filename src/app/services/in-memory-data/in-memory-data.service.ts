import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from '../../model/hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 12, name: 'Dr. Nice' },
      { id: 13, name: 'Bombasto' },
      { id: 14, name: 'Celeritas' },
      { id: 15, name: 'Magneta' },
      { id: 16, name: 'RubberMan' },
      { id: 17, name: 'Dynama' },
      { id: 18, name: 'Dr. IQ' },
      { id: 19, name: 'Magma' },
      { id: 20, name: 'Tornado' },
      {
        id: 21,
        name: 'Hurley Delgado',
      },
      {
        id: 22,
        name: 'Lilian Dickerson',
      },
      {
        id: 23,
        name: 'Kirby Hinton',
      },
      {
        id: 24,
        name: 'Reid Hunt',
      },
      {
        id: 25,
        name: 'Leigh Benjamin',
      },
      {
        id: 26,
        name: 'Tabitha Acosta',
      },
      {
        id: 27,
        name: 'Hutchinson Mullins',
      },
      {
        id: 28,
        name: 'Helene Mcgee',
      },
      {
        id: 29,
        name: 'Rosalind Forbes',
      },
      {
        id: 30,
        name: 'Shields Mccall',
      },
      {
        id: 31,
        name: 'Christina Reilly',
      },
      {
        id: 32,
        name: 'Riddle Dominguez',
      },
      {
        id: 33,
        name: 'Kris Fox',
      },
      {
        id: 34,
        name: 'Hickman Bradford',
      },
      {
        id: 35,
        name: 'Cameron Terrell',
      },
      {
        id: 36,
        name: 'Baird Hansen',
      },
      {
        id: 37,
        name: 'Clemons Roman',
      },
      {
        id: 38,
        name: 'David Peterson',
      },
      {
        id: 39,
        name: 'Davis Moon',
      },
      {
        id: 40,
        name: 'Knox Watkins',
      },
      {
        id: 41,
        name: 'Foley Moses',
      },
      {
        id: 42,
        name: 'Joy Underwood',
      },
      {
        id: 43,
        name: 'Lessie Hickman',
      },
      {
        id: 44,
        name: 'Crystal Bray',
      },
      {
        id: 45,
        name: 'Weiss Poole',
      },
      {
        id: 46,
        name: 'Charlene Wilder',
      },
      {
        id: 47,
        name: 'Angeline Whitney',
      },
      {
        id: 48,
        name: 'Dee Mcconnell',
      },
      {
        id: 49,
        name: 'Barber Williamson',
      },
      {
        id: 50,
        name: 'Willie Owens',
      },
      {
        id: 51,
        name: 'Jacqueline Sparks',
      },
      {
        id: 52,
        name: 'Gilbert Price',
      },
      {
        id: 53,
        name: 'Morrow Brennan',
      },
      {
        id: 54,
        name: 'Margo Gomez',
      },
      {
        id: 55,
        name: 'Cynthia Hensley',
      },
      {
        id: 56,
        name: 'Gonzales Greer',
      },
      {
        id: 57,
        name: 'June Greene',
      },
      {
        id: 58,
        name: 'Felicia Molina',
      },
      {
        id: 59,
        name: 'Morales Garner',
      },
      {
        id: 60,
        name: 'Miles Holden',
      },
      {
        id: 61,
        name: 'Fischer Arnold',
      },
      {
        id: 62,
        name: 'Bentley Taylor',
      },
      {
        id: 63,
        name: 'Brandy Shepherd',
      },
      {
        id: 64,
        name: 'Kelsey Guerra',
      },
      {
        id: 65,
        name: 'Parker Barton',
      },
      {
        id: 66,
        name: 'Ebony Carver',
      },
      {
        id: 67,
        name: 'Lara Stokes',
      },
      {
        id: 68,
        name: 'Margarita Swanson',
      },
      {
        id: 69,
        name: 'Evans Rowland',
      },
      {
        id: 70,
        name: 'Ashley Fletcher',
      },
      {
        id: 71,
        name: 'Hutnson Mullans',
      },
      {
        id: 72,
        name: 'Heen Cee',
      },
      {
        id: 73,
        name: 'Rosad Foes',
      },
      {
        id: 74,
        name: 'Shids Mall',
      },
      {
        id: 75,
        name: 'Chrina Rey',
      },
      {
        id: 76,
        name: 'Riddle Domingo',
      },{
        id: 77,
        name: 'Knox Wains',
      },
      {
        id: 78,
        name: 'Fol Moes',
      },
      {
        id: 79,
        name: 'Joy Unod',
      },
      {
        id: 80,
        name: 'Lessman',
      },
      {
        id: 81,
        name: 'Cryray',
      },
      {
        id: 82,
        name: 'Weole',
      },
      {
        id: 83,
        name: 'Charder',
      },
    ];
    return { heroes };
  }

  genId(heroes: Hero[]): number {
    return heroes.length > 0
      ? Math.max(...heroes.map((hero) => hero.id)) + 1
      : 11;
  }
}
