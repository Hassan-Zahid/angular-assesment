import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { apiEndPoint } from "./api-endpoint";

@Injectable({
  providedIn: 'root'
})
export class BannerService {
  constructor(private httpClient: HttpClient) { }

  public getBanner() {
    return this.httpClient.get(apiEndPoint);
  }
}
