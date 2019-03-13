import { Component, OnInit } from '@angular/core';
import { IReservation } from "../IReservation";
import { ReservationService } from '../reservation.service';

@Component({
  selector: 'app-reservation-list',
  templateUrl: './reservation-list.component.html',
  styleUrls: ['./reservation-list.component.css']
})
export class ReservationListComponent implements OnInit {
  reservations : IReservation[] = [];
  reservation : IReservation;
  errorMessage = '';

  

  constructor(private reservationService: ReservationService) { }

  ngOnInit(): void {
    this.reservationService.getReservations().subscribe(
      reservations => {
        this.reservations = reservations;
        this.reservation = this.reservations[0];
      },
      error => this.errorMessage = <any>error
    );
  }

}
