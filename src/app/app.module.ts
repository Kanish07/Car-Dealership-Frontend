import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CustomerLoginComponent } from './customer-login/customer-login.component';
import { CustomerSignupComponent } from './customer-signup/customer-signup.component';
import { ContactComponent } from './contact/contact.component';
import { CustomerHomeComponent } from './customer-home/customer-home.component';
import { SellCarComponent } from './sell-car/sell-car.component';
import { BuyCarBengaluruComponent } from './buy-car-bengaluru/buy-car-bengaluru.component';
import { BuyCarChennaiComponent } from './buy-car-chennai/buy-car-chennai.component';
import { BuyCarPuneComponent } from './buy-car-pune/buy-car-pune.component';
import { HttpClientModule } from '@angular/common/http';
import { MyCarsComponent } from './my-cars/my-cars.component';
import { MyPurchaseComponent } from './my-purchase/my-purchase.component';
import { BranchLoginComponent } from './branch-login/branch-login.component';
import { BranchHomeComponent } from './branch-home/branch-home.component';
import { BranchCardetailsComponent } from './branch-cardetails/branch-cardetails.component';
import { BranchComponent } from './branch/branch.component';
import { BranchSoldcarsComponent } from './branch-soldcars/branch-soldcars.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    CustomerLoginComponent,
    CustomerSignupComponent,
    ContactComponent,
    CustomerHomeComponent,
    SellCarComponent,
    BuyCarBengaluruComponent,
    BuyCarChennaiComponent,
    BuyCarPuneComponent,
    MyCarsComponent,
    MyPurchaseComponent,
    BranchLoginComponent,
    BranchHomeComponent,
    BranchCardetailsComponent,
    BranchComponent,
    BranchSoldcarsComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
