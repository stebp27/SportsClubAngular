import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user.service';

import { IUser } from '../IUser';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  user: IUser;
  userForm: FormGroup;
  private sub: Subscription;
  allUsers: IUser[];

  pageTitle="";
  errorMessage="";
  displayMessage: { [key: string]: string } = {};

  constructor(private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService) { }

  ngOnInit() {
    this.userForm = this.fb.group({
    firstName :[ '', [Validators.required, Validators.minLength(3)]],
    lastName :[ '', [Validators.required, Validators.maxLength(50)]],
    birthDate :['',[Validators.required]],
    address :[ '', [Validators.required]],
    email :[ '', [Validators.required]],
    phoneNumber :[ '', [Validators.required]]
    });
      
    this.sub = this.route.paramMap.subscribe(
      params => {
        const id = +params.get('id');
        this.getUser(id);
      }
    );
  }

  getUser(id: number): void {
    this.userService.getUser(id)
      .subscribe(
        (user: IUser) => this.displayUser(user),
        (error: any) => this.errorMessage = <any>error
      );
  }

  displayUser(user: IUser): void {
    if (this.userForm) {
      this.userForm.reset();
    }
    this.user = user;

    if (this.user.userId === 0) {
      this.pageTitle = 'Add user';
    } else {
      this.pageTitle = `Edit user: ${this.user.firstName}`;
    }

    // Update the data on the form
    this.userForm.patchValue({
      firstName: this.user.firstName,
      lastName: this.user.lastName,
      birthDate: this.user.birthDate,
      address: this.user.address,
      email: this.user.email,
      phoneNumber: this.user.phoneNumber
    })
  }

  saveEditUser(): void {
    console.log(this.userForm);
    console.log('Saved: ' + JSON.stringify(this.userForm.value));
    if(this.userForm.valid){
      if(this.userForm.dirty){
        const p = { ...this.user, ...this.userForm.value };

        this.userService.updateUser(p)
          .subscribe(
            () => this.onSaveComplete(),
            (error: any) => this.errorMessage = <any>error
          );
      }
      else {
        this.onSaveComplete();
      }
    }
    else {
      this.errorMessage = 'Please correct the validation errors.';
    }
  }

  onSaveComplete(): void {
    // Reset the form to clear the flags
    this.userForm.reset();
    this.router.navigate(['/user']);
  }

  deleteUser(): void {
    if (this.user.userId === 0) {
      // Don't delete, it was never saved.
      this.onSaveComplete();
    } else {
      if (confirm(`Really delete the user: ${this.user.firstName}?`)) {
        this.userService.deleteUser(this.user.userId)
          .subscribe(
            () => this.onSaveComplete(),
            (error: any) => this.errorMessage = <any>error
          );
      }
    }
  }
}
