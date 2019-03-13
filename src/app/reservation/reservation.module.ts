import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReservationListComponent } from './reservation-list/reservation-list.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ReservationDetailComponent } from './reservation-detail/reservation-detail.component';
import { ReservationDetailGuard } from './reservation-detail/reservation-detail.guard';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReservationAddComponent } from './reservation-add/reservation-add.component';
import { FieldService } from '../field/field.service';
import { FieldModule } from '../field/field.module';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forChild([
      { path: 'reservation', component: ReservationListComponent },
      { path: 'reservation/:id', canActivate: [ReservationDetailGuard], component: ReservationDetailComponent },
      { path: 'addreservation', component: ReservationAddComponent}
    ]),
    FormsModule,
    ReactiveFormsModule,
    FieldModule
  ],
  declarations: [ ReservationListComponent, ReservationDetailComponent, ReservationAddComponent],
  providers: []
})
export class ReservationModule { }
