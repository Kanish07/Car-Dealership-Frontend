import { Component, OnInit } from '@angular/core';
import { Car } from '../model/car';
import { Customer } from '../model/customer';
import { SellCarService } from '../sell-car.service';
import { jsPDF } from "jspdf";
import 'jspdf-autotable'

@Component({
  selector: 'app-my-purchase',
  templateUrl: './my-purchase.component.html',
  styleUrls: ['./my-purchase.component.css']
})
export class MyPurchaseComponent implements OnInit {

  car!: Car[];
  customer!: Customer;

  constructor(private sellCarService: SellCarService) { }

  ngOnInit(): void {
    this.customer = JSON.parse(localStorage.getItem('data')||'{}');

    this.sellCarService.myPurchase(this.customer.customerPhno).subscribe(
      data => {
        this.car = data;
        console.log(data);
      },
      error => {
        console.log(error);
      }
    );
  }

  convert(con: { car: { carMake: string; carRegno: string; carLocation:string; carFuel:string; }; id: string; }, customer) {

    console.log(con);
    var model = 'Car Model: ' + con.car.carMake;
    var orderid = 'Order ID: ' + con.id;
    if(con.car.carLocation == 'Bengaluru') {
      var del_locatiom = 'Delievery Location: ' + '110, Shivaji Nagar, Bengaluru - 541002, Ph.NO: 9879879987'
    }else if(con.car.carLocation == 'Pune') {
      var del_locatiom = 'Delievery Location: ' + '110, Shivaji Nagar, Pune - 410221, Ph.NO: 9879879988'
    }
    else {
      var del_locatiom = 'Delievery Location: ' + '110, Shivaji Nagar, Chennai - 600010, Ph.NO: 9879879989'
    }
    var regno = 'Regestration No: ' + con.car.carRegno;
    var fuel = 'Fuel: ' + con.car.carFuel;
    var name = 'Customer Name: ' + customer.customerName;
    var doc = new jsPDF('l');
    doc.setFontSize(15);
    doc.setTextColor("red");
    doc.text("CARS365", 45, 33);
    doc.addImage("assets/logo.gif",15,15,30,30)
    doc.setFontSize(20);
    doc.setTextColor("black");
    doc.text(model, 15, 60);
    doc.text(orderid, 15, 75);
    doc.text(regno, 15, 90);
    doc.text(fuel, 15, 105);
    doc.text(name, 15, 120);
    doc.text(del_locatiom, 15, 135);
    doc.save('Test.pdf');
  }

}
