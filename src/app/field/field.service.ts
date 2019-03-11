import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { IField } from './IField';


@Injectable({
  providedIn: 'root'
})
export class FieldService {

  private fieldUrl = 'https://localhost:44395/api/fields';

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

}
