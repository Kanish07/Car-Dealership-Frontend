import { Component, OnInit } from '@angular/core';
import { Customer } from '../model/customer';

@Component({
  selector: 'app-customer-home',
  templateUrl: './customer-home.component.html',
  styleUrls: ['./customer-home.component.css']
})
export class CustomerHomeComponent implements OnInit {

  customer!: Customer;

  constructor() { }

  ngOnInit(): void {
    this.customer = JSON.parse(localStorage.getItem('data')||'{}');
    
  }

  signout(){
    localStorage.removeItem('data');
  }

}
