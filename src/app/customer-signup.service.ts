import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from './model/customer';
import { Branch } from './model/branch';

@Injectable({
  providedIn: 'root'
})
export class CustomerSignupService {

  constructor(private httpClient: HttpClient) { }

  registerCustomerDetails(customer: Customer): Observable<Object> {
    console.log(customer);
    let url = "http://localhost:8090/api/customer/signup";
    return this.httpClient.post(url, customer);
  }

  customerlogin(customer: Customer): Observable<Object> {
    console.log(customer);
    let url = "http://localhost:8090/api/customer/login";
    return this.httpClient.post(url, customer);
  }

  listOfCustomer(): Observable<Customer[]> {
    return this.httpClient.get<Customer[]>("http://localhost:8090/api/customer");
  }

  branchLogin(branch: Branch): Observable<Object>{
    let url = "http://localhost:8090/api/branch/login";
    return this.httpClient.post(url, branch);
  }
}
