import { Component, OnInit } from '@angular/core';
import { Branch } from '../model/branch';
import { Car } from '../model/car';
import { SellCarService } from '../sell-car.service';

@Component({
  selector: 'app-branch-soldcars',
  templateUrl: './branch-soldcars.component.html',
  styleUrls: ['./branch-soldcars.component.css']
})
export class BranchSoldcarsComponent implements OnInit {

  car: any;
  branch: Branch;

  constructor(private sellCarService: SellCarService) { }

  ngOnInit(): void {
    this.branch = JSON.parse(localStorage.getItem('branch')||'{}');
    this.sellCarService.soldCar(this.branch.branchLocation).subscribe(
      data => {
        this.car = data;
      },
      error => {
        console.log(error);
        
      }
    );
  }

}
