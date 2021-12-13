import axios, { AxiosInstance } from "axios";
import { REACT_APP_BEACONCHA_PRATER_URL } from "../env";
import { ValidatorResponse } from "./types";

/**
 * Beaconcha API Service to get validator performance data
 * In the future this should be replaced with the standar API
 * of the Eth2 clients
 * - API docs: https://beaconcha.in/api/v1/docs/index.html#/
 */
export class BeaconchaClient {
  private readonly axiosInstance: AxiosInstance;

  constructor() {
    this.axiosInstance = axios.create({ baseURL: REACT_APP_BEACONCHA_PRATER_URL });
    this.requestInterceptor();
    this.responseInterceptor();
  }

  requestInterceptor(): void {
    this.axiosInstance.interceptors.request.use(
      function (config) {
        // Do something before request is sent
        console.log(config);
        return config;
      },
      function (error) {
        // Do something with request error
        console.log(error);
        return Promise.reject(error);
      }
    );
  }

  responseInterceptor(): void {
    this.axiosInstance.interceptors.response.use(
      function (response) {
        // Any status code that lie within the range of 2xx cause this function to trigger
        // Do something with response data
        console.log(response);
        return response;
      },
      function (error) {
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error
        console.log(error);
        return Promise.reject(error);
      }
    );
  }

  /**
   * Get validator performance
   * https://beaconcha.in/api/v1/docs/index.html#/Validator/get_api_v1_validator__indexOrPubkey_
   * @returns validator performance
   */
  async getValidator(publicKey: string): Promise<ValidatorResponse> {
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
    return await (
      await this.axiosInstance.get(`/api/v1/validator/${publicKey}`, {
        responseType: "json",
      })
    ).data;
  }
}
