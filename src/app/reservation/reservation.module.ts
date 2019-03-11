import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReservationListComponent } from './reservation-list/reservation-list.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ReservationDetailComponent } from './reservation-detail/reservation-detail.component';
import { ReservationDetailGuard } from './reservation-detail/reservation-detail.guard';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forChild([
      { path: 'reservation', component: ReservationListComponent },
      { path: 'reservation/:id', canActivate: [ReservationDetailGuard], component: ReservationDetailComponent }
    ]),
  ],
  declarations: [ ReservationListComponent, ReservationDetailComponent],
  providers: [],
  bootstrap: [ReservationListComponent]
})
export class ReservationModule { }
