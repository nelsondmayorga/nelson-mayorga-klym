import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { CarsService } from 'src/app/shared/services/cars.service';
import { ICar } from 'src/app/shared/types/car.interface';

@Component({
  selector: 'app-car-card',
  templateUrl: './car-card.component.html',
  styleUrls: ['./car-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CarCardComponent {
  @Input() car!: ICar;

  constructor(private carsService: CarsService, private router: Router) {}

  goToCarDetail() {
    this.carsService.setCarSelected(this.car);
    this.router.navigateByUrl('car-detail');
  }
}
