import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {AboutComponent} from "./about/about.component";
import { CustomerLoginComponent } from './customer-login/customer-login.component';
import { CustomerSignupComponent } from './customer-signup/customer-signup.component';
import { ContactComponent } from './contact/contact.component';
import { CustomerHomeComponent } from './customer-home/customer-home.component';
import { SellCarComponent } from './sell-car/sell-car.component';
import { BuyCarBengaluruComponent } from './buy-car-bengaluru/buy-car-bengaluru.component';
import { BuyCarChennaiComponent } from './buy-car-chennai/buy-car-chennai.component';
import { BuyCarPuneComponent } from './buy-car-pune/buy-car-pune.component';
import { MyCarsComponent } from './my-cars/my-cars.component';
import { MyPurchaseComponent } from './my-purchase/my-purchase.component';
import { BranchLoginComponent } from './branch-login/branch-login.component';
import { BranchCardetailsComponent } from './branch-cardetails/branch-cardetails.component';
import { BranchComponent } from './branch/branch.component';
import { BranchHomeComponent } from './branch-home/branch-home.component';
import { BranchSoldcarsComponent } from './branch-soldcars/branch-soldcars.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "about", component: AboutComponent},
  {path: "login", component: CustomerLoginComponent},
  {path: "signup", component: CustomerSignupComponent},
  {path: "contact", component: ContactComponent},
  {path: "customer-home", component: CustomerHomeComponent},
  {path: "sell-car", component: SellCarComponent},
  {path: "buy-car-bengaluru", component: BuyCarBengaluruComponent},
  {path: "buy-car-chennai", component: BuyCarChennaiComponent},
  {path: "buy-car-pune", component: BuyCarPuneComponent},
  {path: "my-cars", component: MyCarsComponent},
  {path: "my-buy", component: MyPurchaseComponent},
  {path: "branch", component: BranchComponent},
  {path: "branch-login", component: BranchLoginComponent},
  {path: "branch-cardetails", component: BranchCardetailsComponent},
  {path: "branch-home", component:BranchHomeComponent},
  {path: "sold-cars", component:BranchSoldcarsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
