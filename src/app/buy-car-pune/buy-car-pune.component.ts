import { Component, OnInit } from '@angular/core';
import { Car } from '../model/car';
import { Customer } from '../model/customer';
import { SellCarService } from '../sell-car.service';

@Component({
  selector: 'app-buy-car-pune',
  templateUrl: './buy-car-pune.component.html',
  styleUrls: ['./buy-car-pune.component.css']
})
export class BuyCarPuneComponent implements OnInit {
  car!: Car[];
  customer!: Customer;

  constructor(private sellCarService: SellCarService) { }

  ngOnInit(): void {

    this.customer = JSON.parse(localStorage.getItem('data')||'{}');

    this.sellCarService.carsPune(this.customer.customerPhno).subscribe(
      data => {
        this.car = data;
        console.log(JSON.stringify(this.car));
      },
      error => {
        console.log(error);
      }
    );
  }
}
