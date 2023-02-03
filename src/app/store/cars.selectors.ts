import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CarsState } from './cars.reducer';

export const carsState = createFeatureSelector<CarsState>('carsState');
export const cars = createSelector(carsState, (carsState) => carsState.cars);
