import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { Car } from '../model/car';
import { Customer } from '../model/customer';
import { SellCarService } from '../sell-car.service';

@Component({
  selector: 'app-my-cars',
  templateUrl: './my-cars.component.html',
  styleUrls: ['./my-cars.component.css']
})
export class MyCarsComponent implements OnInit {

  customer!: Customer;
  car!: Car[];

  constructor(private sellCarService: SellCarService, @Inject(DOCUMENT) private _document: Document) { }

  ngOnInit(): void {
    this.customer = JSON.parse(localStorage.getItem('data')||'{}');

    this.sellCarService.carList(this.customer).subscribe(
      data => {
        console.log(data);
        this.car = data;
      },
      error => {
        console.log(error);
      }
    );
  }

  delete(cars: any){
    console.log(cars,"Deleting It")
    this.sellCarService.deleteCar(cars).subscribe(
      data => {
        console.log(data, "Car Deleted Successfully");
      },
      error => {
        console.log(error);
        this._document.defaultView.location.reload();
      }
    );
  }

}
