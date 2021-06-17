import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Car } from './model/car';
import { Customer } from './model/customer';

@Injectable({
  providedIn: 'root'
})
export class SellCarService {

  constructor(private httpClient: HttpClient) { }

  registerCarDetails(car: any) : Observable<Object>{
    console.log(car);
    let url = "http://localhost:8090/api/car/register-car";
    return this.httpClient.post(url, car);
  }

  carsBengaluru(customerPhno: number): Observable<Car[]> {
    console.log({customerPhno})
    let url = "http://localhost:8090/api/car/bengaluru";
    return this.httpClient.post<Car[]>(url, {customerPhno});
  }

  carsChennai(customerPhno: number): Observable<Car[]> {
    let url = "http://localhost:8090/api/car/chennai";
    return this.httpClient.post<Car[]>(url, {customerPhno});
  }

  carsPune(customerPhno: number): Observable<Car[]> {
    let url = "http://localhost:8090/api/car/pune";
    return this.httpClient.post<Car[]>(url, {customerPhno});
  }

  carList(car: Customer): Observable<Car[]> {
    let url = "http://localhost:8090/api/car/yourcarlist";
    return this.httpClient.post<Car[]>(url, car);
  }

  deleteCar(carRegno: any): Observable<Object> {
    console.log({carRegno})
    let url = "http://localhost:8090/api/car/delete";
    return this.httpClient.post(url, {carRegno});
  }

  buyCar(c: { customer: { customerPhno: number; }; car: { carRegno: any; }; }): Observable<Object> {
    let url = "http://localhost:8090/api/purchase/register";
    return this.httpClient.post(url, c);
  }

  myPurchase(customerPhno: number): Observable<Car[]>{
    let url = "http://localhost:8090/api/purchase/record";
    return this.httpClient.post<Car[]>(url, {customerPhno});
  }

  pendingCar(branchLocation: String):Observable<Object>{
    let url = "http://localhost:8090/api/car/pendingcar-bengaluru";
    return this.httpClient.post(url, {branchLocation});
  }

  acceptCar(carRegno: String): Observable<Object>{
    let url = "http://localhost:8090/api/car/accept";
    return this.httpClient.post(url, {carRegno});
  }

  soldCar(branchLocation: String): Observable<Object>{
    let url = "http://localhost:8090/api/car/sold";
    return this.httpClient.post(url, {branchLocation});
  }

}
