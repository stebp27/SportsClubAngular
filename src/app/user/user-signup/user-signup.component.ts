import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

import { User } from "../user";
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-signup',
  templateUrl: './user-signup.component.html',
  styleUrls: ['./user-signup.component.css']
})
export class UserSignupComponent implements OnInit {
  user= new User();
  userForm: FormGroup;

  constructor(private fb: FormBuilder, private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.userForm = this.fb.group({
      firstName :[ '', [Validators.required, Validators.minLength(3)]],
      lastName :[ '', [Validators.required, Validators.maxLength(50)]],
      birthDate :['',[Validators.required]],
      address :[ '', [Validators.required]],
      email :[ '', [Validators.required]],
      phoneNumber :[ '', [Validators.required]]
      });
  }

  saveUser() {
    console.log(this.userForm);
    console.log('Saved: ' + JSON.stringify(this.userForm.value));
    if(this.userForm.valid){
      this.user=this.userForm.value;
      console.log("pippo"+JSON.stringify(this.user));
    }
    this.userService.addUser(this.user).subscribe();
    this.router.navigate(['/user']);
  }
}
