import { Component } from '@angular/core';

@Component({
  selector: 'app-master-page',
  template: `
  <nav class='navbar navbar-expand navbar-light bg-light'>
      <a class='navbar-brand'>{{pageTitle}}</a>
      <ul class='nav nav-pills'>
        <li><a class='nav-link' routerLinkActive='active' [routerLink]="['/welcome']">Home</a></li>
        <li><a class='nav-link' routerLinkActive='active' [routerLink]="['/field']">Field</a></li>
        <li><a class='nav-link' routerLinkActive='active' [routerLink]="['/user']">User</a></li>
        <li><a class='nav-link' routerLinkActive='active' [routerLink]="['/reservation']">Reservation</a></li>
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
