import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { IUser } from "./IUser";
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userUrl = 'https://localhost:44395/api/user';
  httpOptions={
    headers:new HttpHeaders({
      "Content-Type": "application/json"
    })
  }

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

  public addUser(user: User): Observable<User>{
    console.log(JSON.stringify(user));
    return this.http.post<User>(this.userUrl, user, this.httpOptions);
  }

  updateUser(user: IUser): Observable<IUser> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const url = `${this.userUrl}/${user.userId}`;
    return this.http.put<User>(url, user, { headers: headers })
      .pipe(
        tap(() => console.log('updateuser: ' + user.userId)),
        // Return the user on an update
        map(() => user),
        catchError(this.handleError)
      );
  }

  deleteUser(id: number): Observable<{}> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const url = `${this.userUrl}/${id}`;
    return this.http.delete<User>(url, { headers: headers })
      .pipe(
        tap(data => console.log('deleteUser: ' + id)),
        catchError(this.handleError)
      );
  }

}
