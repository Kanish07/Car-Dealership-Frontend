import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Branch } from '../model/branch';
import { CustomerSignupService } from '../customer-signup.service';

@Component({
  selector: 'app-branch-login',
  templateUrl: './branch-login.component.html',
  styleUrls: ['./branch-login.component.css']
})
export class BranchLoginComponent implements OnInit {

  branch: Branch = new Branch();
  formSubmitted = false;
  errorMessage!: string;

  constructor(private router:Router, private customerSignupService: CustomerSignupService) { }

  ngOnInit(): void {
  }

  branchlogin(branch){
    this.customerSignupService.branchLogin(branch).subscribe(
      data => {
        console.log(data);
        localStorage.setItem('branch', JSON.stringify(data));
        this.router.navigateByUrl('/branch-home');
      },
      error => {
        console.log(error);
        this.errorMessage = error.error.message;
      }
    );
  }

}
