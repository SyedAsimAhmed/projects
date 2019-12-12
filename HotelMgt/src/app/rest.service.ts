import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { map, catchError, retry, tap } from 'rxjs/operators';
import { Hotel } from './Hotel';


@Injectable({
  providedIn: 'root'
})
export class RestService {

  private hotelsUrl: string;

  constructor(private http: HttpClient) {
    this.hotelsUrl = 'http://localhost:8081/hotels';
  }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type' : 'application/json'
    })
  };

  public findAll(): Observable<Hotel[]> {
    return this.http.get<Hotel[]>(this.hotelsUrl);
  }


}
