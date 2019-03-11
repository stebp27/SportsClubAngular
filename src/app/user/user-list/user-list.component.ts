import { Component, OnInit } from '@angular/core';
import { IUser } from "../IUser";
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users : IUser[] = [];
  user : IUser;
  errorMessage = '';


  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(
      users => {
        this.users = users;
        this.user = this.users[0];
      },
      error => this.errorMessage = <any>error
    );
  }

}
