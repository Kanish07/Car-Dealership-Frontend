import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { Branch } from '../model/branch';
import { Car } from '../model/car';
import { SellCarService } from '../sell-car.service';

@Component({
  selector: 'app-branch-cardetails',
  templateUrl: './branch-cardetails.component.html',
  styleUrls: ['./branch-cardetails.component.css']
})
export class BranchCardetailsComponent implements OnInit {

  car: any;
  branch: Branch;

  constructor(private sellCarService: SellCarService, @Inject(DOCUMENT) private _document: Document) { }

  ngOnInit(): void {
    this.branch = JSON.parse(localStorage.getItem('branch') || '{}');
    this.sellCarService.pendingCar(this.branch.branchLocation).subscribe(
      data => {
        this.car = data;
        console.log(data);
      },
      error => {
        console.log(error);
      }
    );
  }

  send(car){
    this.sellCarService.acceptCar(car).subscribe(
      data=>{
        this._document.defaultView.location.reload();
        console.log(data);
      },
      error => {
        console.log(error);
      }
    );
  }

  reject(cars: any){
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
