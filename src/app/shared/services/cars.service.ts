import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import { ICar } from '../types/car.interface';

@Injectable({
  providedIn: 'root',
})
export class CarsService {
  private carSelected = new BehaviorSubject<ICar | null>(null);
  carSelected$ = this.carSelected.asObservable();

  constructor(private http: HttpClient) {}

  getCars() {
    return this.http.get<ICar[]>('assets/cars.json');
  }

  setCarSelected(carSelected: ICar) {
    this.carSelected.next(carSelected);
  }

  filteredCars(word: string) {
    if (word.length > 0) {
      return this.getCars().pipe(
        map((cars) => {
          return cars.filter((car) => {
            const lowerCaseBrand = car.brand.toLowerCase();
            return lowerCaseBrand.includes(word.toLocaleLowerCase());
          });
        })
      );
    }
    return this.getCars();
  }
}
