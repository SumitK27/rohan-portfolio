import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Portfolio } from './portfolio.model';

@Injectable({
  providedIn: 'root',
})
export class PortfolioService {
  constructor(private http: HttpClient) {}

  getData(): Observable<Portfolio> {
    return this.http.get('assets/data.json') as Observable<Portfolio>;
  }
}
