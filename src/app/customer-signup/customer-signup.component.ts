import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerSignupService } from '../customer-signup.service';
import { Customer } from '../model/customer';

@Component({
  selector: 'app-customer-signup',
  templateUrl: './customer-signup.component.html',
  styleUrls: ['./customer-signup.component.css']
})
export class CustomerSignupComponent implements OnInit {

  location: string[] = ['Bengaluru','Chennai','Pune'];
  customer: Customer = new Customer();
  formSubmitted = false;
  errorMessage!: string;

  constructor(private customerSignupService: CustomerSignupService, private router:Router) { }

  ngOnInit(): void {
  }

  registerCustomerDetails(customer: Customer) {
    console.log(customer);
    this.customerSignupService.registerCustomerDetails(customer).subscribe(
      data => {
        console.log(data);
        this.router.navigateByUrl('/login')
      },
      error => {
        console.log(error);
        this.errorMessage = "User Already exists."
      }
    );
  }

}
