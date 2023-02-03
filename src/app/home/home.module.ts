import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { CarListComponent } from './components/car-list/car-list/car-list.component';
import { SharedModule } from '../shared/shared.module';
import { CarCardComponent } from './components/car-card/car-card/car-card.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { carsReducer } from '../store';

@NgModule({
  declarations: [HomeComponent, CarListComponent, CarCardComponent],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    HomeRoutingModule,
    SharedModule,
    StoreModule.forFeature('carsState', carsReducer),
  ],
})
export class HomeModule {}
