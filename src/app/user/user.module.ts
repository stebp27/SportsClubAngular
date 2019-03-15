import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UserListComponent } from './user-list/user-list.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserDetailGuard } from './user-detail/user-detail.guard';
import { UserSignupComponent } from './user-signup/user-signup.component';
import { UserEditComponent } from './user-edit/user-edit.component';


@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forChild([
      { path: 'user', component: UserListComponent },
      { path: 'adduser', component: UserSignupComponent },
      { path: 'user/:id', canActivate: [UserDetailGuard], component: UserDetailComponent },
      { path: 'user/:id/edit', component: UserEditComponent}
    ]),
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [ UserListComponent, UserDetailComponent, UserSignupComponent, UserEditComponent],
  providers: []
})
export class UserModule { }
