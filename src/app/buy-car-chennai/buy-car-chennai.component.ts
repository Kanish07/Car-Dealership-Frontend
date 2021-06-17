import { Component, OnInit } from '@angular/core';
import { Car } from '../model/car';
import { Customer } from '../model/customer';
import { SellCarService } from '../sell-car.service';

@Component({
  selector: 'app-buy-car-chennai',
  templateUrl: './buy-car-chennai.component.html',
  styleUrls: ['./buy-car-chennai.component.css']
})
export class BuyCarChennaiComponent implements OnInit {
  car!: Car[];
  customer!: Customer;

  constructor(private sellCarService: SellCarService) { }

  ngOnInit(): void {

    this.customer = JSON.parse(localStorage.getItem('data')||'{}');

    this.sellCarService.carsChennai(this.customer.customerPhno).subscribe(
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
