import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
})
export class CarComponent implements OnInit {
  model: string | undefined;
  speed: number | undefined;
  name: string | undefined;
  colors!: Colors;
  options!: string[];
  isEdit: boolean = false;

  constructor() {}

  ngOnInit(): void {
    this.model = 'Acura';
    this.speed = 240;
    this.name = 'MDX';
    this.colors = {
      car: 'Белый',
      salon: 'Черный',
      wheels: 'Серебристый',
    };
    this.options = ['ABS', 'Автопилот', 'Круиз контроль'];
  }

  showEdit() {
    this.isEdit = !this.isEdit;
  }

  addOpt(option: string) {
    this.options.unshift(option);
    return false;
  }

  deleteOpt(option: string) {
    for (let i = 0; i < this.options.length; i++) {
      if (this.options[i] == option) {
        this.options.splice(i, 1);
        break;
      }
    }
  }

  carSelect(carName: string) {
    if (carName == 'lexus') {
      this.model = 'Lexus';
      this.speed = 220;
      this.name = 'RX 330';
      this.colors = {
        car: 'Черный',
        salon: 'Бежевый',
        wheels: 'Серебристый',
      };
      this.options = ['EBS', 'Датчик света', 'Круиз контроль'];
    } else if (carName == 'infiniti') {
      this.model = 'Infiniti';
      this.speed = 255;
      this.name = 'QX 60';
      this.colors = {
        car: 'Оранжевый',
        salon: 'Оранжевый',
        wheels: 'Черный',
      };
      this.options = ['ABS', 'Спорт Режим', 'Круиз контроль'];
    } else {
      this.model = 'Acura';
      this.speed = 240;
      this.name = 'MDX';
      this.colors = {
        car: 'Белый',
        salon: 'Черный',
        wheels: 'Серебристый',
      };
      this.options = ['ABS', 'Автопилот', 'Круиз контроль'];
    }
  }
}

interface Colors {
  car: string;
  salon: string;
  wheels: string;
}
