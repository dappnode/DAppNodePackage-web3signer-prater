import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SignerRequestsService {
  private apiUrl: string;

  constructor(private http: HttpClient) {
    this.apiUrl = environment.web3signerUrl;
  }

  getSignerStatus(): Observable<string> {
    return this.http.get(this.apiUrl + '/upcheck', { responseType: 'text' });
  }

  getSignerPublicKeys(): Observable<string[]> {
    return this.http.get(this.apiUrl + '/api/v1/eth2/publicKeys', {
      responseType: 'json',
    }) as Observable<string[]>;
  }

  postReloadSignerKeys(): void {
    this.http.post(this.apiUrl + '/reload', {}).subscribe();
  }
}
