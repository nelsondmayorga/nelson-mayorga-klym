import { Component } from '@angular/core';
import { CarsService } from 'src/app/shared/services/cars.service';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.scss'],
})
export class CarDetailComponent {
  car$ = this.carsService.carSelected$;

  constructor(private carsService: CarsService) {}
}
