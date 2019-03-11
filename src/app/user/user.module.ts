import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserDetailGuard } from './user-detail/user-detail.guard';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forChild([
      { path: 'user', component: UserListComponent },
      { path: 'user/:id', canActivate: [UserDetailGuard], component: UserDetailComponent }
    ]),
  ],
  declarations: [ UserListComponent, UserDetailComponent],
  providers: [],
  bootstrap: [UserListComponent]
})
export class UserModule { }
