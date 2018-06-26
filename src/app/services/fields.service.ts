import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { Field } from '../entities/field'





const httpOptions = {
  headers: new HttpHeaders
      ({ 'Content-Type': 'application/json' })
};



@Injectable()
export class FieldsService {
  
  private fieldsUrl='api/fields';
  
  constructor(private http: HttpClient) { }

  /** GET heroes from the server */
  getFields (): Observable<Field[]> {
  return this.http.get<Field[]>(this.fieldsUrl)
    .pipe(tap(fields=> console.log('fetched fields')));

}

getField (id: number): Observable<Field>{
  console.log('hear');
  const url=`${this.fieldsUrl}/${id}`;
  return this.http.get<Field>(url).
    pipe(tap(_=> console
      .log('fetched field id=${id}')));
}

/** PUT: update the hero on the server */
updateField (field: Field): Observable<any> {
  return this.http.put(this.fieldsUrl, field, httpOptions).pipe(
    tap(_ => console
      .log(`updated hero id=${field.id}`))
  );
}

addField(field:Field):Observable<Field>{
  return this.http.post<Field>
  (this.fieldsUrl, field, httpOptions).pipe(
    tap((field: Field) =>
     console.log(`added field w/ id=${field.id}`)))
}
}
