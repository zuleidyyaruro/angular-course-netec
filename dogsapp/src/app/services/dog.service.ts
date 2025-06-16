import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, map, Observable, throwError, timeout } from 'rxjs';
import { Dog } from '../interfaces/dog.interface';

@Injectable({
  providedIn: 'root'
})
export class DogService {

  private http: HttpClient = inject(HttpClient);
  private baseUri: string = 'http://localhost:8082/dog';

  constructor() { }

  getDogs(): Observable<Dog[]> {
    return this.http.get<Dog[]>(this.baseUri)
      .pipe(
        timeout(3000),
        map(dogs => dogs.map(d => ({
          id: d.id,
          breed: d.breed.toUpperCase(),
          description: d.description,
          urlImage: d.urlImage
        }))),
        catchError(error => {
          console.error('Error fetching dogs:', error);
          return throwError(() => new Error('Error fetching dogs'));
        })
      )
  }

  insertDog(dog: Dog): Observable<void> {
    return this.http.post<void>(this.baseUri, dog)
      .pipe(
        timeout(3000),
        catchError(error => {
          console.error('Error inserting dog:', error);
          return throwError(() => new Error('Error inserting dog'));
        })
      )
  }

  deleteDog(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUri}/${id}`)
      .pipe(
        timeout(3000),
        catchError(error => {
          console.error('Error deleting dog:', error);
          return throwError(() => new Error('Error deleting dog'));
        })
      )
  }
}
