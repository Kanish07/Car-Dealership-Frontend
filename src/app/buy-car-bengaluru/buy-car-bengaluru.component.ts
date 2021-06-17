import { Component, OnInit } from '@angular/core';
import { Car } from '../model/car';
import { Customer } from '../model/customer';
import { SellCarService } from '../sell-car.service';

@Component({
  selector: 'app-buy-car-bengaluru',
  templateUrl: './buy-car-bengaluru.component.html',
  styleUrls: ['./buy-car-bengaluru.component.css']
})
export class BuyCarBengaluruComponent implements OnInit {

  car!: Car[];
  customer!: Customer;

  constructor(private sellCarService: SellCarService) { }

  ngOnInit(): void {

    this.customer = JSON.parse(localStorage.getItem('data') || '{}');
    console.log(this.customer.customerPhno);
    this.sellCarService.carsBengaluru(this.customer.customerPhno).subscribe(
      data => {
        this.car = data;
        console.log(JSON.stringify(this.car));
      },
      error => {
        console.log(error);
      }
    );
  }

  send(car: { carRegno: any; }){
    console.log(car)
    const c = {
      "customer":{
        "customerPhno":this.customer.customerPhno
      },
      "car":{
        "carRegno":car.carRegno
      }
    }

    this.sellCarService.buyCar(c).subscribe(
      data => {
        console.log(data);
      },
      error => {
      console.log(error);
      }
    );
  }

}
