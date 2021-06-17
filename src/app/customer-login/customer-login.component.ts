import { Component, OnInit } from '@angular/core';
import { Customer } from '../model/customer';
import { Router } from '@angular/router';
import { CustomerSignupService } from '../customer-signup.service';

@Component({
  selector: 'app-customer-login',
  templateUrl: './customer-login.component.html',
  styleUrls: ['./customer-login.component.css']
})
export class CustomerLoginComponent implements OnInit {

  customer: Customer = new Customer();
  formSubmitted = false;
  errorMessage!: string;

  constructor(private router:Router, private customerSignupService: CustomerSignupService) { }

  ngOnInit(): void {
  }

  customerlogin(customer: Customer) {
    console.log(customer);

    this.customerSignupService.listOfCustomer().subscribe(
      data => {
        console.log(data);
      }
    );

    this.customerSignupService.customerlogin(customer).subscribe(
      data => {
        console.log(data);
        localStorage.setItem('data', JSON.stringify(data));
        this.router.navigateByUrl('/customer-home');
      },
      error => {
        console.log(error);
        this.errorMessage = error.error.message;
      }
    );
  }

}
