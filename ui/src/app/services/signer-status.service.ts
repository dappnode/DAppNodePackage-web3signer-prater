import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SignerStatusService {
  private apiUrl = 'http://localhost:5000';

  constructor(private http: HttpClient) {}

  getSignerStatus(): Observable<string> {
    return this.http.get(this.apiUrl + '/upcheck', { responseType: 'text' });
  }
}
