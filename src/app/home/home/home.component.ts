import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';
import { CarsService } from 'src/app/shared/services/cars.service';
import { CarsActions, CarsSelectors } from 'src/app/store';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit, OnDestroy {
  cars$ = this.store.select(CarsSelectors.cars);
  searchBox = new FormControl();
  private destroy$ = new Subject<boolean>();

  constructor(private carsService: CarsService, private store: Store) {}

  ngOnInit() {
    this.carsService
      .getCars()
      .pipe(takeUntil(this.destroy$))
      .subscribe((cars) => {
        this.store.dispatch(CarsActions.getCars({ dataCars: cars }));
      });
  }

  onSearch() {
    this.cars$ = this.carsService.filteredCars(this.searchBox.value);
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
