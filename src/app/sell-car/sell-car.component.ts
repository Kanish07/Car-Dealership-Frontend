import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { FormBuilder } from '@angular/forms'
import { Router } from '@angular/router';
import { Customer } from '../model/customer';
import { SellCarService } from '../sell-car.service';

@Component({
  selector: 'app-sell-car',
  templateUrl: './sell-car.component.html',
  styleUrls: ['./sell-car.component.css']
})
export class SellCarComponent implements OnInit {

  carRegistration;
  errorMessange!: string;
  customer!: Customer;
  successMessage!: string;


  constructor(private formBuilder: FormBuilder, private sellCarService: SellCarService, private router:Router) {

    this.carRegistration = this.formBuilder.group({
      carRegno: ['', [Validators.required, Validators.minLength(10)]],
      carMake: ['', [Validators.required, Validators.minLength(3)]],
      carType: ['', [Validators.required]],
      carFuel: ['', [Validators.required]],
      carShift: ['', [Validators.required]],
      carOwnercount: ['', [Validators.required]],
      carPrice: ['', [Validators.required]],
      carYear: ['', [Validators.required]],
      carLocation: ['', [Validators.required]],
      customer: this.formBuilder.group({
        customerPhno: ['', [Validators.required]]
      })
    });
  }

  ngOnInit(): void {
    this.customer = JSON.parse(localStorage.getItem('data')||'{}');
    }


  get carRegno() {
    return this.carRegistration.get('carRegno');
  }

  get carMake() {
    return this.carRegistration.get('carMake');
  }

  get carType() {
    return this.carRegistration.get('carType');
  }

  get carFuel() {
    return this.carRegistration.get('carFuel');
  }

  get carShift() {
    return this.carRegistration.get('carShift');
  }

  get carOwnercount() {
    return this.carRegistration.get('carOwnercount');
  }

  get carPrice() {
    return this.carRegistration.get('carPrice');
  }

  get carYear() {
    return this.carRegistration.get('carYear');
  }

  get carLocation() {
    return this.carRegistration.get('carLocation');
  }

  get customerPhno() {
    return this.carRegistration.get("customer").get('customerPhno');
  }

  ccarOwnercount: count[] = [
    new count("First"),
    new count("Second"),
    new count("Multiple")
  ];

  ccarLocation: city[] = [
    new city("Bengaluru"),
    new city('Chennai'),
    new city('Pune')
  ];

  ccarType: type[] = [
    new type("Hatchback"),
    new type('Sedan'),
    new type('SUV')
  ];

  ccarFuel: fuel[] = [
    new fuel("Petrol"),
    new fuel('Diesel'),
    new fuel('LPG')
  ];

  ccarShift: shift[] = [
    new shift("Mannual"),
    new shift('Automatic')
  ];

  registerCarDetails(carRegistration: any){
    console.log(carRegistration);
    this.sellCarService.registerCarDetails(carRegistration).subscribe(
      data => {
        console.log(data);
        this.router.navigateByUrl('/my-cars');
        this.successMessage = "Car Uploaded Successfully";
      },
      error => {
        console.log(error);
        this.errorMessange = "Car Already exists."
      }
    );
  }

}

export class count {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}

export class shift {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}

export class fuel {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}

export class type {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}

export class city {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}
