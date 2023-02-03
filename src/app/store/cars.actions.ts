import { createAction, props } from '@ngrx/store';

export const getCars = createAction('[Home page] Get cars', props<{ dataCars: any }>());
