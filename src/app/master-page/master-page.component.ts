import { Component } from '@angular/core';

@Component({
  selector: 'app-master-page',
  template: `
  <nav class='navbar navbar-expand navbar-light bg-light'>
      <a class='navbar-brand'>{{pageTitle}}</a><br>
      <ul class='nav nav-pills'>
        <li><a class='nav-link' routerLinkActive='active' [routerLink]="['/welcome']">Home</a></li>
        <li><a class='nav-link' routerLinkActive='active' [routerLink]="['/field']">Fields</a></li>
        <li><a class='nav-link' routerLinkActive='active' [routerLink]="['/user']">Users</a></li>
        <li><a class='nav-link' routerLinkActive='active' [routerLink]="['/reservation']">Reservations</a></li>
        <li><a class='nav-link' routerLinkActive='active' [routerLink]="['/adduser']">Add User</a></li>
        <li><a class='nav-link' routerLinkActive='active' [routerLink]="['/addfield']">Add Field</a></li>
        <li><a class='nav-link' routerLinkActive='active' [routerLink]="['/addreservation']">Add Reservation</a></li>
      </ul>
  </nav>
  <div class='container'>
    <router-outlet></router-outlet>
  </div>
  `
})
export class MasterPageComponent {
  pageTitle="Master Page";
}
