import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IReservation } from '../IReservation';
import { ReservationService } from '../reservation.service';

@Component({
  selector: 'app-reservation-detail',
  templateUrl: './reservation-detail.component.html',
  styleUrls: ['./reservation-detail.component.css']
})
export class ReservationDetailComponent implements OnInit {
  errorMessage = '';
  reservation: IReservation | undefined;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private reservationService: ReservationService) {
  }

  ngOnInit() {
    const param = this.route.snapshot.paramMap.get('id');
    if (param) {
      const id = +param;
      this.getReservation(id);
    }
  }

  getReservation(id: number) {
    this.reservationService.getReservation(id).subscribe(
      reservation => this.reservation = reservation,
      error => this.errorMessage = <any>error);
  }

  onBack(): void {
    this.router.navigate(['/reservation']);
  }
}
