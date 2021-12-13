import axios, { AxiosInstance } from "axios";
import { REACT_APP_WEB3_URL } from "../env";

export class Web3HttpClient {
  private readonly axiosInstance: AxiosInstance;

  constructor() {
    this.axiosInstance = axios.create({ baseURL: REACT_APP_WEB3_URL });
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

  async getSignerStatus(): Promise<string> {
    return await (
      await this.axiosInstance.get("/upcheck", {
        responseType: "text",
      })
    ).data;
  }

  async getSignerPublicKeys(): Promise<string[]> {
    return await (
      await this.axiosInstance.get("/api/v1/eth2/publicKeys", {
        responseType: "json",
      })
    ).data;
  }

  async postReloadSignerKeys(): Promise<void> {
    await this.axiosInstance.post("/reload");
  }
}
