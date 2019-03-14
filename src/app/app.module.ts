import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FieldModule } from './field/field.module';
import { FieldListComponent } from './field/field-list/field-list.component';
import { MasterPageComponent } from './master-page/master-page.component';
import { RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { UserModule } from './user/user.module';
import { ReservationModule } from './reservation/reservation.module';
import { FieldAddComponent } from './field-add/field-add.component';
import { FormsModule } from '@angular/forms';


@NgModule({
   declarations: [
      AppComponent,
      MasterPageComponent,
      WelcomeComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      RouterModule.forRoot([     
      { path: 'welcome', component: WelcomeComponent },
      { path: '**', component: WelcomeComponent },
      { path: ' ', component: WelcomeComponent }
      ]),
      FieldModule,
      UserModule,
      ReservationModule,
      FormsModule
   ],
   providers: [],
   bootstrap: [MasterPageComponent]
}) 
export class AppModule { }
