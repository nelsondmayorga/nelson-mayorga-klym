import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarDetailRoutingModule } from './car-detail-routing.module';
import { CarDetailComponent } from './car-detail/car-detail.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [CarDetailComponent],
  imports: [CommonModule, CarDetailRoutingModule, SharedModule],
})
export class CarDetailModule {}
