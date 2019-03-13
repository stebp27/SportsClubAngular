import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { User } from "../user";

@Component({
  selector: 'app-user-signup',
  templateUrl: './user-signup.component.html',
  styleUrls: ['./user-signup.component.css']
})
export class UserSignupComponent implements OnInit {
  user= new User();

  constructor() { }

  ngOnInit() {
  }

  save(userForm: NgForm) {
    console.log(userForm.form);
    console.log('Saved: ' + JSON.stringify(userForm.value));
  }
}
