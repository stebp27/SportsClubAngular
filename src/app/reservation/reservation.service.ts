import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { IReservation } from "./IReservation";

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  private reservationUrl = 'https://localhost:44395/api/reservations';

  constructor(private http: HttpClient) { }

  getReservations():  Observable<IReservation[]> {
    return this.http.get<IReservation[]>(this.reservationUrl).pipe(
      tap(data => console.log('All: ' + JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  private handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }

  getReservation(id: number): Observable<IReservation| undefined> {
    return this.getReservations().pipe(
      map((reservations: IReservation[]) => reservations.find(r => r.reservationId === id))
    );
  }

}
