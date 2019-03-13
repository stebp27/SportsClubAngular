import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { IChallenge } from "./IChallenge";

@Injectable({
  providedIn: 'root'
})
export class ChallengeService {

  private challengeUrl = 'https://localhost:44395/api/challenges';

  constructor(private http: HttpClient) { }

  getChallenges():  Observable<IChallenge[]> {
    return this.http.get<IChallenge[]>(this.challengeUrl).pipe(
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

  getChallenge(id: number): Observable<IChallenge| undefined> {
    return this.getChallenges().pipe(
      map((challenges: IChallenge[]) => challenges.find(c => c.challengeId === id))
    );
  }

}
