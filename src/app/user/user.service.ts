import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { IUser } from "./IUser";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userUrl = 'https://localhost:44395/api/user';

  constructor(private http: HttpClient) { }

  getUsers():  Observable<IUser[]> {
    return this.http.get<IUser[]>(this.userUrl).pipe(
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

  getUser(id: number): Observable<IUser| undefined> {
    return this.getUsers().pipe(
      map((users: IUser[]) => users.find(u => u.userId === id))
    );
  }

}
