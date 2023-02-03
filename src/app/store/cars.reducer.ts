import { createReducer, on } from '@ngrx/store';
import { CarsActions } from '.';
import { ICar } from '../shared/types/car.interface';

export interface CarsState {
  cars: any[];
}

const initialState: CarsState = {
  cars: [{}],
};

export const carsReducer = createReducer(
  initialState,
  on(CarsActions.getCars, (state, action) => ({ ...state, cars: action.dataCars }))
);
