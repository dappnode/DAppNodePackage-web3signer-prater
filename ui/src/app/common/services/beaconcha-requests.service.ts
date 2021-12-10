import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

export interface ValidatorRequest {
  status: string;
  data: {
    activationeligibilityepoch: number;
    activationepoch: number;
    balance: number;
    effectivebalance: number;
    exitepoch: number;
    lastattestationslot: number;
    name: string | null;
    pubkey: string;
    slashed: boolean;
    status: string;
    validatorindex: number;
    withdrawableepoch: number;
    withdrawalcredentials: string;
  };
}

/**
 * Beaconcha API Service to get validator performance data
 * In the future this should be replaced with the standar API
 * of the Eth2 clients
 * - API docs: https://beaconcha.in/api/v1/docs/index.html#/
 */

@Injectable({
  providedIn: 'root',
})
export class BeaconchaRequestsService {
  private apiUrl: string;

  constructor(private http: HttpClient) {
    this.apiUrl = `${environment.beaconchaPraterUrl}/api/v1/validator`;
  }

  /**
   * Get validator performance
   * https://beaconcha.in/api/v1/docs/index.html#/Validator/get_api_v1_validator__indexOrPubkey_
   * @returns validator performance
   */
  getValidator(publicKeys: string[]): Observable<ValidatorRequest> {
    // Request example
    /**
     * {"status":"OK",
     *   "data": {
     *     "activationeligibilityepoch":55536,
     *     "activationepoch":55546,
     *     "balance":32046360420,
     *     "effectivebalance":32000000000,
     *     "exitepoch":9223372036854775807,
     *     "lastattestationslot":1884904,
     *     "name":null,
     *     "pubkey":"0x852a771165fd991e497e1a37fcaaac41a5dae7fa3e6c38b1c11a9be7203c7bac0d88ae067e0b053db72d0b2231339cb3",
     *     "slashed":false,
     *     "status":"active_online",
     *     "validatorindex":268445,
     *     "withdrawableepoch":9223372036854775807,
     *     "withdrawalcredentials":"0x005c825d2e34a068f2e03d5eae96f164b93a89359e1bb6a2943682f7987ad7e3"
     *    }
     *  }
     */
    return this.http.get(`${this.apiUrl}/${publicKeys.join(',')}`, {
      responseType: 'json',
    }) as Observable<ValidatorRequest>;
  }
}
