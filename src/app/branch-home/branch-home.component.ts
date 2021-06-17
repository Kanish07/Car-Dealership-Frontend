import { Component, OnInit } from '@angular/core';
import { Branch } from '../model/branch';

@Component({
  selector: 'app-branch-home',
  templateUrl: './branch-home.component.html',
  styleUrls: ['./branch-home.component.css']
})
export class BranchHomeComponent implements OnInit {

  branch: Branch

  constructor() { }

  ngOnInit(): void {
    this.branch = JSON.parse(localStorage.getItem('branch')||'{}');
  }

  signout(){
    localStorage.removeItem('bracnh');
  }
}
