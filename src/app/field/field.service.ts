import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { IField } from './IField';
import { Sports } from '../reservation/IReservation';
import { Field } from './field';


@Injectable({
  providedIn: 'root'
})
export class FieldService {

  private fieldUrl = 'https://localhost:44395/api/fields';
  httpOptions = {
    headers: new HttpHeaders ({
      "Content-Type": "application/json"
    })
  }

  constructor(private http: HttpClient) { }

  getFields():  Observable<IField[]> {
    return this.http.get<IField[]>(this.fieldUrl).pipe(
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

  getField(id: number): Observable<IField| undefined> {
    return this.getFields().pipe(
      map((fields: IField[]) => fields.find(f => f.fieldId === id))
    );
  }

  public addField(field : Field): Observable<Field> {
    console.log(JSON.stringify(field));
    return this.http.post<Field>(this.fieldUrl,JSON.stringify(field), this.httpOptions);
  }

}
